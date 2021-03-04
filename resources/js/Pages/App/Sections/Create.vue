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
                <nav class="breadcrumb" aria-label="breadcrumbs">
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
                        <li>
                            <inertia-link :href="route('app.projects.sections.index', project.slug)">
                                Sections
                            </inertia-link>
                        </li>
                        <li class="is-active">
                            <a href="#">Create new section</a>
                        </li>
                    </ul>
                </nav>

                <!-- Form -->
                <div class="box">
                    <form @submit.prevent="form.post(route('app.projects.sections.store', project.slug))">
                        <!-- title -->
                        <b-field :message="form.errors.title"
                                 :type="form.errors.title ? 'is-danger' : null"
                                 label="Title">
                            <b-input @keyup.native="slugify" v-model="form.title" type="text"></b-input>
                        </b-field>

                        <!-- slug -->
                        <b-field :message="form.errors.slug"
                                 :type="form.errors.slug ? 'is-danger' : null"
                                 label="Slug">
                            <b-input v-model="form.slug" type="text" disabled></b-input>
                        </b-field>

                        <!-- order -->
                        <div class="columns">
                            <b-field :message="form.errors.order"
                                     :type="form.errors.order ? 'is-danger' : null"
                                     label="Order"
                                     class="column is-6">
                                <b-numberinput v-model="form.order"></b-numberinput>
                            </b-field>
                        </div>

                        <!-- submit -->
                        <div class="is-flex is-justify-content-flex-end pt-3">
                            <b-button :disabled="form.processing" :loading="form.processing" native-type="submit"
                                      type="is-success">
                                Create
                            </b-button>
                        </div>
                    </form>
                </div>

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
            order: Number
        },

        data() {
            return {
                form: this.$inertia.form({
                    title: null,
                    order: this.order,
                    slug: null,
                }),
            }
        },

        methods: {
            slugify: function(){
                this.form.slug = slugify(this.form.title, {
                    lower: true
                });
            }
        }
    }
</script>
