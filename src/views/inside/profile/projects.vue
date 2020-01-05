<template>
    <v-container fluid>
        <h1>Мои доступные проекты</h1>
        <v-row>
            <v-col cols="12" xl="2" lg="3" md="6" sm="6" xs="12" v-for="project in projects" :key="project.id">
                <v-card elevation="0" outlined>
                    <v-card-title>{{ project.title }}</v-card-title>
                    <v-card-text>
                        <p>Количество страниц {{ project.data.pages.length }}</p>
                        <p>Создано {{ project.data.created_at }}</p>
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
                    vm.projects = vm.getProjects;
                });
            }).catch(next);
        },

        data(){
            return{
                projects: []
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getProjects", "getData"]),
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>
