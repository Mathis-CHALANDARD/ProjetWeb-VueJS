<script>
//barre de navigation
export default {
	props: {
        icon:{
            type : String,
            default : 'cancel'
        },

        routeName:{
            type : String,
            default : '/'
        }
    },
	data() {
		return {};
	},

	methods: {
        goTo(){
            this.$router.push({
                name : this.routeName
            });
        }
    },

	mounted() {},
};
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <router-link :to="this.routeName" class="btnColor"> 
        <span class="material-symbols-outlined">
        {{icon}}
        </span>
    </router-link>
        
</template>

<style scoped>

    .btnColor {
        color: #fff;
    }

</style>