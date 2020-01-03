<template>
    <v-container
            fluid
    >
        <h1>{{title}}</h1>
        <v-row>
            <v-col cols="12" xl="8" lg="8" md="7" sm="12" xs="12">
                Список страниц - меняется местами
                <br>
                {{ pages }}
            </v-col>
            <v-col cols="12" xl="4" lg="4" md="5" sm="12" xs="12">
                Настройки страницы
                <br>
                <ul>
                    <li>Просмотр</li>
                    <li>Редактировать</li>
                    <li>Экспорт</li>
                    <li>Пароль</li>
                    <li>Приоритет</li>
                    <li>Показать на странице с адресом</li>
                    <li>Спрятать</li>
                    <li>Удалить</li>
                </ul>
            </v-col>
        </v-row>
        <h2>Список констант проекта</h2>
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
                pages: []
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData", "getProjectById"]),
            title(){
                return 'Project View ' + this.$route.params.id;
            },

        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState", "setActiveProject"]),

        }

    };
</script>