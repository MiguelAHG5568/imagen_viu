<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <BotNav/>
        </v-navigation-drawer>
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
            <RouterLink to="/about">
            </RouterLink>
            <RouterLink to="/Consul">
            </RouterLink>
        </v-app-bar>

        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script>

import BotNav from './BotNav.vue';
import {defineComponent}from 'vue'


export default defineComponent({
    name: "NavbBar",

    data:()=> ({
    drawer: false}),

    components:{
        BotNav,
    } 
}
)
</script>
