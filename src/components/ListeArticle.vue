<script>
//montre tout les articles disponibles

import NavBar from './NavBar.vue';
import NavBarBtn from './NavBarBtn.vue';
import PostItem from './Article.vue';
export default{
    props: ['msg'],
    components: {
        PostItem,
        NavBar,
        NavBarBtn
    },

    data(){
        return{
            posts: [],
            tags:["Tout", "Culture", "Politique", "Sport"],
            categoryArticle:'Tout'
        };
    },

    methods:{
        readArticle(data) {
            
			this.$router.push({
				name: 'Article',
				params: { id: data.id },
            });
        },

        goTo(routeName) {
            this.isOpen = false;
            this.$router.push({
                name : routeName
            });
        },
        
        async menubar(){
            const menu = document.querySelector(".Menu");
            menu.classList.toggle('active');

            if (this.isOpen === true) {
                this.isOpen = false;
            } else {
                await new Promise(resolve => setTimeout(resolve, 300));
                this.isOpen = true;
            }
        }
    },

    mounted(){
        this.isOpen=true;
        this.menubar();
		fetch('http://localhost:3000/article')
			.then((res) => res.json())
			.then((res) => {
				this.posts = res;
		});
    }
}   
</script>

<template>
    <div class="NavBar">
        <div class="SiteName">
            <img class="Logo" src="../assets/Icone_chat.png">
            <router-link to="/" class="SiteName" @click="() => {if (this.isOpen === true){ menubar()} categoryArticle = 'Tout'}"> CatCatCatCat</router-link>
        </div>
        <div class="btns">
            <NavBarBtn icon = "search" route = "Home" :handle-click="() => {this.goTo(route)}"></NavBarBtn>
            <NavBarBtn icon = "login" route = "Login" :handle-click="() => {this.goTo(route)}"></NavBarBtn>
            <NavBarBtn icon = "menu" :handle-click="menubar"></NavBarBtn>
        </div>
        <div class="Menu">
            <div>
                <input type="radio" id="TOUT" name="Genre" v-model="categoryArticle" :value="tags[0]" checked/>
                Tout
            </div>
            <div>
                <input type="radio" id="Culture" name="Genre" v-model="categoryArticle" :value="tags[1]"/>
                Culture
            </div>
            <div>
                <input type="radio" id="Politique" name="Genre" v-model="categoryArticle" :value="tags[2]"/>
                Politique
            </div>
            <div>
                <input type="radio" id="Sport" name="Genre" v-model="categoryArticle" :value="tags[3]"/>
                Sport
            </div>
        </div>
    </div>
	<h1>Nos articles</h1>

    <div v-if="categoryArticle === 'Tout'">
        <div v-for="article in posts">
            <PostItem :post="article" textButton="Lire l'article" :handleClick="this.readArticle" />
        </div>
    </div>
    <div v-else>
        <div v-for="article in posts">
            <div v-if="article.tag === categoryArticle">
                <PostItem :post="article" textButton="Lire l'article" :handleClick="this.readArticle" />
            </div>
        </div>
    </div>
    
</template>

<style scoped>

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
.btns{
    display: flex;
    z-index: 10;
    min-width: 200px;
    justify-content: space-around;
    padding-top: 1rem;
    padding-right: 2rem;
}

input{
    margin: .4rem;
}

.Menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    
    top: 10vh;
    right: 0;
    position: absolute;

    z-index: 0;
    min-width: 200px;
    min-height: 90vh;
    
    background-color: var(--maincolor);
    transition: all 0.3s ease;
}

.active {
    top: -2000px;
    opacity: 0;
    color: var(--maincolor);
    transition: all 0.8s ease;
}
.read-the-docs {
	color: #888;
}
</style>
