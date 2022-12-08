<script>
//montre le/les article(s) séléctionné(s) (en fonction de l'id)
import NavBar from './NavBar.vue'
import axios from 'axios';
export default {
	props: ['id', 'tag'],
	components: {
        NavBar
    },
	data() {
		return {
			post: [],
			userId:'',
			user: ''
		};
	},

	methods: {
		addFavorite(){
			const URL = 'http://localhost:3000/favorite/post';	

			axios.post(URL, {
				id: "",
				article: this.post,
				user: this.user
			})
			.then((response) => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
		}
	},

	mounted() {
		
		fetch('http://localhost:3000/article/id/'+ this.$route.params.id)//http://localhost:3000/articles
			.then((res) => res.json())
			.then((res) => {
				this.post = res;
		});

		this.userId = localStorage.getItem('id');
		console.log(this.userId)
		fetch('http://localhost:3000/user/id/'+ this.userId)
            .then((res) => res.json())
            .then((res) => {
                this.user = res;
				console.log(this.user);
            })
	},
};
</script>

<template>
    <NavBar />
	<h1 v-if="post">{{ post.title }}</h1>
	
	<h4 v-if="post.user">by {{post.user.username}}</h4>

	<h2 v-if="post">{{ post.text }}</h2>
	
	<button v-if="userId != ''" @click="addFavorite">Ajouter aux favoris</button>
</template>

<style scoped>

button{
	margin: 4rem ;
}
.read-the-docs {
	color: #888;
}
</style>
