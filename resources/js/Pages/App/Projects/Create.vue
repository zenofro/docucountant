<template>
    <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                <li class="is-active"><a href="#" aria-current="page">Create new project</a></li>
            </ul>
        </nav>

        <!-- Form -->
        <div class="box">
            <form @submit.prevent="form.post(route('app.projects.store'))">
                <!-- name -->
                <b-field :message="form.errors.name"
                         :type="form.errors.name ? 'is-danger' : null"
                         label="Name">
                    <b-input @keyup.native="slugify" v-model="form.name" type="text"></b-input>
                </b-field>

                <!-- slug -->
                <b-field label="Slug">
                    <b-input v-model="slug" type="text" disabled></b-input>
                </b-field>

                <!-- short description -->
                <b-field :message="form.errors.short_description"
                         :type="form.errors.short_description ? 'is-danger' : null"
                         label="Short description">
                    <b-input v-model="form.short_description" type="text"></b-input>
                </b-field>

                <!-- description -->
                <b-field :message="form.errors.description"
                         :type="form.errors.description ? 'is-danger' : null"
                         label="Description">
                    <b-input v-model="form.description" type="textarea"></b-input>
                </b-field>

                <!-- submit -->
                <div class="is-flex is-justify-content-flex-end pt-3">
                    <b-button :disabled="form.processing" :loading="form.processing" native-type="submit" type="is-success">
                        Create
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
                short_description: null,
                description: null,
            }),

            slug: null
        }
    },

    methods: {
        slugify: function(){
            this.slug = slugify(this.form.name, {
                lower: true
            });
        }
    }
}
</script>
