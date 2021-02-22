<template>
    <div>
        <b-menu>
            <b-menu-list>
                <inertia-link :href="route('app.projects.show', project.slug)"
                              :active="route().current('app.projects.show', project.slug)" as="b-menu-item" label="Home"></inertia-link>
            </b-menu-list>

            <b-menu-list v-for="section in navigation" :key="section.id" :label="section.title">
                <inertia-link v-for="page in section.pages" :key="page.id"
                              :href="route('app.projects.pages.show', {project: project.slug, page: page.slug})"
                              :active="route().current('app.projects.pages.show', {project: project.slug, page: page.slug})"
                              as="b-menu-item" :label="page.title"></inertia-link>
            </b-menu-list>
        </b-menu>

        <div class="columns mt-5">
            <div class="column">
                <inertia-link :href="route('app.projects.sections.index', project.slug)" as="b-button" class=""
                              type="is-primary" expanded>
                    Edit sections
                </inertia-link>
            </div>

            <div class="column">
                <inertia-link :href="route('app.projects.pages.create', project.slug)" as="b-button" class=""
                              type="is-success" expanded>
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
