<script>
//montre le/les article(s) séléctionné(s) (en fonction de l'id)
export default {
	props: ['id', 'postItem', 'genre'],
	data() {
		return {
			post: undefined,
		};
	},

	methods: {},

	mounted() {
		fetch('http://localhost:3000/article/'+ this.$route.params.id)//http://localhost:3000/articles
			.then((res) => res.json())
			.then((res) => {
				this.post = res;
		});
	},
};
</script>

<template>
	<h1 v-if="post">{{ post.title }}</h1>

	<p v-if="post">{{ post.text }}</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
