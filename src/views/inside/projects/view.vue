<template>
    <v-container
            fluid
    >
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Создать страницу</v-card-title>
                    <v-card-text>
                        <router-link :to="{name: 'newPage', params: { id: $route.params.id }}">Создать страницу</router-link>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Название проекта</v-card-title>
                    <v-card-text>
                        <v-text-field
                                label="Название проекта"
                        ></v-text-field>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Страницы</v-card-title>
                    <v-card-text>
                        <v-list-item v-for="page in pages" :key="page.id">
                            <v-list-item-content>
                                <v-list-item-title>{{ page.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Список констант проекта</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">Значение, сокращение</th>
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
                    let activeProjectId = vm.$route.params.id;
                    let activeProject = vm.getProjectById(activeProjectId);
                    let pages = activeProject.data.pages;
                    vm.pages = pages;
                    vm.setActiveProject(pages);
                    vm.setActiveMenuState('pages');
                });
            }).catch(next);
        },

        data(){
            return{
                pages: [],
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
            ...mapGetters("menuStates", ["getData", "getProjectById"]),
            title(){
                return `Просмотр проекта "${this.$route.params.id}"`;
            },

        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState", "setActiveProject"]),

        }

    };
</script>