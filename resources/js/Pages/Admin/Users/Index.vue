<template>
    <div class="box">
        <inertia-link :href="route('admin.users.create')" as="b-button" class="mb-4" type="is-success is-light">
            Create new user
        </inertia-link>

        <b-table
            :data="users"
            :hoverable="true"
            :paginated="true"
            :striped="true"
            class="is-rounded is-bordered"
            per-page="10"
        >
            <b-table-column v-slot="props" field="name" label="Name">
                {{ props.row.name }}
            </b-table-column>

            <b-table-column v-slot="props" field="email" label="Email">
                {{ props.row.email }}
            </b-table-column>


            <b-table-column v-slot="props" width="60">
                <div class="is-flex is-justify-content-center">
                    <inertia-link :href="route('admin.users.edit', props.row.id)" as="b-button"
                                  class="has-text-warning " type="is-text">
                        <i class="fas fa-edit"></i>
                    </inertia-link>

                    <b-button class="has-text-danger " type="is-text" @click="destroy(props.row.id)">
                        <i class="fas fa-trash-alt"></i>
                    </b-button>
                </div>
            </b-table-column>
        </b-table>
    </div>
</template>

<script>
import {Inertia} from '@inertiajs/inertia'

export default {
    props: {
        users: Array
    },

    methods: {
        destroy: function(id) {
            // if (confirm('Are you sure you want to delete this user?')) {
            //     Inertia.delete(route('admin.users.destroy', id));
            // }

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
                    Inertia.delete(route('admin.users.destroy', id));
                }
            });
        }
    }
}
</script>
