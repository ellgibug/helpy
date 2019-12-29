<template>
    <v-app id="inspire">
        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-toolbar-title>
                <router-link :to="{name: 'landing'}">
                    Helpy
                </router-link>
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <router-view />
        </v-content>
        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>
