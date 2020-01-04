<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Скрипт для установки на сайт</v-card-title>
                    <v-card-text>
                        <p>Скопируйте и вставьте данный код в секцию body вниз</p>
                        <kbd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</kbd>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Доступен на сайтах</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Сайт</th>
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
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Конфигурация</v-card-title>
                    <v-card-text>
                        <p>Количество статей для показа</p>
                        <p>Темная/светлая тема</p>
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
                return `Проект "${this.$route.params.id}" - настройки скрипта`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>