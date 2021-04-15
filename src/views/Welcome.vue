<template>
    <div id="welcome">
        <div class="container-fluid">
            <h1>{{title}}</h1>
        </div>
        <div>
            <button type="button" class="btn btn-outline-info" v-on:click="logout">
                salir
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return {
                title: 'Welcome my application'
            }
        },
        methods: {
            logout() {
                localStorage.clear();
                this.$router.push('/')
            }
        },
        mounted() {
            if (localStorage.getItem('token') == null) {
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped>

</style>