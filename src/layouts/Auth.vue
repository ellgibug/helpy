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
                </v-row>
            </v-container>
        </v-app-bar>

        <v-content style="min-height: 100vh">
            <router-view />
        </v-content>
        <div class="blue-grey darken-1 py-10 footer">
            <v-container>
                <v-row justify="space-between">
                    <v-col>
                        <h3 class="mb-5">Общая информация</h3>
                        <p><a href="">О проекте</a></p>
                        <p><a href="">Условия использования</a></p>
                        <p><a href="">Условия оплаты</a></p>
                        <p><a href="">Тарифные планы</a></p>
                        <p><a href="">Часто задаваемые вопросы</a></p>
                        <p><a href="">Инструкция</a></p>
                    </v-col>
                    <v-col>
                        <h3 class="mb-5">Другие проекты</h3>
                        <p><a href="">Docky</a></p>
                        <p><a href="">Курсы</a></p>
                    </v-col>
                    <v-col>
                        <h3 class="mb-5">Контакты</h3>
                        <p><a href="">Напишите нам</a></p>
                        <v-img src="../assets/логотип.svg" width="100px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="blue-grey darken-4 py-5 footer text-center white--text">
            <p class="caption">На сайте используются cookie для сбора информации технического характера и обрабатываем IP-адрес вашего местоположения. Продолжая использовать этот сайт, вы даете согласие на использование файлов cookies.
            </p>
            <p>Создано в YourSuperSite, 2020</p>
        </div>
    </v-app>
</template>

<style lang="scss" scoped>
    .footer{
        a{
            color: white;
            text-decoration: none;
        }
        a:hover{
            color: #40C4FF;
        }
    }
</style>

