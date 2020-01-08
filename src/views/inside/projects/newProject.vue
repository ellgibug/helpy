<template>
    <v-container fluid>
        <h1>Создать проект</h1>
        <v-row>
            <v-col>
                <v-text-field
                        background-color="white"
                        class="my-5"
                        color="pink accent-2"
                        label="Название"
                        single-line
                        rounded
                        outlined
                        hide-details
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Видимость проекта</v-card-title>
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
                    <v-card-title>Формирование ссылки на проект</v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="version2" :mandatory="false">
                            <v-radio color="pink accent-2" label="Использовать hash проекта" value="hash"></v-radio>
                            <v-radio color="pink accent-2" label="Использовать название проекта" value="name"></v-radio>
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
                    <v-card-title>
                        Константы
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
        <v-row>
            <v-col class="text-center py-7">
                <v-btn
                        class="px-12"
                        dark
                        x-large
                        rounded
                        color="pink accent-2"
                        depressed>
                    Создать
                </v-btn>
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
                version: 'public',
                version2: 'hash',
                search: '',
                search2: '',
                headers: [
                    {
                        text: 'Название',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Описание', value: 'description', width: '70%'},
                    { text: 'Действие', value: 'action' },

                ],
                desserts: [
                    {
                        name: 'Константа 1',
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    }
                ],
                headers2: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Роль', value: 'role' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
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
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"])
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>