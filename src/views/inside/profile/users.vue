<template>
    <v-container fluid>
        <v-row class="px-4">
            <h1>Пользователи организации</h1>
            <v-btn
                    class="ml-auto mt-2"
                    dark
                    rounded
                    color="pink accent-2"
                    depressed>
                Пригласить
            </v-btn>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Все пользователи
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
                                :items-per-page="7"
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
                    vm.setActiveMenuState('profile');
                });
            }).catch(next);
        },

        data(){
            return{
                search2: '',
                headers2: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Тип', value: 'type' },
                    { text: 'Email', value: 'email' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
                    {
                        name: 'Иванов И.И.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Петров П.П.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Сидоров С.С.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Иванов И.И.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Петров П.П.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Сидоров С.С.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Иванов И.И.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Петров П.П.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    },
                    {
                        name: 'Сидоров С.С.',
                        type: "сотрудник",
                        email: "test@test.ru",
                    }
                ]
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>
