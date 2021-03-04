<template>
    <div class="columns is-centered is-vcentered">
        <div class="column box is-3">
            <!-- Status -->
            <b-notification :active="status !== null" type="is-success is-light" aria-close-label="Close notification">
                {{ status }}
            </b-notification>

            <form @submit.prevent="form.post(route('login'))">

                <!-- email -->
                <b-field :message="form.errors.email"
                         :type="form.errors.email ? 'is-danger' : null"
                         label="Email">
                    <b-input v-model="form.email" type="email"></b-input>
                </b-field>


                <!-- password -->
                <b-field :message="form.errors.password"
                         :type="form.errors.password ? 'is-danger' : null"
                         label="Password">
                    <b-input v-model="form.password" password-reveal type="password"></b-input>
                </b-field>

                <!-- Remember me -->
                <b-field class="mt-5">
                    <b-checkbox v-model="form.remember">Remember me</b-checkbox>
                </b-field>

                <!-- submit -->
                <div class="is-flex is-justify-content-space-between mt-5">
                    <inertia-link href="/forgot-password" class="is-flex is-align-self-center">Forgot password?</inertia-link>

                    <b-button :disabled="form.processing" :loading="form.processing" native-type="submit" type="is-success">
                        Log in
                    </b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            status: String,
        },

        data() {
            return {
                form: this.$inertia.form({
                    name: null,
                    email: null,
                    password: null,
                    remember: false,
                }),
            }
        },
    }
</script>
