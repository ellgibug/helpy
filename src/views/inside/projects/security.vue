<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col class="text-center">
                <h1>{{title}}</h1>
                <p>Публичный - версия видна всем в интернете</p>
                <p>Приватный - версия видна только зарегистрированным пользователям</p>
                <p>Задать пароль</p>
                <p>Деактивировать проект</p>
                <p>Удалить проект</p>
                <hr>
                <p>Список последних изменений проекта</p>
                <p>Изменить/добавить людей</p>
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

            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
            title(){
                return 'Project Security ' + this.$route.params.id;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>