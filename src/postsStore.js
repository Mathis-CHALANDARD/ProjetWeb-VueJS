//stock les articles
import { defineStore } from 'pinia';

export const usePiniaStore = defineStore('posts', {
	state: () => {
		return { posts: [] };
	},
	getters: {
		getPostId: (state) => {
			return (postId) =>
				state.posts.find((post) => {
					return Number(post.id) === Number(postId);
				});
		},
		getPostGenre: (state) =>{
			return (postGenre) =>
				state.posts.filter((post) => {
					return String(post.genre) === String(postGenre);
			})
		}
	},
	// could also be defined as
	// state: () => ({ count: 0 })
	actions: {
		setPosts(data) {
			this.posts = data;
		},
	},
});
