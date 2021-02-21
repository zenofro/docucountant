<template>
    <div class="container">
        <div class="columns is-desktop">

            <!-- Project navigation -->
            <div class="column is-3">
                <ProjectNavigation :project="project" />
            </div>

            <!-- Project page -->
            <div class="column">
                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                        <li class="is-active"><inertia-link :href="route('app.projects.show', project.slug)">{{ project.name }}</inertia-link></li>
                    </ul>
                </nav>

                <!-- Project Home -->
                <div class="box">
                    <h2 class="title is-2 has-text-centered">{{ project.name}}</h2>

                    <div class="p-5">
                        {{ project.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectNavigation from '../../Components/ProjectNavigation'

    export default {
        components: {ProjectNavigation},
        props: {
            project: Object,
        },
    }
</script>
