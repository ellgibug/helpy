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
                <h1>Profile</h1>
                <p>Страница профиль</p>
                <ul>
                    <li>Личные данные</li>
                    <li>Данные для входа</li>
                    <li>Роль - пользователь изменить не может, меняет система</li>
                    <li>Роль - админ организации (добавление сотрудников, все действия с проектами), сотрудник организации (просмотр + редатирование/частичное редатирование проекта(ов))</li>
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
