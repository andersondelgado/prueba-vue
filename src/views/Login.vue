<template>
    <div id="login">
        <div class="container-fluid">
            <div class="container">
                <form>
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-6">
                            <fieldset class="border p-2">
                                <legend class="w-auto" style="padding: 0 10px">Login</legend>

                                <div class="form-group row">
                                    <label for="email" class="col-sm-2">E-mail</label>
                                    <div class="col-md-8">
                                        <input type="email" id="email" class="form-control" v-model="input.email"
                                               required
                                               placeholder="boot@example.com">
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-sm-2">Password</label>
                                    <div class="col-md-8">
                                        <input type="password" class="form-control" id="password"
                                               v-model="input.password"
                                               required
                                               placeholder="*******">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" v-if="!loading" class="btn btn-outline-info"
                                            v-on:click="login">Login
                                    </button>
                                    <div class="spinner-border" v-if="loading" role="status">
                                        <span class="visually-hidden"></span>
                                    </div>
                                </div>
                                <div class="alert alert-danger" v-if="!loading && errorMessage.length!=0">
                                    {{errorMessage}}
                                </div>

                            </fieldset>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                input: {
                    email: '',
                    password: ''
                },
                errorMessage: '',
                loading: false
            }
        },
        methods: {
            login(e) {
                e.preventDefault()
                console.log("hola mundo")
                console.log(this.input);
                let form = new FormData();
                form.append("email", this.input.email);
                form.append("password", this.input.password);
                this.loading = true;
                fetch(
                    "http://loyal_api.leackstat.info/api/v1/login", {
                        body: form,
                        method: "POST"
                    }
                ).then(async response => {
                    const result = await response.json();
                    console.log(result);
                    if (!response.ok) {
                        const error = (result && result.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    let token = result.data.token;
                    // console.log(token)
                    localStorage.setItem('token', token)
                    if (localStorage.getItem('token') != null) {
                        this.loading = false;
                        this.$emit('loggedIn')
                        this.errorMessage = ''
                        // this.$router.replace('/welcome').then(r => console.log(r)).catch(e => console.log(e));
                        window.location.replace('/welcome')
                    }
                }).catch(error => {
                    console.log(error)
                    this.errorMessage = error;
                    this.loading = false;
                    console.error("There was an error!", error);
                });

            }
        },
        mounted() {
            if (localStorage.getItem('token') !== null) {
                this.$router.replace('/welcome')
            }
        }
    }
</script>

<style scoped>
    fieldset {
        border: 2px solid #ddd !important;
        margin: 0;
        xmin-width: 0;
        padding: 10px;
        position: relative;
        border-radius: 4px;
        /*background-color: #f5f5f5;*/
        padding-left: 10px !important;
    }

    legend {
        /*font-size: 14px;*/
        font-weight: bold;
        margin-bottom: 0px;
        width: 35%;
        /*border: 1px solid #ddd;*/
        border-radius: 4px;
        padding: 5px 5px 5px 10px;
        background-color: #ffffff;
    }
</style>