<template>
    <div class="container">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumbs" class="breadcrumb">
            <ul>
                <li class="is-active"><a aria-current="page" href="#">Projects</a></li>
            </ul>
        </nav>

        <div class="box">
            <inertia-link :href="route('app.projects.create')" as="b-button" class="mb-4" type="is-success is-light" v-if="$can('projects.create')">
                Create new project
            </inertia-link>

            <b-table
                :data="projects"
                :hoverable="true"
                :paginated="true"
                :striped="true"
                class="is-rounded is-bordered"
                per-page="10"
            >
                <b-table-column v-slot="props" field="name" label="Name">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column v-slot="props" field="short_description" label="Short description">
                    {{ props.row.short_description }}
                </b-table-column>

                <b-table-column v-slot="props" field="user.name" label="Created by">
                    {{ props.row.user.name }}
                </b-table-column>

                <b-table-column v-slot="props" width="60">
                    <div class="is-flex is-justify-content-center">
                        <inertia-link :href="route('app.projects.edit', props.row.slug)" as="b-button"
                                      class="has-text-warning " type="is-text"
                                      v-if="$can('projects.edit')">
                            <i class="fas fa-edit"></i>
                        </inertia-link>

                        <inertia-link :href="route('app.projects.show', props.row.slug)" as="b-button"
                                      type="is-text">
                            <i class="fas fa-chevron-right"></i>
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
        projects: Array
    },
}
</script>
