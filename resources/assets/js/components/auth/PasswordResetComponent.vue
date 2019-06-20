<template>
    <form @submit.prevent="passwordUpdate">

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="icon-envelope"></i>
                </span>
            </div>
            <input v-bind:class="[errors.email ? 'form-control is-invalid' : 'form-control']"
                   type="text"
                   placeholder="E-Mail address"
                   v-model="user.email">
            <div class="invalid-feedback" v-if="errors.email">{{ errors.email.toString()}}</div>
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
            <div class="invalid-feedback" v-if="errors.password">{{ errors.password.toString()}}</div>
        </div>

        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="icon-lock"></i>
                </span>
            </div>
            <input v-bind:class="[errors.password_confirmation ? 'form-control is-invalid' : 'form-control']"
                   type="password"
                   placeholder="Retry password"
                   v-model="user.password_confirmation">
            <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation.toString()}}</div>
        </div>

        <button class="btn btn-primary btn-block px-4 btn-square" type="submit" id="btn-password-update">
            Reset password
        </button>
    </form>
</template>

<script>
    export default {
        name: 'password-reset-component',
        props: ['token', 'email'],
        data() {
            return {
                user: {
                    email: this.email,
                    password: '',
                    password_confirmation: '',
                    token: this.token
                },
                errors: [],
            }
        },
        methods: {
            passwordUpdate () {
                let btn_content = 'processing <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
                document.getElementById('btn-password-update').innerHTML = btn_content;

                axios.post(route('password.update'), {
                    email: this.user.email,
                    token: this.user.token,
                    password: this.user.password,
                    password_confirmation: this.user.password_confirmation
                }).then((response) => {
                    setTimeout(() =>{
                        window.location.href = response.data.redirectTo
                    }, 3000);
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    document.getElementById('btn-password-update').innerHTML = 'Reset password';
                });
            }
        }
    }
</script>