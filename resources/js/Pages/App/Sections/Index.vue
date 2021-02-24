<template>
    <div class="container">
        <div class="columns is-desktop">

            <!-- Project navigation -->
            <div class="column is-3">
                <ProjectNavigation :navigation="navigation" :project="project" />
            </div>

            <!-- Project page -->
            <div class="column">
                <!-- Breadcrumb -->
                <nav aria-label="breadcrumbs" class="breadcrumb">
                    <ul>
                        <li>
                            <inertia-link :href="route('app.projects.index')">
                                Projects
                            </inertia-link>
                        </li>
                        <li>
                            <inertia-link :href="route('app.projects.show', project.slug)">
                                {{ project.name }}
                            </inertia-link>
                        </li>
                        <li class="is-active">
                            <a href="#">Sections</a>
                        </li>
                    </ul>
                </nav>

                <!-- Sections -->
                <inertia-link :href="route('app.projects.sections.create', project.slug)" as="b-button" class="mb-4"
                              type="is-success is-light">
                    Create new section
                </inertia-link>

                <b-table :data="sections" striped>

                    <b-table-column v-slot="props" label="Title" width="300">
                        {{ props.row.title }}
                    </b-table-column>

                    <b-table-column v-slot="props" :numeric="true" field="action">
                        <inertia-link
                            :href="route('app.sections.edit',  props.row.id)"
                            as="b-button" class="has-text-warning" type="is-text">
                            <i class="fas fa-edit"></i>
                        </inertia-link>
                    </b-table-column>
                </b-table>

            </div>
        </div>
    </div>
</template>

<script>
import ProjectNavigation from "../../Components/ProjectNavigation";

export default {
    components: {ProjectNavigation},

    props: {
        navigation: Array,
        project: Object,
        sections: Array
    },
}
</script>

