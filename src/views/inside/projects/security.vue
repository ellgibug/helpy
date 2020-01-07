<template>
    <v-container fluid>
        <h1>{{title}}</h1>
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
                    <v-card-title>Блокировка и удаление</v-card-title>
                    <v-card-text>
                        <p>Проект активен. Вы можете деактивировать проект.
                            Это значит, что он исчезнет из поиска и будет недоступен для сотрдников организации.
                            Вы сможете активировать проект спустя 24 часа. </p>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Деактивировать
                        </v-btn>
                        <p class="mt-8">При удалении проекта Вы уже не сможете его восстановить.</p>
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
                    <v-card-title>
                        Последние изменения
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
                                    Перейти
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

        data () {
            return {
                version: 'public',
                search: '',
                search2: '',
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
                headers2: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Дата', value: 'date' },
                    { text: 'Страница', value: 'page' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
                    {
                        name: 'Иванов И.И.',
                        date: "23.12.2019",
                        page: "Страница 1",
                    },
                    {
                        name: 'Петров П.П.',
                        date: "12.12.2019",
                        page: "Страница 2",
                    },
                    {
                        name: 'Сидоров С.С.',
                        date: "17.12.2019",
                        page: "Страница 3",
                    }
                ],
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
            title(){
                return `Настройки безопасности проекта ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>