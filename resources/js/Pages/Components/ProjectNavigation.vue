<template>
    <div>
        <b-menu>
            <b-menu-list>
                <inertia-link :active="route().current('app.projects.show', project.slug)"
                              :href="route('app.projects.show', project.slug)" as="b-menu-item"
                              label="Home"></inertia-link>
            </b-menu-list>

            <b-menu-list v-for="section in navigation" :key="section.id" :label="section.title">
                <inertia-link v-for="page in section.pages" :key="page.id"
                              :active="route().current('app.projects.pages.show', {project: project.slug, page: page.slug})"
                              :href="route('app.projects.pages.show', {project: project.slug, page: page.slug})"
                              :label="page.title" as="b-menu-item"></inertia-link>
            </b-menu-list>
        </b-menu>

        <div class="columns mt-5">
            <div class="column">
                <inertia-link :href="route('app.projects.sections.index', project.slug)" as="b-button" class=""
                              expanded type="is-primary">
                    Edit sections
                </inertia-link>
            </div>

            <div class="column">
                <inertia-link :href="route('app.projects.pages.create', project.slug)" as="b-button" class=""
                              expanded type="is-success">
                    Add page
                </inertia-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        navigation: Array,
        project: Object
    }
}
</script>
