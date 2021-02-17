<template>
    <main>
        <!-- Top Navbar-->
        <b-navbar>
<!--            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>-->
            <template #start>
                <b-navbar-item>
                    <inertia-link href="/">Home</inertia-link>
                </b-navbar-item>

                <b-navbar-item>
                    <inertia-link href="/admin/users">Users</inertia-link>
                </b-navbar-item>

<!--                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="#">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>-->
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

}
</script>
