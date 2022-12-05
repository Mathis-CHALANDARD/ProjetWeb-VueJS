<script>
//barre de navigation
import NavBarBtn from "./NavBarBtn.vue";
export default {
    props: [],
    data() {
        return {
            isOpen : {
                type : Boolean,
                default : true
            },
            tags:["Tout", "Culture", "Politique", "Sport"]
        };
    },
    methods: {
        goTo(routeName) {
            this.isOpen = false;
            this.$router.push({
                name : routeName
            });
        },

        genreSelected(index) {
            const inputs = document.querySelectorAll("input")
            console.log(inputs[index].value)
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
    mounted() {
        this.isOpen = true;
        this.menubar()
     },
    components: { NavBarBtn }
};
</script>

<template>
	<div class="NavBar">
        <div class="SiteName">
            <img class="Logo" src="../assets/Icone_chat.png">
            <router-link to="/" class="SiteName" @click="() => {if (this.isOpen === true){ menubar()} }"> CatCatCatCat</router-link>
        </div>
        <div class="btns">
            <NavBarBtn icon = "search" route = "Home" :handle-click="() => {this.goTo(route)}"></NavBarBtn>
            <NavBarBtn icon = "login" route = "Login" :handle-click="() => {this.goTo(route)}"></NavBarBtn>
            <NavBarBtn icon = "menu"  :handle-click="menubar"></NavBarBtn>
        </div>
        <div class="Menu">
            <div>
                <input type="radio" id="TOUT" name="Genre" :value="tags[0]" @click="() => { this.genreSelected(0)}" checked/>
                Tout
            </div>
            <div>
                <input type="radio" id="Culture" name="Genre" :value="tags[1]" @click="() => { this.genreSelected(1)}" />
                Culture
            </div>
            <div>
                <input type="radio" id="Politique" name="Genre" :value="tags[2]" @click="() => { this.genreSelected(2)}" />
                Politique
            </div>
            <div>
                <input type="radio" id="Sport" name="Genre" :value="tags[3]" @click="() => { this.genreSelected(3)}" />
                Sport
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
</style>