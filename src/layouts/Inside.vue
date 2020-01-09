<template>
    <v-app>
        <v-navigation-drawer
                disable-resize-watcher
                hide-overlay
                fixed
                v-model="drawer"
                app
                width="280"
        >
            <aside-menu :data="data"></aside-menu>
        </v-navigation-drawer>

        <v-app-bar
                elevation="0"
                app
                color="#f8f8ff"
        >
            <v-spacer/>
            <v-btn
                    v-if="isView"
                    outlined
                    rounded
                    color="pink lighten-2"
                    depressed :to="{name: 'newPage', params: { id: $route.params.id }}" class="mr-4">
                <v-icon left>mdi-plus</v-icon>
                Создать страницу
            </v-btn>
            <v-btn
                    v-if="isDashboard"
                    outlined
                   rounded
                   color="pink lighten-2"
                   depressed :to="{ name: 'newProject'}" class="mr-4">
                <v-icon left>mdi-plus</v-icon>
                Создать проект
            </v-btn>
            <v-btn outlined
                   rounded
                   color="pink darken-4"
                   depressed :to="{ name: 'dashboard'}" class="mr-4">
                <v-icon left>mdi-home</v-icon>
                Проекты
            </v-btn>
            <v-btn
                    color="purple darken-4"
                    @click="showMenu=true"
                    outlined
                    rounded
                    depressed
            >
                <v-icon left>mdi-account</v-icon>
                Личный кабинет
            </v-btn>
            <v-menu offset-y v-model="showMenu" :position-x="x"
                    :position-y="60"
                    absolute>
                <v-list flat elevation="0">
                    <v-list-item :to="{name: 'profile'}">
                        <v-list-item-title>
                            <v-icon small class="mr-3">mdi-account</v-icon>
                            Личный кабинет
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: 'landing'}">
                        <v-list-item-title>
                            <v-icon small class="mr-3">mdi-logout</v-icon>
                            Выйти
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-content class="main-bg">
            <router-view />
        </v-content>
<!--        <v-footer class="main-bg" color="transparent">-->
<!--            <v-spacer/>-->
<!--            <span>&copy; 2019</span>-->
<!--        </v-footer>-->
    </v-app>
</template>

<script>
    import AsideMenu from "../components/AsideMenu";

    export default {
        data: () => ({
            drawer: true,
            data: "123",
            showMenu: false
        }),
        components: {
            "aside-menu": AsideMenu
        },
        computed:{
            x(){
                return window.screen.width - 205;
            },
            isDashboard(){
                return this.$route.name === 'dashboard';
            },
            isView(){
                return this.$route.name === 'view';

            }
        },
    }
</script>

<style lang="scss" scoped>
    .main-bg{
        background-color: #f8f8ff;
    }
    .v-card{
        border-radius: 28px !important;
        overflow: hidden;
        .v-card__text{
            border-top: 1px solid rgba(0, 0, 0, 0.12);
            padding: 16px;
        }
        .v-card__actions{
            padding: 16px;
        }
    }
    .code{
        font-size: 16px;
        padding-bottom: 5px;
        border-bottom: 5px dotted rgba(0, 0, 0, 0.12);
        display: inline-block;
        font-family: 'IBM Plex Mono', monospace;
        a{
            text-decoration: none;
            color: inherit;
        }
    }
    .code:hover{
        color: #FF4081;
    }
    .pink-link{
        text-decoration: none;
        color: #FF4081 !important;
    }
    .pink-link:hover{
        color: #F48FB1 !important;
    }

    .code-block{
        margin: 30px 0;
        padding: 20px;
        font-size: 14px;
        background: #546E7A;
        border-radius: 28px;
        pre{
            color: #f8f8ff;
            font-family: 'IBM Plex Mono', monospace;

        }
    }
</style>