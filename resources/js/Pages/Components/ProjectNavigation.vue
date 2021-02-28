<template>
    <div>
        <!-- Navigation -->
        <b-menu>
            <b-menu-list>
                <inertia-link :active="route().current('app.projects.show', project.slug)"
                              :href="route('app.projects.show', project.slug)" as="b-menu-item"
                              label="Home"></inertia-link>
            </b-menu-list>

            <b-menu-list v-for="section in navigation" :key="section.id" :label="section.title">
                <inertia-link v-for="page in section.pages" :key="page.id"
                              :active="route().current('app.projects.pages.show', {project: project.slug, page: page.slug}) || route().current('app.projects.pages.edit', {project: project.slug, page: page.slug})"
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

        <!-- Media -->
        <section>
            <b-button
                label="Media"
                type="is-info is-light"
                expanded
                @click="openMediaModal" />

            <b-modal v-model="isMediaModalActive" class="p-5" :width="1500">
                <div class="card">
                    <div class="card-content">

                        <b-loading :is-full-page="false" v-model="isLoading"></b-loading>

                        <!-- Available media -->
                        <b-tabs v-model="activeTab">
                            <b-tab-item label="Images">
                                <div class="columns is-multiline">
                                    <div class="column is-2 mb-5" v-for="media in mediaImages">
                                        <div class="notification is-light">
                                        <button class="delete is-flex is-justify-content-end" @click="deleteMedia(media)"></button>

                                        <a href="#"  @click="getUrl(media)">
                                            <img :src="media.url" :alt="media.file_name" style="height: 100px; width: 200px; object-fit: contain" />
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </b-tab-item>

                            <b-tab-item label="Videos">
                                <div class="columns is-multiline">
                                    <div class="column is-2 mb-5" v-for="media in mediaVideos">
                                        <div class="notification is-light">
                                            <button class="delete is-flex is-justify-content-end" @click="deleteMedia(media)"></button>

                                            <a href="#"  @click="getUrl(media)">
                                                <img :src="media.thumbnail" :alt="media.file_name" style="height: 100px; width: 200px; object-fit: contain" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </b-tab-item>

                        </b-tabs>


                        <!-- Upload media -->
                        <form @submit.prevent="uploadMedia">
                            <div class="is-flex">
                                <b-field
                                    :message="form.errors.media"
                                    :type="form.errors.media ? 'is-danger' : null"
                                    class="file is-primary"
                                    :class="{'has-name': !!form.media}"
                                >
                                    <b-upload
                                        v-model="form.media"
                                        class="file-label"
                                        required
                                        accept="video/*,image/*"
                                    >
                                        <span class="file-cta">
                                            <b-icon class="file-icon" icon="upload"></b-icon>
                                            <span class="file-label">Click to upload</span>
                                        </span>

                                        <span class="file-name" v-if="form.media">
                                            {{ form.media.name }}
                                        </span>
                                    </b-upload>
                                </b-field>

                                <div class="ml-3" v-if="form.media">
                                    <b-button :disabled="form.processing" :loading="form.processing" native-type="submit"
                                              type="is-success">
                                        Upload
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
export default {
    props: {
        navigation: Array,
        project: Object
    },

    data() {
        return {
            isMediaModalActive: false,
            activeTab: 0,
            isLoading: false,
            mediaImages: null,
            mediaVideos: null,
            form: this.$inertia.form({
                media: null,
            }),
        };
    },

    methods: {
        openMediaModal: function (){
            this.isMediaModalActive = true;
            this.isLoading = true;
            this.refreshMedia();
        },

        refreshMedia: function (){
            axios.get(this.route('app.projects.media.index', this.project.slug))
                .then((response) => {
                    this.mediaImages = response.data.media_images;
                    this.mediaVideos = response.data.media_videos;
                    this.isLoading = false;
                });
        },

        uploadMedia: function () {
            this.form.post(this.route('app.projects.media.store', this.project.slug), {
                onSuccess: page => {
                    if(this.form.wasSuccessful){
                        this.form.reset();
                        this.refreshMedia();
                    }
                },
            })
        },

        getUrl: function (media){
            this.$copyText(media.url)
                .then((e) => {
                    this.$buefy.toast.open({
                        message: 'Copied url!',
                        type: 'is-success',
                        duration: 1500,
                    })
                }, (e) => {
                    this.$buefy.toast.open({
                        message: 'Failed to copy url!',
                        type: 'is-danger',
                        duration: 1500,
                    })
            });
        },

        deleteMedia: function (media){
            axios.delete(this.route('app.projects.media.destroy', this.project.slug), {
                data: {
                    media_id: media.id
                }
            }).then((response) => {
                console.log(response);
                this.$buefy.toast.open({
                    message: 'Removed media from project!',
                    type: 'is-success',
                    duration: 1500,
                });

                this.isLoading = false;
                this.refreshMedia();
            });
        }
    }
}
</script>
