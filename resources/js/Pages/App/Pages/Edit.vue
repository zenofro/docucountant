<template>
    <div class="container">
        <div class="columns is-desktop">

            <!-- Project navigation -->
            <div class="column is-3">
                <ProjectNavigation :navigation="navigation" :project="project" />
            </div>

            <!-- Page -->
            <div class="column">
                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><inertia-link :href="route('app.projects.index')">Projects</inertia-link></li>
                        <li><inertia-link :href="route('app.projects.show', project.slug)">{{ project.name }}</inertia-link></li>
                        <li><inertia-link :href="route('app.sections.edit', section.slug)">{{ section.title }}</inertia-link></li>
                        <li><inertia-link :href="route('app.projects.pages.show', {project: project.slug, page: page.slug})">{{ page.title }}</inertia-link></li>
                        <li class="is-active"><a href="#">Edit page</a></li>
                    </ul>
                </nav>

                <!-- Contents -->
                <div class="box">
                    <form @submit.prevent="form.patch(route('app.projects.pages.update', {project: project.slug, page: page.slug}))">
                        <div class="has-text-right">
                            <b-button type="is-success is-text is-light" class="has-text-success" native-type="submit">
                                <i class="fas fa-save"></i>
                            </b-button>
                        </div>

                        <b-notification class="mt-5" aria-close-label="Close notification" type="is-warning is-light">
                            You are in editing mode!
                        </b-notification>

                        <div class="mt-5">
                            <Editor
                                :api-key="apiKey"
                                :init="tinyInit"
                                v-model="form.contents"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectNavigation from '../../Components/ProjectNavigation'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: {
        ProjectNavigation,
        Editor
    },

    props: {
        navigation: Array,
        project: Object,
        section: Object,
        page: Object
    },

    data() {
        return {
            form: this.$inertia.form({
                contents: this.page.contents
            }),
            apiKey: TinymceApi,
            tinyInit: TinymceInit
        }
    }
}
</script>
