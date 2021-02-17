<template>
    <main>
        <header>
            <inertia-link href="/">Home</inertia-link>
            <inertia-link href="/about">About</inertia-link>
            <inertia-link href="/contact">Contact</inertia-link>
        </header>

        <main>
            <slot />
        </main>
    </main>
</template>

<script>
export default {
    props: {

    },

}
</script>
