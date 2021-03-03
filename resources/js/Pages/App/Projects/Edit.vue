<template>
    <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                <li><inertia-link :href="route('app.projects.show', project.slug)">{{ project.name }}</inertia-link></li>
                <li class="is-active"><a href="#" aria-current="page">Edit</a></li>
            </ul>
        </nav>

        <!-- Form -->
        <div class="box">
            <form @submit.prevent="submit">
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

                <!-- User permissions -->
                <div class="columns mt-6">
                    <div class="column">
                        <b-menu>
                            <b-menu-list label="Users">
                                <b-menu-item v-for="user in users" :key="user.id"
                                             :label="user.name"
                                             :icon="checkActivePermission(user.permissions)"
                                             @click="setActiveUser(user)">
                                </b-menu-item>
                            </b-menu-list>
                        </b-menu>
                    </div>

                    <div class="column">
                        <div v-if="activeUser">
                            <b-field>
                                <b-checkbox v-model="activeUserPermissions"
                                            native-value="create">
                                    Create pages/sections
                                </b-checkbox>
                            </b-field>

                            <b-field>
                                <b-checkbox v-model="activeUserPermissions"
                                            native-value="view">
                                    view project
                                </b-checkbox>
                            </b-field>

                            <b-field>
                                <b-checkbox v-model="activeUserPermissions"
                                            native-value="update">
                                    edit pages/sections
                                </b-checkbox>
                            </b-field>
                        </div>
                    </div>
                </div>

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
        users: Array,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: this.project.name,
                slug: this.project.slug,
                short_description: this.project.short_description,
                description: this.project.description,
                users: this.users
            }),

            activeUser: null,
            activeUserPermissions: []
        }
    },

    watch: {
        // whenever question changes, this function will run
        activeUserPermissions: function (newValue, oldValue) {
            let user = this.users.find(x => x.id === this.activeUser);

            for (const [key, value] of Object.entries(user.permissions)) {
                if (newValue.includes(key)){
                    user.permissions[key] = true;
                }
                else{
                    user.permissions[key] = false;
                }
            }
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
        },

        checkActivePermission: function (permissions){
            for (const [key, value] of Object.entries(permissions)) {
                if (value === true){
                    return 'star';
                }
            }
        },

        setActiveUser: function (user){
            this.activeUser = user.id;

            this.activeUserPermissions = [];
            if(user.permissions.create) this.activeUserPermissions.push('create');
            if(user.permissions.update) this.activeUserPermissions.push('update');
            if(user.permissions.view) this.activeUserPermissions.push('view');
        },

        submit: function () {
            this.form.users = this.users;
            this.form.patch(this.route('app.projects.update', this.project.slug));
        }

    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
