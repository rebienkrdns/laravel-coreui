<template>

    <form @submit.prevent="login">

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="icon-envelope"></i>
                </span>
            </div>
            <input v-bind:class="[errors.email ? 'form-control is-invalid' : 'form-control']"
                   type="text"
                   placeholder="E-mail address"
                   v-model="user.email">
            <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email.toString()}}
            </div>
        </div>

        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="icon-lock"></i>
                </span>
            </div>
            <input v-bind:class="[errors.password ? 'form-control is-invalid' : 'form-control']"
                   type="password"
                   placeholder="Password"
                   v-model="user.password">
            <div class="invalid-feedback" v-if="errors.password">
                {{ errors.password.toString()}}
            </div>
        </div>

        <div class="form-group">
            <button class="btn btn-primary btn-block px-4 btn-square" type="submit" id="btn-login">
                Login
            </button>
        </div>

    </form>
</template>

<script>
    export default {
        name: 'login-component',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods: {
            login () {

                let btn_content = 'processing <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
                document.getElementById('btn-login').innerHTML = btn_content;

                axios.post(route('login'), {
                    email: this.user.email,
                    password: this.user.password
                }).then((response) => {
                    setTimeout(() =>{
                        window.location.href = response.data.redirectTo
                    }, 3000);
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    document.getElementById('btn-login').innerHTML = 'Login';
                });
            }
        }
    }
</script>