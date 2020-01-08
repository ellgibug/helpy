<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <h2 class="mt-5">Экспорт</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Страница в интернете</v-card-title>
                    <v-card-text>
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
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-4"
                                depressed>
                            Перейти
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Скачать страницу в формате</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-document</v-icon>
                                    <span>Docx</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-pdf</v-icon>
                                    <span>Pdf</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-outline</v-icon>
                                    <span>Plain Text</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-image</v-icon>
                                    <span>Png Image</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <h2 class="mt-5">Безопасность</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Видимость страницы</v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="version" :mandatory="false">
                            <v-radio color="pink accent-2" label="Публичная версия - видна всем в интернете" value="public"></v-radio>
                            <v-radio color="pink accent-2" label="Приватная версия - видна только сотрудникам организации" value="private"></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Права доступа сотрудников
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
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Изменить
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Блокировка и удаление</v-card-title>
                    <v-card-text>
                        <p>Страница активна. Вы можете деактивировать страницу.
                            Это значит, что она исчезнет из поиска и будет недоступена для сотрдников организации.
                            Вы сможете активировать страницу спустя 24 часа. </p>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Деактивировать
                        </v-btn>
                        <p class="mt-8">При удалении страницы Вы уже не сможете ее восстановить.</p>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-4"
                                depressed>
                            Удалить
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <h2 class="mt-5">Скрипт</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Показывать сразу на страницах
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
                                v-model="search2"
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
                                :headers="headers2"
                                :items="desserts2"
                                :search="search2"
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


<style lang="scss" scoped>
    .types{
        text-align: center;
        i{
            display: block;
            font-size: 80px;
        }
        span{
            display: block;
        }
    }
</style>

<script>
    import {mapActions, mapGetters}        from "vuex"

    export default {

        beforeRouteEnter(to, from, next) {
            Promise.all([
            ]).then(() => {
                next(vm => {
                    vm.setActiveMenuState('pages');
                });
            }).catch(next);
        },

        data(){
            return{
                version: 'public',
                search: '',
                headers: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Роль', value: 'role' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts: [
                    {
                        name: 'Иванов И.И.',
                        role: "Сотрудник",
                    },
                    {
                        name: 'Петров П.П.',
                        role: "Сотрудник",
                    },
                    {
                        name: 'Сидоров С.С.',
                        role: "Сотрудник",
                    }
                ],
                search2: '',
                headers2: [
                    {
                        text: 'Страница',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                        width: '70%'
                    },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
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
                return `Страница ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>