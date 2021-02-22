<template>
    <div>
        <b-menu>
            <b-menu-list>
                <b-menu-item icon="information-outline" label="Home"></b-menu-item>
            </b-menu-list>

            <b-menu-list label="Users">
                <b-menu-item icon="information-outline" label="Creating a new user"></b-menu-item>
                <b-menu-item icon="information-outline" label="Editing a user"></b-menu-item>
            </b-menu-list>

            <b-menu-list label="Projects">
                <b-menu-item icon="information-outline" label="Creating a new project"></b-menu-item>
                <b-menu-item icon="information-outline" label="Editing a project"></b-menu-item>
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
        project: Object
    }
}
</script>
