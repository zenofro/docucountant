<template>
    <div class="container">
        <!-- Form -->
        <div class="box">
            <form @submit.prevent="form.post(route('register'))">
                <div class="columns">
                    <div class="column">
                        <!-- name -->
                        <b-field :message="form.errors.name"
                                 :type="form.errors.name ? 'is-danger' : null"
                                 label="Name">
                            <b-input v-model="form.name" type="text"></b-input>
                        </b-field>
                    </div>

                    <div class="column">
                        <!-- email -->
                        <b-field :message="form.errors.email"
                                 :type="form.errors.email ? 'is-danger' : null"
                                 label="Email">
                            <b-input v-model="form.email" type="email"></b-input>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <!-- password -->
                        <b-field :message="form.errors.password"
                                 :type="form.errors.password ? 'is-danger' : null"
                                 label="Password">
                            <b-input v-model="form.password" password-reveal type="password"></b-input>
                        </b-field>
                    </div>

                    <div class="column">
                        <!-- password confirmation -->
                        <b-field label="Confirm password">
                            <b-input v-model="form.password_confirmation" password-reveal type="password"></b-input>
                        </b-field>
                    </div>
                </div>

                <!-- submit -->
                <div class="is-flex is-justify-content-space-between pt-3">
                    <inertia-link :href="route('login')" class="is-flex is-align-self-center">Login</inertia-link>

                    <b-button :disabled="form.processing" :loading="form.processing" native-type="submit" type="is-success">
                        Register
                    </b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: this.$inertia.form({
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }),
        }
    },
}
</script>
