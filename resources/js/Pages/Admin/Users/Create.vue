<template>
    <div class="container box">
        <form @submit.prevent="form.post(route('admin.users.store'))">
            <!-- name -->
            <b-field :message="form.errors.name"
                     :type="form.errors.name ? 'is-danger' : null"
                     label="Name">
                <b-input v-model="form.name" type="text"></b-input>
            </b-field>

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

            <!-- password confirmation -->
            <b-field label="Confirm password">
                <b-input v-model="form.password_confirmation" password-reveal type="password"></b-input>
            </b-field>

            <!-- submit -->
            <div class="is-flex is-justify-content-flex-end pt-3">
                <b-button :disabled="form.processing" native-type="submit" type="is-success">Create</b-button>
            </div>
        </form>
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
