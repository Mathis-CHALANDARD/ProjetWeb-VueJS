<script>
import axios from 'axios';
import NavBarVue from './NavBar.vue';

//Connecte l'utilisateur
export default {
	components: {
    NavBarVue
},
	data() {
		return {
			//creation de compte
			inputPseudo: "",
			inputPassword: "",
			newPseudo: "",
			newPassword: "",
			passwordConfirmation: "",
			inputMail: "",
			inputName: "",
			inputSurname: "",

			//connexion
			token: '',
			id:'',
			admin:'',
			connectionError: false,
			log: "login",
			hasToken: 0,

			//affichage
			user: ''
		};
	},

	methods: {
		submitConnexion() {
			const URL = 'http://localhost:3000/auth/login';	

			axios.post(URL, {
				username: this.inputPseudo,
				password: this.inputPassword
			})
			.then((response) => {
				this.connectionError = false;
				console.log(response);
				this.token = response.data.acces_token;
				this.id = response.data.id;
				this.admin = response.data.role;

				localStorage.setItem('token', this.token);
				localStorage.setItem('id', this.id);
				localStorage.setItem('admin', this.admin);
				localStorage.setItem('hasToken', 1);

				console.log(this.hasToken);
				this.$router.push({
                	name : "Home"
            	});
			})
			.catch((error) => {
				console.log(error);
				localStorage.setItem('hasToken', 0);
				this.connectionError = true;
			});
		},
		submitNewUser() {
			const URL = 'http://localhost:3000/user/post';	

			axios.post(URL, {
				id: "",
				isAdmin: "false",
				username: this.newPseudo,
				mail: this.inputMail,
				name: this.inputName,
				lastName: this.inputSurname,
				password: this.newPassword
			})
			.then((response) => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
		},
		getInfoUser(){
			if (localStorage.getItem('hasToken') == 1){
				fetch('http://localhost:3000/user/id/' + localStorage.getItem('id'))
						.then((res) => res.json())
						.then((res) => {
							this.user = res;
							console.log(this.user);
				});
				console.log(this.user);
			}
		},
		disconnect(){
			localStorage.setItem('token', '');
			localStorage.setItem('id', '');
			localStorage.setItem('admin', '');
			localStorage.setItem('hasToken', 0);
			window.location.reload();
		}
	},


	mounted() { 
		this.getInfoUser();
		this.hasToken = localStorage.getItem('hasToken'); 
		console.log(this.hasToken)
	},
};
</script>

<template>
	<div class="NavBar">
		<div class="SiteName">
			<img class="Logo" src="../assets/Icone_chat.png">
			<router-link to="/" class="SiteName" @click="() => {if (this.isOpen === true){ menubar()} categoryArticle = 'Tout'}"> CatCatCatCat</router-link>
		</div>
	</div>
	
	<div v-if="(this.hasToken == 1)">
		<h1> Bienvenue {{ user.username }} !  </h1>
		<div v-if="(user.isAdmin == 1)" >
			<h4>Connecté en tant qu'administrateur</h4>
			<router-link to="/favorites">Accéder aux favoris</router-link>
			<div>
				<button type="submit" class="disconnect" @click="disconnect()">Se déconnecter</button>
				<router-link to="/createArticle">Créer un article</router-link>
			</div>
		</div>
		<div v-else>
			<h4>Connecté en tant que visiteur</h4>
			<router-link to="/favorites">Accéder aux favoris</router-link>
			<button type="submit" class="disconnect" @click="disconnect()">Se déconnecter</button>
		</div>

	</div>
	<div v-else>
		<div id="login">
			<div class="choice">
				<div>
					<input type="radio" name="login" v-model="log" value="login" checked />
					<label for="login">Se connecter</label>
				</div>
				<div>
					<input type="radio" name="newUser" v-model="log" value="newUser" />
					<label for="login">Créer un compte</label>
				</div>
			</div>

			<div v-if="log === 'login'">
				<h2>Se connecter</h2>
				<form class="Form">
					<p>Pseudo</p>
						<input name="pseudo" v-model="inputPseudo" />
				<br>
				<br>
					<p>Mot de passe</p>
					<input name="password" type="password" v-model="inputPassword" />
				<br>
				<br>
				<br>
				<br>
					<div v-if="connectionError" class="connectionError">Votre mot de passe ou votre identifiant ne sont pas bons</div>
				</form>
					<button type="submit" @click="submitConnexion()">Se connecter</button>
			</div>

			<div v-else>
				<h2>Créer un compte</h2>
				<form class="Form">
					<p>Entrez votre prénom</p>
						<input name="prenom" v-model="inputName" required/>

					<p>Entrez votre nom</p>
						<input name="nom" v-model="inputSurname" required/>

					<p>Entrez votre mail</p>
					<input name="mail" v-model="inputMail" required/>

					<p>Entrez votre pseudo (il sera définitif)</p>
						<input name="pseudo" v-model="newPseudo" required/>
				<br>
				<br>
					<p>Entrez votre mot de passe</p>
					<input name="password" type="password" v-model="newPassword" required/>
				<br>
				<br>
					<p>Confirmez votre mot de passe</p>
					<input name="passwordConf" type="password" v-model="passwordConfirmation" required/>
				<br>
				<br>
				</form>
					<button type="submit" @click="submitNewUser()">Créer un compte</button>
			</div>

		</div>
	</div>
</template>

<style scoped>

#login{
	display: flex;
	flex-direction: column;
	align-items: center;	
}

.Form{
	width: 50vw;
	margin-bottom: 4rem;
}

h1{
	font-size: 500%;
}

.choice{
	display: flex;
	flex-direction: row;
	align-self: center;
	width: 30vw;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 4rem;
}

.connectionError{
	margin-top: -3rem;
	color: red;
}

.NavBar{
    display: flex;
    z-index: 7;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    max-width: 1920px;
    background-color: var(--maincolor);
}
.Logo{
    height: 50px;
    width: 50px;
    padding-left: 2rem;
    color: white;
}
.SiteName{
    color: lightgray;
    font-size: 50px;
}

.read-the-docs {
	color: #888;
}
</style>
