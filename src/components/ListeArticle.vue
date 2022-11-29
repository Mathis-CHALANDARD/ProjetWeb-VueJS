<script>
//montre tout les articles disponibles

import PostItem from './Article.vue';
export default{
    props: ['msg'],
    components: {
        PostItem,
    },

    data(){
        return{
            posts: [],
        };
    },

    methods:{
        readArticle(data) {
			this.$router.push({
				name: 'Article',
				params: { id: data.id },
            });
        }
    },

    mounted(){
		fetch('http://localhost:3000/article')
			.then((res) => res.json())
			.then((res) => {
				this.posts = res;
				posts.setPosts(res);
		});
    }

}   
</script>

<template>
	<h1>Mes articles</h1>

	<div v-for="post in posts">
		<PostItem :post="post" textButton="Lire l'article" :handleClick="this.readArticle" />
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
