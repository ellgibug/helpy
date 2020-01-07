<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Скрипт для установки на сайт</v-card-title>
                    <v-card-text>
                        <p>Скопируйте и вставьте данный код в секцию body вниз</p>
                        <div class="code">
                            <a href="https://fonts.google.com/?subset=cyrillic-ext">https://fonts.google.com/?subset=cyrillic-ext</a>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Скопировать
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Конфигурация</v-card-title>
                    <v-card-text>
                        <p>Количество статей для показа</p>
                        <v-radio-group v-model="radio1" :mandatory="false">
                            <v-radio color="pink accent-2" label="3 статьи" value="3"></v-radio>
                            <v-radio color="pink accent-2" label="4 статьи" value="4"></v-radio>
                            <v-radio color="pink accent-2" label="5 статей" value="5"></v-radio>
                        </v-radio-group>
                        <p>Тема оформления</p>
                        <v-radio-group v-model="radio2" :mandatory="false">
                            <v-radio color="pink accent-4" label="Светлая тема" value="light"></v-radio>
                            <v-radio color="pink accent-4" label="Темная тема" value="dark"></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Доступен на сайтах
                        <v-btn
                                class="ml-3"
                                small
                                dark
                                rounded
                                color="pink accent-2"
                                depressed>
                            <v-icon left>mdi-plus</v-icon>
                            Добавить
                        </v-btn>
                        <v-spacer/>
                        <v-text-field
                                color="pink darken-2"
                                v-model="search"
                                label="Поиск"
                                outlined
                                rounded
                                dense
                                single-line
                                hide-details
                                style="max-width: 300px"
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text class="px-0">
                        <v-data-table
                                :items-per-page="5"
                                :headers="headers"
                                :items="desserts"
                                :search="search"
                                :footer-props="{
                                  disableItemsPerPage: true
                                }"
                        >
                            <template v-slot:item.action="{ item }">
                                <v-btn
                                        class="mr-3"
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Изменить
                                </v-btn>
                                <v-btn
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Удалить
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters}        from "vuex"

    export default {

        beforeRouteEnter(to, from, next) {
            Promise.all([
            ]).then(() => {
                next(vm => {
                    vm.setActiveMenuState('projects');
                });
            }).catch(next);
        },

        data(){
            return{
                radio1: "3",
                radio2: 'light',
                search: '',
                headers: [
                    {
                        text: 'Сайт',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                        width: '70%'
                    },
                    { text: 'Действие', value: 'action' },

                ],
                desserts: [
                    {
                        name: 'http://localhost:8080/',
                    },
                    {
                        name: 'http://localhost:8081/',
                    },
                    {
                        name: 'http://localhost:8082/',
                    }
                ],
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
            title(){
                return `Настройки скрипта проекта ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>