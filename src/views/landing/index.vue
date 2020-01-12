<template>
    <div>

        <div>
            <v-container>
                <v-row align="center">
                    <v-col>
                        <h2 class="display-1 text-center">Вся база знаний на Ваших сайтах</h2>
                    </v-col>
                    <v-col>
                        <v-card hover style="border-radius: 28px">
                            <v-card-text class="text-center py-12 px-8">
                                <v-text-field
                                        color="light-blue accent-1"
                                        hide-details
                                        single-line
                                        outlined
                                        label="Поиск"
                                ></v-text-field>
                                <p class="body-1 my-7">Найдено 12 совпадений</p>
                                <v-card v-for="i in 2" :key="i" class="mb-5" outlined elevation="0" hover>
                                    <v-card-text>
                                        <v-row justify="space-between" align="center">
                                            <v-col cols="2">
                                                <v-img src="../../assets/file.svg"></v-img>
                                            </v-col>
                                            <v-col
                                                    cols="10"
                                                    class="text-justify"
                                            >
                                                <p class="pa-0 ma-0 font-weight-bold">Lorem ipsum</p>
                                                <p class="pa-0 ma-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Alias, aperiam
                                                    architecto atque dolores excepturi id molestiae.</p>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                                <v-btn rounded color="light-blue accent-1" depressed>Показать все</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div>
            <v-container class="text-center">
                <h2 class="my-10 display-2">
                    HELPY - это
                </h2>
                <v-row align="center">
                    <v-col>
                        <v-img src="../../assets/экспорт.svg" width="300px" class="mx-auto"></v-img>
                    </v-col>
                    <v-col>
                        <p class="display-1">Экспорт в различные форматы</p>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col>
                        <p class="display-1">Расширенный редактор страниц</p>
                    </v-col>
                    <v-col>
                        <v-img src="../../assets/редактор_страниц.svg" width="300px" class="mx-auto"></v-img>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col>
                        <v-img src="../../assets/каталог.svg" width="300px" class="mx-auto"></v-img>
                    </v-col>
                    <v-col><p class="display-1">Быстрый доступ к базе знаний</p></v-col>
                </v-row>
                <v-row align="center">
                    <p class="display-1">Возможность работы в команде</p>
                    <v-col>
                        <v-img src="../../assets/работа_в_команде.svg" width="300px" class="mx-auto"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="light-blue lighten-1 my-10">
            <v-container>
                <v-row align="center" class="py-10">
                    <h2 class="white--text display-1">Попробовать бесплатно</h2>
                    <v-spacer/>
                    <v-btn rounded color="white" outlined x-large>Начать использование</v-btn>
                </v-row>
            </v-container>
        </div>

        <div>
            <v-container class="my-10">
                <h2 class="display-2 text-center mb-10">Тарифные планы</h2>
                <v-row justify="space-between">
                    <v-col cols="4">
                        <v-card class="price-card" hover>
                            <v-card-title>Бесплатный</v-card-title>
                            <v-card-text class="px-0">
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество проектов - 1</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество страниц - 20</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество сотрудников - 2</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Проект публичный</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Экспорт в PDF</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальный объем хранимых данных - 500 Mб</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card-text>
                            <v-card-actions class="px-3 pb-4">
                                <v-btn
                                        outlined
                                        block
                                        rounded
                                        color="light-blue accent-2"
                                        depressed>
                                    Начать использовать прямо сейчас
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <h3 class="heading text-center"></h3>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="price-card" hover>
                            <v-card-title>Рекомендуемый</v-card-title>
                            <v-card-text class="px-0">
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество проектов - 100</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество страниц - 100 000</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальное количество сотрудников - 100</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Настройки публичности проекта</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Экспорт в PDF, DOCX, PNG, TEXT</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Максимальный объем хранимых данных - 100 Гб</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card-text>
                            <v-card-actions class="px-3 pb-4">
                                <v-btn
                                        block
                                        rounded
                                        color="light-blue accent-2"
                                        depressed>
                                    Начать использовать за 150 р в месяц
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="4" >
                        <v-card class="price-card" hover>
                            <v-card-title class="text-center">Максимальный</v-card-title>
                            <v-card-text class="px-0">
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Неограниченное количество проектов</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Неограниченное количество страниц</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Неограниченное количество сотрудников</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Расширенные настройки публичности проекта</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Экспорт в PDF, DOCX, PNG, TEXT</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider/>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>Неограниченный объем хранимых данных</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card-text>
                            <v-card-actions class="px-3 pb-4">
                                <v-btn
                                        block
                                        rounded
                                        color="light-blue accent-4"
                                        depressed>
                                    Начать использовать за 500 р в месяц
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
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
                        <v-img src="../../assets/логотип.svg" width="100px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="blue-grey darken-4 py-5 footer text-center white--text">
            <p class="caption">На сайте используются cookie для сбора информации технического характера и обрабатываем IP-адрес вашего местоположения. Продолжая использовать этот сайт, вы даете согласие на использование файлов cookies.
            </p>
            <p>Создано в YourSuperSite, 2020</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .price-card{
        border-radius: 28px !important;
        .v-card__title{
            text-align: center !important;
        }
    }

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
