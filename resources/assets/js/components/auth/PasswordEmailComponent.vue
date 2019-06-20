<template>
    <form @submit.prevent="sendReQuestLink">

        <div class="alert alert-success" v-if="emailSend">
            <strong>The link has been successfully sent</strong>
        </div>

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
            <div class="invalid-feedback" v-if="errors.email">{{ errors.email.toString() }}</div>
        </div>

        <button class="btn btn-primary btn-block px-4 btn-square" type="submit" id="btn-send-link">
            Send link by E-mail
        </button>

    </form>
</template>

<script>
    export default {
        name: 'password-component',
        data() {
            return {
                user: {
                    email: ''
                },
                errors: [],
                emailSend: false
            }
        },
        methods: {
            sendReQuestLink () {
                let btn_content = 'processing <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>';
                document.getElementById('btn-send-link').innerHTML = btn_content;

                axios.post(route('password.email'), {
                    email: this.user.email,
                }).then(() => {
                    document.getElementById('btn-send-link').innerHTML = 'Send link by E-mail';
                    this.emailSend = true;
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    document.getElementById('btn-send-link').innerHTML = 'Send link by E-mail';
                });
            }
        }
    }
</script>