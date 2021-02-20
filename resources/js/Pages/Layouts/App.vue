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
                    v-if="item.visible"
                    :key="item.route"
                    :href="item.route"
                    :active="route().current(item.activeRoute)"
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

                <b-navbar-dropdown :label="auth.user.name" v-else>
                    <inertia-link :href="route('admin.users.index')" as="b-navbar-item" :active="route().current('admin.users.*')">
                        Users
                    </inertia-link>

                    <inertia-link :href="route('logout')" method="post" as="b-navbar-item">
                        <strong>Logout</strong>
                    </inertia-link>
                </b-navbar-dropdown>
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
                // when route.current() doesnt work
                // {route: route('home'), label: 'Home', activeRoute: 'home', active: false, visible: 'always'},
                // {route: route('admin.users.index'), label: 'Users', activeRoute: 'admin.users.*', active: false, visible: true}, // when route.current() doesnt work
                {route: route('home'), label: 'Home', activeRoute: 'home', visible: true},
            ],

            auth: this.$page.props.auth
        }
    },

    updated: function() {
        // refresh authenticated user
        this.auth = this.$page.props.auth;

        // check active route
        // this.menuItems.forEach((value, index) => {
        //     value.active = route().current(value.activeRoute);
        //     if (value.visible !== 'always'){
        //         value.visible = this.auth;
        //     }
        // });

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
