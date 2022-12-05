<script>
import axios from 'axios';

//Connecte l'utilisateur
export default {
	components: {
    },
	data() {
		return {
			inputPseudo: "",
			inputPassword: "",
			token: '',
			connectionError: false
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
    <div id="login">
		<h1>Login</h1>
		<form class="Form">
			<h2>Connexion :</h2>
			<p>Pseudo</p>
				<input name="pseudo" v-model="inputPseudo" />
		<br>
		<br>
			<p>Mot de passe</p>
			<input name="password" v-model="inputPassword" />
		<br>
		<br>
		<br>
		<br>
			<div v-if="connectionError" class="connectionError">Votre mot de passe ou votre identifiant ne sont pas bons</div>
			<button type="submit" @click="submitConnexion()">Se connecter</button>
		</form>
	</div>
</template>

<style scoped>

#login{
	display: flex;
	flex-direction: column;
	align-items: center;	
	padding-top: 4rem;
}

.Form{
	width: 50vw;
	margin-bottom: 4rem;
}

h1{
	font-size: 500%;
}

.connectionError{
	margin-top: -3rem;
	color: red;
}

.read-the-docs {
	color: #888;
}
</style>
