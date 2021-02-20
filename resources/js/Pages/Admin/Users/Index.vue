<template>
    <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>

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
                    </div>
                </b-table-column>
            </b-table>
        </div>
    </div>
</template>

<script>
import {Inertia} from '@inertiajs/inertia'

export default {
    props: {
        users: Array
    },
}
</script>
