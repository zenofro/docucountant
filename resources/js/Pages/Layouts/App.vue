<template>
    <main>
        <!-- Top Navbar-->
        <b-navbar type="is-light">
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
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
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
            ]
        }
    },

    updated: function() {
        this.menuItems.forEach((value, index) => {
            value.active = route().current(value.activeRoute);
        })
    },

}
</script>
