<template>
    <main>
        <!-- Top Navbar-->
        <b-navbar type="is-light" wrapper-class="container">
<!--            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>-->
            <template #start>

                <inertia-link
                    v-for="(item, index) in menuItems"
                    :key="item.route"
                    :href="item.route"
                    :active="item.active"
                    as="b-navbar-item"
                >
                    {{ item.label }}
                </inertia-link>

            </template>

            <template #end>
                <b-navbar-item tag="div" v-if="!auth">
                    <div class="buttons">
                        <inertia-link :href="route('register')" class="button is-primary">
                            <strong>Sign up</strong>
                        </inertia-link>
                        <inertia-link :href="route('login')" class="button is-light">
                            <strong>Log in</strong>
                        </inertia-link>
                    </div>
                </b-navbar-item>

                <b-navbar-item tag="div" v-else>
                    <div class="buttons">
                        <inertia-link :href="route('logout')" method="post" class="button is-light">
                            <strong>Log out</strong>
                        </inertia-link>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

        <section class="m-6">
            <slot />
        </section>
    </main>
</template>

<script>
export default {
    props: {

    },

    data: function () {
        return {
            menuItems: [
                {route: route('home'), activeRoute: 'home', active: false, label: 'Home'},
                {route: route('admin.users.index'), activeRoute: 'admin.users.*', active: false, label: 'Users'},
            ],

            auth: this.$page.props.auth
        }
    },

    updated: function() {
        // refresh authenticated user
        this.auth = this.$page.props.auth;

        // check active route
        this.menuItems.forEach((value, index) => {
            value.active = route().current(value.activeRoute);
        });

        // show toast on flash messages
        if (this.$page.props.flash.success){
            this.$buefy.toast.open({
                message: this.$page.props.flash.success,
                type: 'is-success',
                duration: 3000,
            })
        }

        if (this.$page.props.flash.error){
            this.$buefy.toast.open({
                message: this.$page.props.flash.error,
                type: 'is-danger',
                duration: 3000,
            })
        }
    },

}
</script>
