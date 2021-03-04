<template>
    <div class="container">
        <div class="columns is-desktop">

            <!-- Project navigation -->
            <div class="column is-3">
                <ProjectNavigation :navigation="navigationMutated" :project="project" />
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
                        <li>
                            <inertia-link :href="route('app.sections.show', section.id)">
                                {{ section.title }}
                            </inertia-link>
                        </li>
                        <li class="is-active">
                            <a href="#">Edit section</a>
                        </li>
                    </ul>
                </nav>

                <div class="box">
                    <!-- Form -->
                    <form class="mb-5" @submit.prevent="form.patch(route('app.sections.update', section.id))">
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

                        <!-- submit -->
                        <div class="is-flex is-justify-content-space-between pt-3">
                            <b-button type="is-danger" @click="destroy()">Delete</b-button>

                            <b-button :disabled="form.processing" :loading="form.processing" native-type="submit"
                                      type="is-success">
                                Edit
                            </b-button>
                        </div>
                    </form>

                    <hr>

                    <h3 class="subtitle is-5">Pages inside "{{ section.title }}"</h3>

                    <!-- Edit pages in section -->
                    <b-notification aria-close-label="Close notification">
                        Hold and drag a row to change the order of pages.
                    </b-notification>

                    <b-table
                        :data="pages"
                        draggable
                        @dragstart="dragstart"
                        @drop="drop"
                        @dragover="dragover"
                        @dragleave="dragleave"
                        striped>

                        <b-table-column v-slot="props" label="Title" width="300">
                            {{ props.row.title }}
                        </b-table-column>

                        <b-table-column v-slot="props" :numeric="true" field="action">
                            <b-button type="is-text" class="has-text-warning" @click="openTransferModal(props.row.id)">
                                <i class="fas fa-exchange-alt"></i>
                            </b-button>

                            <b-button type="is-text" class="has-text-danger" @click="deletePage(props.row.slug)">
                                <i class="fas fa-trash-alt"></i>
                            </b-button>
                        </b-table-column>
                    </b-table>
                </div>
            </div>
        </div>

        <!-- Transfer modal -->
        <section>
            <b-modal
                v-model="isTransferModalActive"
                class="p-5"
            >
                <div class="card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Transfer page to other section</p>
                        <button
                            class="delete"
                            type="button"
                            @click="isTransferModalActive = false"/>
                    </header>

                    <div class="card-content">
                        <form @submit.prevent="transferPage">
                            <b-input v-model="transferForm.pageId" type="hidden"></b-input>

                            <div class="columns is-centered">
                                <div class="column">
                                    <b-field :message="transferForm.errors.targetSectionId"
                                             :type="transferForm.errors.targetSectionId ? 'is-danger' : null"
                                    >
                                        <b-select placeholder="Select a section to transfer to"
                                                  v-model="transferForm.targetSectionId"
                                                  expanded
                                                  required>
                                            <option
                                                v-for="section in sections"
                                                :value="section.id"
                                                :key="section.id">
                                                {{ section.title }}
                                            </option>
                                        </b-select>
                                    </b-field>
                                </div>

                                <div class="column is-one-third is-flex is-justify-content-center">
                                    <b-button :disabled="transferForm.processing" :loading="transferForm.processing" native-type="submit"
                                              type="is-success">
                                        Transfer
                                    </b-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </b-modal>
        </section>
    </div>
</template>

<script>
import ProjectNavigation from "../../Components/ProjectNavigation";
import {Inertia} from "@inertiajs/inertia";

export default {
    components: {ProjectNavigation},

    props: {
        navigation: Array,
        project: Object,
        section: Object,
        sections: Array,
        pages: Array
    },

    data() {
        return {
            form: this.$inertia.form({
                title: this.section.title,
                slug: this.section.slug,
            }),
            transferForm: this.$inertia.form({
                pageId: null,
                targetSectionId: null,
            }),
            navigationMutated: this.navigation,
            draggingRow: null,
            draggingRowIndex: null,
            isTransferModalActive: false,
        }
    },

    methods: {
        slugify: function(){
            this.form.slug = slugify(this.form.title, {
                lower: true
            });
        },

        destroy: function() {
            this.$swal({
                icon: 'warning',
                iconColor: 'red',
                title: 'Are you sure?',
                html: '<small>Deleting this section can not bring it back!</small>',

                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: 'red',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.showLoading();
                    Inertia.delete(this.route('app.sections.destroy', this.section.id));
                }
            });
        },

        deletePage: function (slug){
            this.$swal({
                icon: 'warning',
                iconColor: 'red',
                title: 'Are you sure?',
                html: '<small>Deleting this page will delete all of its contents within!</small>',

                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: 'red',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.showLoading();

                    this.$inertia.delete(this.route('app.projects.pages.destroy', {project: this.project.slug, page: slug}));
                }
            });
        },

        openTransferModal: function (id){
            this.isTransferModalActive = true;
            this.transferForm.pageId = id;
        },

        transferPage: function (id){
            this.transferForm.post(this.route('app.pages.transfer'), {
                onSuccess: (response) => {
                    this.isTransferModalActive = false;
                    this.navigationMutated = response.props.navigation;
                }
            })
        },

        // start dragging
        dragstart (payload) {
            this.draggingRow = payload.row
            this.draggingRowIndex = payload.index
            payload.event.dataTransfer.effectAllowed = 'copy'
        },

        // drag over other row
        dragover(payload) {
            payload.event.dataTransfer.dropEffect = 'copy'
            payload.event.target.closest('tr').classList.add('is-selected')
            payload.event.preventDefault()
        },

        // leave table while dragging
        dragleave(payload) {
            payload.event.target.closest('tr').classList.remove('is-selected')
            payload.event.preventDefault()
        },

        // drop the dragged row
        drop(payload) {
            payload.event.target.closest('tr').classList.remove('is-selected')

            // change order of sections
            this.pages.splice(payload.index, 0,
                ...this.pages.splice(this.draggingRowIndex, 1))

            // change order value of each section
            this.pages.forEach(function(page, index){
                page.order = index + 1;
            });

            // send post request with new order
            axios.post(this.route('app.sections.pages.order', this.section.id), {
                pages: this.pages
            }).then((response) => {
                this.$buefy.toast.open({
                    message: 'Order of pages changed successfully',
                    type: 'is-success',
                    duration: 3000,
                })

                this.navigationMutated = response.data.navigation;
            }).catch((error) => {
                this.$buefy.toast.open({
                    message: 'Failed to change order of pages, please try again',
                    type: 'is-danger',
                    duration: 3000,
                })
            });
        }
    }
}
</script>
