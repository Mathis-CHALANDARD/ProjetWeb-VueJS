<script>
//montre le/les article(s) séléctionné(s) (en fonction du genre)
export default {
	props: ['id', 'postItem', 'genre'],
	data() {
		return {
			post: undefined,
		};
	},

	methods: {},

	mounted() {
		fetch('http://localhost:3000/article/'+ this.$route.params.genre)//http://localhost:3000/articles   modifier le parametre id par genre
			.then((res) => res.json())
			.then((res) => {
				this.post = res;
		});
	},
};
</script>

<template>
	<h1 v-if="post">{{ post.title }}</h1>

	<p v-if="post">{{ post.body }}</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
