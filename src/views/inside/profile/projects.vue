<template>
    <v-container fluid>
        <v-row class="px-4">
            <h1>Мои проекты</h1>
            <v-btn
                    class="ml-auto mt-2"
                    dark
                    rounded
                    color="pink accent-2"
                    depressed>
                Создать новый
            </v-btn>
        </v-row>
        <v-row>
            <v-col cols="12" xl="2" lg="4" md="6" sm="6" xs="12" v-for="project in projects" :key="project.id">
                <div class="project">
                    <div class="project__logo">{{ project.id }}</div>
                    <div class="project__title">{{ project.title }}</div>
                    <div class="project__info">Количество страниц {{ project.data.pages.length }} | Создано {{ project.data.created_at }}</div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
    .project{
        padding: 20px 10px;
        border-radius: 28px;
        border: 5px dotted rgba(0, 0, 0, 0.12);
        color: rgba(0,0,0,0.6);
        text-align: center;
        &__logo{
            font-size: 80px;
        }
        &__title{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        &__info{
            font-size: 12px;
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
