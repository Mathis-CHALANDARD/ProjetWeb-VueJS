<script>
//barre de navigation
export default {
	props: ['icon', 'routeName', 'handleClick'],
	data() {
		return {};
	},

	methods: {
        clicked(){
            this.handleClick();
        }
    },

	mounted() {},
};
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <button @click="clicked" class="btnColor"> <span class="material-symbols-outlined"> {{icon}} </span> </button>
</template>

<style scoped>
    .btnColor {
        color: #fff;
    }
</style>