<template>
    <v-app id="inspire">
        <v-navigation-drawer
                hide-overlay
                fixed
                v-model="drawer"
                app
                dark
                width="300"
        >
            <aside-menu :data="data"></aside-menu>
        </v-navigation-drawer>

        <v-app-bar
                elevation="0"
                app
                color="transparent"
        >
            <v-btn text icon color="primary" :to="{ name: 'dashboard'}">
                <v-icon>mdi-home</v-icon>
            </v-btn>
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
    import AsideMenu from "../components/AsideMenu";

    export default {
        data: () => ({
            drawer: true,
            data: "123"
        }),
        components: {
            "aside-menu": AsideMenu
        },

    }
</script>