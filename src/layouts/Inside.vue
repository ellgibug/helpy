<template>
    <v-app id="inspire">
        <v-navigation-drawer
                hide-overlay
                fixed
                v-model="drawer"
                app
                dark
        >
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                elevation="0"
                app
                color="transparent"
        >
            <v-spacer/>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                            text
                            v-on="on"
                    >
                        John Doe
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item :to="{name: 'profile'}">
                        <v-list-item-title>Личный кабинет</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: 'landing'}">
                        <v-list-item-title>Выйти</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-content>
            <router-view />
        </v-content>
        <v-footer color="transparent">
            <v-spacer/>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: true,
        }),
    }
</script>