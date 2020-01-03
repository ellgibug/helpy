<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col>
                <h1>Users</h1>
                <p>Организация</p>
                <ul>
                    <li>Список пользователей - админ с редактированием, остальные просмотр + регистрация новых</li>
                    <li>Доступные проекты и роли - у всех, у админа еще изменение и просмотр прав</li>
                </ul>
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
