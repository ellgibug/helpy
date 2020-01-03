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
                <ul>
                    <li>Экспорт</li>
                    <li>Пароль</li>
                    <li>Приоритет</li>
                    <li>Показать на странице с адресом</li>
                    <li>Спрятать</li>
                    <li>Удалить</li>
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
                    vm.setActiveMenuState('pages');
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
                return 'Actions Page ' + this.$route.params.id;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>