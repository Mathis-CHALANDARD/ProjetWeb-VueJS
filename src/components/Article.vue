<script>
//article
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
		<h2>{{ post.title }} | {{post.tag}}</h2>
		<h4>by {{post.user.username}}</h4>

		<p>{{ post.text.substring(0,100) }}...</p>
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
