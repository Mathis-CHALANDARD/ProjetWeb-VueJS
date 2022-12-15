<script>
import axios from 'axios';
//création d'un article
export default {
	data() {
		return {
            articleTitle: '',
            articleText: '',
            userId:'',
            tag:'',
            admin:''
        };
	},

	methods: {
        submitArticle(){
            const URL = 'http://localhost:3000/article/post';	

        axios.post(URL, {
            id: '',
            title: this.articleTitle,
            text: this.articleText,
            tag: this.tag,
            user: this.admin
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
        this.userId = localStorage.getItem('id');
        fetch('http://localhost:3000/user/id/'+ this.userId)
            .then((res) => res.json())
            .then((res) => {
                this.admin = res;
            })
        console.log(this.admin)
    },
};
</script>

<template>
    <div class="NavBar">
        <div class="SiteName">
            <img class="Logo" src="../assets/Icone_chat.png">
            <router-link to="/" class="SiteName" @click="() => {if (this.isOpen === true){ menubar()} categoryArticle = 'Tout'}"> CatCatCatCat</router-link>
        </div>
    </div>
    <div class="create">
	    <h1>Créer un article</h1>

        <div class="article">
            <div>
                <h2>Veuillez entrer le titre de l'article</h2>
                <input name="title"  v-model="articleTitle" />
            </div>
            
            <div>
                <h2>Veuillez entrer le corps de l'article</h2>
                <textarea name="title"  class="articleText"  v-model="articleText" ></textarea>
            </div>

            <div>
                <h2>Selectionnez le tag de l'article</h2>
                <select v-model="tag">
                    <option disabled value="">Choisissez</option>
                    <option value="Culture">Culture</option>
                    <option value="Politique">Politique</option>
                    <option value="Sport">Sport</option>
                </select>
            </div>
        </div>
		<button type="submit" @click="submitArticle()">Créer l'article</button>
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

.article{
    display: flex;
    height: 70vh;
    flex-direction: column;
	align-items: center;	
    margin-top: 4rem;
    justify-content: space-around;
}

input{
    width: 20vw;
}

select{
    width: 20vw;
}

.articleText{
    width: 20vw;
    height: 40vh;
    text-align: top;
}

.read-the-docs {
	color: #888;
}
</style>