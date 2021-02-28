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

                <b-notification aria-close-label="Close notification">
                    Hold and drag a row to change the order of sections.
                </b-notification>

                <b-table
                    :data="sections"
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

    data() {
        return {
            navigationMutated: this.navigation,
            draggingRow: null,
            draggingRowIndex: null
        }
    },

    methods: {
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
            this.sections.splice(payload.index, 0,
                ...this.sections.splice(this.draggingRowIndex, 1))

            // change order value of each section
            this.sections.forEach(function(section, index){
                section.order = index + 1;
            });

            // send post request with new order
            axios.post(this.route('app.projects.sections.order', this.project.slug), {
                sections: this.sections
            }).then((response) => {
                this.$buefy.toast.open({
                    message: 'Order of sections changed successfully',
                    type: 'is-success',
                    duration: 3000,
                })

                this.navigationMutated = response.data.navigation;
            }).catch((error) => {
                this.$buefy.toast.open({
                    message: 'Failed to change order of sections, please try again',
                    type: 'is-danger',
                    duration: 3000,
                })
            });

        }
    }
}
</script>

