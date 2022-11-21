<script>
//création d'un article
export default {
	props: ['post', 'handleClick', 'textButton'],
	data() {
		return {};
	},

	methods: {
		clicked() {
			this.handleClick(this.post);
		},
	},

	mounted() {},
};
</script>

<template>
	<div class="card">
		<h2>{{ post.title }}</h2>

		<p>{{ post.body }}</p>
		<button type="button" @click="clicked">
			{{ textButton }}
		</button>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
