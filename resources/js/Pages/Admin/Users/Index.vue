<template>
    <div class="box">
        <inertia-link :href="route('admin.users.create')" class="mb-4" as="b-button" type="is-success is-light">
            Create new user
        </inertia-link>

        <b-table
            :data="users"
            :paginated="true"
            per-page="10"
            :striped="true"
            :hoverable="true"
            class="is-rounded is-bordered"
        >
            <b-table-column field="name" label="Name" v-slot="props">
                {{ props.row.name }}
            </b-table-column>

            <b-table-column field="email" label="Email" v-slot="props">
                {{ props.row.email }}
            </b-table-column>

            <b-table-column width="60" v-slot="props">
                <b-button>Test</b-button>
            </b-table-column>
        </b-table>
    </div>
</template>

<script>
    export default {
        props: {
            users: Array
        },

        mounted: function() {
            console.log(route('admin.users.create'));
        }
    }
</script>
