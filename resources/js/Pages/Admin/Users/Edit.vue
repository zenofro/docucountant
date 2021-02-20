<template>
    <div class="container">

        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><inertia-link :href="route('admin.users.index')">Users</inertia-link></li>
                <li class="is-active"><a href="#" aria-current="page">{{ user.name }}</a></li>
                <li class="is-active"><a href="#" aria-current="page">Edit</a></li>
            </ul>
        </nav>

        <!-- Form -->
        <div class="box">
            <form @submit.prevent="form.patch(route('admin.users.update', user.id))">
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

    methods: {
        destroy: function() {

            this.$swal({
                icon: 'warning',
                iconColor: 'red',
                title: 'Are you sure?',
                html: '<small>Deleting this user can not bring it back!</small>',

                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: 'red',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.showLoading();
                    Inertia.delete(route('admin.users.destroy', this.user.id));
                }
            });
        }
    }
}
</script>
