<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <h2>Экспорт</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Страница в интернете</v-card-title>
                    <v-card-text>
                        <p><a href="">Открыть</a> страницу в интернете.</p>
                        <p><a href="">Скопируйте</a> ссылку для быстрого доступа (только страница).</p>
                        <kbd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</kbd>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>DOCX</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>PDF</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Plain Text</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>PNG Image</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <h2>Безопасность</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Версия страницы</v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="version" :mandatory="false">
                            <v-radio label="Публичная версия - видна всем в интернете" value="public"></v-radio>
                            <v-radio label="Приватная версия - видна только сотрудникам организации" value="private"></v-radio>
                        </v-radio-group>
                        <p>Вы можете использовать хэш или название страницы в url.</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Доступ для редактирования</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Сотрудник</th>
                                    <th class="text-left">Действие</th>
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
        <v-row>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Блокировка страницы</v-card-title>
                    <v-card-text>
                        <p>Страница активена.
                            Вы можете деактивировать страницу.
                            Это значит, что страница исчезнет из поиска и будет недоступена для сотрдников организации.
                            Вы сможете активировать страницу спустя 24 часа.
                            <br>
                            <a href="">Деактивировать страницу</a></p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Удаление страницы</v-card-title>
                    <v-card-text>
                        <p>При удалении страницы Вы уже не сможете ее восстановить.
                            <br>
                            <a href="">Удалить страницу</a></p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <h2>Скрипт</h2>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Показать сразу на страницах с адресом</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Адрес</th>
                                    <th class="text-left">Действие</th>
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
                    vm.setActiveMenuState('pages');
                });
            }).catch(next);
        },

        data(){
            return{
                version: 'public',
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
                return `Страница "${this.$route.params.id}" - действия`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>