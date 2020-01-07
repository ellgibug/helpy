<template>
    <v-container
            fluid
    >
        <v-row class="px-4">
            <h1>{{title}}</h1>
            <v-btn
                    class="ml-auto mt-2"
                    dark
                    rounded
                    color="pink accent-2"
                    depressed>
                Изменить название
            </v-btn>
        </v-row>

        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Страницы</v-card-title>
                    <v-card-text class="px-0">
                        <div
                                class="page"
                                v-for="(page, i) in pages"
                                :key="page.id"
                                :style="i === 0 ? 'border-top: 0px' : ''">
                            <v-icon class="mr-2">mdi-reorder-horizontal</v-icon>
                            <span><a href="">{{ page.title }}</a></span>
                        </div>
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
    </v-container>
</template>

<style lang="scss" scoped>
    .page{
        padding: 16px; border-top: 1px solid rgba(0,0,0,0.16);
        a{
            text-decoration: none;
            color: inherit;
        }
        a:hover{
            color: #FF4081;
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
                search: '',
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
                    },
                    {
                        name: 'Константа 2',
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    },
                    {
                        name: 'Константа 3',
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    }
                ],
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData", "getProjectById"]),
            title(){
                return `Проект ${this.$route.params.id}`;
            },

        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState", "setActiveProject"]),

        }

    };
</script>