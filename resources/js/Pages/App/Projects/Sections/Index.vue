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

                <!--<b-collapse
                    class="card"
                    animation="slide"
                    v-for="(section, index) of sections"
                    :key="index"
                    :open="isOpen === index"
                    @open="isOpen = index">

                    <template #trigger="props">
                        <div class="card-header" role="button">
                            <p class="card-header-title">
                                {{ section.title }}
                            </p>

                            <a class="card-header-icon">
                                <b-icon
                                    :icon="props.open ? 'fas fa-chevron-down' : 'fas fa-chevron-left'">
                                </b-icon>
                            </a>
                        </div>
                    </template>

                    <div class="card-content">
                        <div class="content" v-for="page in section.pages">
                            {{ page.title }}
                        </div>
                    </div>
                </b-collapse>-->

                <b-table
                    :data="sections"
                    ref="table"
                    detailed
                    hoverable
                    custom-detail-row
                    detail-key="title"
                    :show-detail-icon="showDetailIcon">

                    <b-table-column
                        field="title"
                        width="300"
                        sortable
                        v-slot="props"
                    >
                        <template v-if="showDetailIcon">
                            {{ props.row.title }}
                        </template>
                        <template v-else>
                            <a @click="toggle(props.row)">
                                {{ props.row.title }}
                            </a>
                        </template>
                    </b-table-column>


                    <template slot="detail" slot-scope="props">
                        <tr v-for="item in props.row.pages" :key="item.title">
                            <td v-if="showDetailIcon"></td>
                            <td v-show="columnsVisible['name'].display">
                                &nbsp;&nbsp;&nbsp;&nbsp;{{ item.title }}
                            </td>
                        </tr>
                    </template>
                </b-table>

            </div>
        </div>
    </div>
</template>

<script>
    import ProjectNavigation from "../../../Components/ProjectNavigation";

    export default {
        components: {ProjectNavigation},

        props: {
            project: Object,
            sections: Array
        },

        data() {
            return {
                isOpen: null,
                columnsVisible: {
                    name: { title: 'Title', display: true },
                },
                showDetailIcon: true
            }
        },

        methods: {
            toggle(row) {
                this.$refs.table.toggleDetails(row)
            }
        }
    }
</script>

