<script>
//montre le/les article(s) séléctionné(s) (en fonction de l'id)
import NavBar from './NavBar.vue'
export default {
	props: ['id', 'tag'],
	components: {
        NavBar
    },
	data() {
		return {
			post: [],
		};
	},

	methods: {},

	mounted() {
		fetch('http://localhost:3000/article/id/'+ this.$route.params.id)//http://localhost:3000/articles
			.then((res) => res.json())
			.then((res) => {
				this.post = res;
		});
	},
};
</script>

<template>
    <NavBar />
	<h1 v-if="post">{{ post.title }}</h1>
	
	<h4 v-if="post.user">by {{post.user.name}}</h4>

	<h2 v-if="post">{{ post.text }}</h2>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
