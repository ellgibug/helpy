<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Версия проекта</v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="version" :mandatory="false">
                            <v-radio label="Публичная версия - видна всем в интернете" value="public"></v-radio>
                            <v-radio label="Приватная версия - видна только сотрудникам организации" value="private"></v-radio>
                        </v-radio-group>
                        <p>Вы можете использовать хэш или название проекта в url. Просмотр проекта доступен во складке "Экспорт".</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Блокировка проекта</v-card-title>
                    <v-card-text>
                        <p>Проект активен.
                            Вы можете деактивировать проект.
                            Это значит, что он исчезнет из поиска и будет недоступен для сотрдников организации.
                            Вы сможете активировать проект спустя 24 часа.
                            <br>
                            <a href="">Деактивировать проект</a></p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Удаление проекта</v-card-title>
                    <v-card-text>
                        <p>При удалении проекта Вы уже не сможете его восстановить.
                            <br>
                            <a href="">Удалить проект</a></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Список последних изменений</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Имя</th>
                                    <th class="text-left">Страница (+дата)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Права доступа сотрудников</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Сотрудник</th>
                                    <th class="text-left">Права (да или нет)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in desserts2" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
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
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                ],
                desserts2: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                    }
                ],
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
            title(){
                return `Проект "${this.$route.params.id}" - настройки безопасности`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>