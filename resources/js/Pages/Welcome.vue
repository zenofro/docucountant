<template>

    <div>Dit is een test {{ foo }}</div>

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
