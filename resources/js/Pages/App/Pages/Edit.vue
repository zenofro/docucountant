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
                                :init="editInit"
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
            apiKey: this.$page.props.tinymce_api,
            editInit: {
                // height: 500,
                menubar: 'file edit view insert format tools table help',
                plugins: [
                    'print preview paste importcss searchreplace autolink autosave',
                    'save directionality code visualblocks visualchars fullscreen image',
                    'link media template codesample table charmap hr pagebreak nonbreaking',
                    'anchor toc insertdatetime advlist lists wordcount imagetools',
                    'textpattern noneditable help charmap quickbars emoticons autoresize'
                ],
                toolbar:
                    'undo redo | bold italic underline strikethrough | ' +
                    ' fontselect fontsizeselect formatselect | alignleft aligncenter ' +
                    'alignright alignjustify | outdent indent |  numlist bullist | forecolor' +
                    ' backcolor removeformat | pagebreak | charmap emoticons | fullscreen  ' +
                    'preview save print | insertfile image media template link anchor codesample | ltr rtl restoredraft',
                autoresize_bottom_margin: 50,
                autosave_interval: '10s',
                min_height: 800,
                skin: 'oxide',
                toolbar_mode: 'sliding',
                toolbar_sticky: true,
                // importcss_append: true,
                textpattern_patterns: [
                    {start: '#', format: 'h1'},
                    {start: '##', format: 'h2'},
                    {start: '###', format: 'h3'},
                    {start: '####', format: 'h4'},
                    {start: '#####', format: 'h5'},
                    {start: '######', format: 'h6'},
                    {start: '*', end: '*', format: 'italic'},
                    {start: '**', end: '**', format: 'bold'},
                    {start: '`', end: '`', cmd: 'CodeSample'},
                ]
            },
            form: this.$inertia.form({
                contents: this.page.contents
            }),
        }
    }
}
</script>
