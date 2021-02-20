<template>
    <div class="container">
    <div class="columns is-desktop">
        <b-menu class="column is-3">
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                <b-menu-item icon="settings" :active="true" expanded>
                    <template #label="props">
                        Administrator
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                    </template>
                    <b-menu-item icon="account" label="Users"></b-menu-item>
                    <b-menu-item icon="cellphone-link">
                        <template #label>
                            Devices
                            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                <template #trigger>
                                    <b-icon icon="dots-vertical"></b-icon>
                                </template>
                                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                            </b-dropdown>
                        </template>
                    </b-menu-item>
                    <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="My Account">
                    <b-menu-item label="Account data"></b-menu-item>
                    <b-menu-item label="Addresses"></b-menu-item>
                </b-menu-item>
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
