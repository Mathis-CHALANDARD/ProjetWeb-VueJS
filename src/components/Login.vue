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
			inputPseudo: "",
			inputPassword: "",
			newPseudo: "",
			newPassword: "",
			passwordConfirmation: "",
			mail: "",
			name: "",
			surname: "",
			token: '',
			connectionError: false,
			log: "login"
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
				this.token = response.data.token;
				localStorage.setItem("token", this.token);
			})
			.catch((error) => {
				this.connectionError = true
			});
		}

	},

	mounted() {},
};
</script>

<template>
	<div class="NavBar">
		<div class="SiteName">
			<img class="Logo" src="../assets/Icone_chat.png">
			<router-link to="/" class="SiteName" @click="() => {if (this.isOpen === true){ menubar()} categoryArticle = 'Tout'}"> CatCatCatCat</router-link>
		</div>
	</div>
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
				<button type="submit" @click="submitConnexion()">Se connecter</button>
			</form>
		</div>

		<div v-else>
			<h2>Créer un compte</h2>
			<form class="Form">
				<p>Entrez votre prénom</p>
					<input name="prenom" v-model="name" />

				<p>Entrez votre nom</p>
					<input name="nom" v-model="surname" />

				<p>Entrez votre mail</p>
				<input name="mail" v-model="mail" />

				<p>Entrez votre pseudo (il sera définitif)</p>
					<input name="pseudo" v-model="newPseudo" />
			<br>
			<br>
				<p>Entrez votre mot de passe</p>
				<input name="password" type="password" v-model="newPassword" />
			<br>
			<br>
				<p>Confirmez votre mot de passe</p>
				<input name="passwordConf" type="password" v-model="passwordConfirmation" />
			<br>
			<br>
				<button type="submit" @click="submitNewUser()">Créer un compte</button>
			</form>
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
