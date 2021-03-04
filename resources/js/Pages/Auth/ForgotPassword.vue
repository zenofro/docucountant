<template>
    <div class="columns is-centered is-vcentered">
        <div class="column box is-3">
            <!-- Status -->
            <b-notification :active="status !== null" type="is-success is-light" aria-close-label="Close notification">
                {{ status }}
            </b-notification>

            <form @submit.prevent="form.post('/forgot-password')">

                <!-- email -->
                <b-field :message="form.errors.email"
                         :type="form.errors.email ? 'is-danger' : null"
                         label="Email">
                    <b-input v-model="form.email" type="email"></b-input>
                </b-field>

                <!-- submit -->
                <div class="is-flex is-justify-content-space-between">
                    <inertia-link :href="route('login')" class="is-flex is-align-self-center">Login</inertia-link>

                    <b-button :disabled="form.processing" :loading="form.processing" native-type="submit" type="is-success">
                        Email Password Reset Link
                    </b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: String
    },

    data() {
        return {
            form: this.$inertia.form({
                email: null,
            }),
        }
    },
}
</script>
