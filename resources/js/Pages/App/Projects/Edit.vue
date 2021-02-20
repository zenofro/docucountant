<template>
    <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                <li class="is-active"><a href="#" aria-current="page">{{ project.name }}</a></li>
            </ul>
        </nav>

        <!-- Form -->
        <div class="box">
            <form @submit.prevent="form.patch(route('app.projects.update', project.slug))">
                <!-- name -->
                <b-field :message="form.errors.name"
                         :type="form.errors.name ? 'is-danger' : null"
                         label="Name">
                    <b-input @keyup.native="slugify" v-model="form.name" type="text"></b-input>
                </b-field>

                <!-- slug -->
                <b-field :message="form.errors.slug"
                         :type="form.errors.slug ? 'is-danger' : null"
                         label="Slug">
                    <b-input v-model="form.slug" type="text" disabled></b-input>
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
                <div class="is-flex is-justify-content-space-between pt-3 buttons">
                    <b-button type="is-danger" @click="destroy()">Delete</b-button>
                    <b-button :disabled="form.processing" native-type="submit" type="is-success" :loading="form.processing">Edit</b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import {Inertia} from "@inertiajs/inertia";

export default {
    props: {
        project: Object,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.project.name,
                slug: this.project.slug,
                short_description: this.project.short_description,
                description: this.project.description,
            }),
        }
    },

    methods: {
        slugify: function(){
            this.form.slug = slugify(this.form.name, {
                lower: true
            });
        },

        destroy: function() {
            this.$swal({
                icon: 'warning',
                iconColor: 'red',
                title: 'Are you sure?',
                html: '<small>Deleting this project will remove all pages in it aswell!</small>',

                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: 'red',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.showLoading();
                    Inertia.delete(route('app.projects.destroy', this.project.slug));
                }
            });
        }
    }
}
</script>
