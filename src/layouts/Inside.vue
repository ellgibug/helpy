<template>
    <v-app id="inspire">
        <v-navigation-drawer
                src="https://avatars.mds.yandex.net/get-pdb/1817937/b439aee1-4c65-46dc-b628-3dcc84d1ae32/s1200"
                color="rgba(0,0,0,0.9)"
                disable-resize-watcher
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
                color="blue-grey lighten-5"
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

        <v-content class="blue-grey lighten-5">
            <router-view />
        </v-content>
        <v-footer class="blue-grey lighten-5">
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