<template>

    <div>Dit is een test {{ foo }}</div>

    <div class="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
    </div>


</template>

<script>
    import AppLayout from './Layouts/App'
    import DocNavigationLayout from './Layouts/DocNavigation'

    export default {
        layout: [AppLayout, DocNavigationLayout],

        props: {
            foo: String
        }
    }
</script>
