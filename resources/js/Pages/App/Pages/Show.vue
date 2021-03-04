<template>
    <div class="container">
        <div class="columns is-desktop">

            <!-- Project navigation -->
            <div class="column is-3">
                <ProjectNavigation :navigation="navigation" :project="project" />
            </div>

            <!-- Page -->
            <div class="column is-9">
                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                        <li><inertia-link :href="route('app.projects.show', project.slug)">{{ project.name }}</inertia-link></li>
                        <li><inertia-link :href="route('app.sections.edit', section.slug)">{{ section.title }}</inertia-link></li>
                        <li class="is-active"><inertia-link href="#">{{ page.title }}</inertia-link></li>
                    </ul>
                </nav>

                <!-- Contents -->
                <div class="box">
                    <div class="has-text-right">
                        <inertia-link :href="route('app.projects.pages.edit', {project: project.slug, page: page.slug})" class="has-text-warning" v-if="$can(`projects.update.${project.id}`)">
                            <i class="fas fa-edit"></i>
                        </inertia-link>
                    </div>

                    <h2 class="title is-2 has-text-centered">{{ page.title}}</h2>



                    <div class="p-5 content" v-html="page.contents"></div>
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
        navigation: Array,
        project: Object,
        section: Object,
        page: Object
    },
    mounted() {
        Prism.highlightAll()
    },
}
</script>
