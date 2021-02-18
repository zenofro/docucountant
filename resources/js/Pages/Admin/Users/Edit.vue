<template>
    <div class="container box">
        <form @submit.prevent="form.patch(route('admin.users.update', user.id))">
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

            <!-- submit -->
            <div class="is-flex is-justify-content-flex-end pt-3">
                <b-button :disabled="form.processing" native-type="submit" type="is-success">Edit</b-button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        user: Object,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.user.name,
                email: this.user.email,
            }),
        }
    },
}
</script>
