require('./bootstrap');

/*
|----------------------------------------------------------------
| Vue 2
|----------------------------------------------------------------
*/

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'

Vue.use(plugin)

const el = document.getElementById('app')

import AppLayout from './Pages/Layouts/App'

new Vue({
    render: h => h(App, {
        props: {
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
        },
    }),
}).$mount(el)

// progressbar
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
    defaultIconPack: 'fas',
})

Vue.mixin({
    methods: {
        route: route
    }
});

// Sweet alert 2
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/src/sweetalert2.js' // for theme import
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// Slugify
window.slugify = require('slugify');

// Prismjs
// Prism.plugins.customClass.prefix('prism--')
// const Prism = require('prismjs');
// import 'prismjs/themes/prism.css'

