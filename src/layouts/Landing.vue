<template>
    <v-app>
        <v-app-bar app elevate-on-scroll>
            <v-container>
                <v-row class="px-3">
                    <v-toolbar-title>
                        <router-link :to="{name: 'landing'}">
                            <v-img src="../assets/логотип.svg" width="110px"></v-img>
                        </router-link>
                    </v-toolbar-title>
                    <v-spacer/>
                    <v-btn rounded color="light-blue accent-3" depressed :to="{name: 'login'}" large class="px-10" dark>Вход</v-btn>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-content class="landing">
            <router-view />
        </v-content>
    </v-app>
</template>

