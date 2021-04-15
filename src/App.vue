<template>
    <div id="app">
        <div id="nav">
            <!--      <router-link to="/">Home</router-link> |-->
            <!--      <router-link to="/about">About</router-link>-->
        </div>
        <router-view/>
    </div>
</template>
<style src="./assets/bower_components/bootstrap/dist/css/bootstrap.min.css"></style>
<script src="assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
    export default {
        name:"app",
        mounted() {
            // let externalScript = document.createElement('script')
            // externalScript.setAttribute('src', 'assets/bower_components/dist/js/bootstrap.min.js')
            // document.head.appendChild(externalScript)

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
