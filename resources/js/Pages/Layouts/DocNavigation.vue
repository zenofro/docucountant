<template>
    <div class="container">
    <div class="columns is-desktop">
        <b-menu class="column is-3">
            <b-menu-list>
                <b-menu-item icon="information-outline" label="Home"></b-menu-item>
            </b-menu-list>

            <b-menu-list label="Users">
                <b-menu-item icon="information-outline" label="Creating a new user"></b-menu-item>
                <b-menu-item icon="information-outline" label="Editing a user"></b-menu-item>
            </b-menu-list>

            <b-menu-list label="Projects">
                <b-menu-item icon="information-outline" label="Creating a new project"></b-menu-item>
                <b-menu-item icon="information-outline" label="Editing a project"></b-menu-item>
            </b-menu-list>

        </b-menu>

        <div class="column">
            <slot />
        </div>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>
