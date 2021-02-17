require('./bootstrap');

/*
|----------------------------------------------------------------
| Vue 3
|----------------------------------------------------------------
*/

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

import AppLayout from './Pages/Layouts/App'

createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`)
            .then(({ default: page }) => {
                if (page.layout === undefined) {
                    // if route is public (for guests)

                    // if route is /app
                    page.layout = AppLayout

                    // if route is /admin
                }

                return page
            }),
    })
}).use(plugin).mount(el)

// progressbar
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()
