<script>
//barre de navigation
import NavBarBtn from "./NavBarBtn.vue";
export default {
    props: [],
    data() {
        return {};
    },
    methods: {
        goHome() {
        }
    },
    mounted() { },
    components: { NavBarBtn }
};
</script>

<template>
	<div class="NavBar">
        <div class="SiteName">
            <img class="Logo" src="../assets/Icone_chat.png">
            <router-link to="/" class="SiteName"> CatCatCatCat</router-link>
        </div>
        <div class="btns">
            <NavBarBtn icon = "search" route = "/"></NavBarBtn>
            <NavBarBtn icon = "login" route = "/"></NavBarBtn>
            <NavBarBtn icon = "menu" route = "/"></NavBarBtn>
        </div>
    </div>
</template>

<style scoped>
.NavBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    background-color: #42b883;
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
    min-width: 200px;
    justify-content: space-around;
    padding-top: 1rem;
    padding-right: 2rem;
}

</style>