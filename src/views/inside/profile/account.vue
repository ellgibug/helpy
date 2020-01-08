<template>
    <v-container fluid>
        <h1>Баланс</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Тип аккаунта</v-card-title>
                    <v-card-text>
                        <p><v-icon style="font-size: 60px" color="pink accent-2" class="mr-3">mdi-check-decagram</v-icon>Ваш тип аккаунта - ПРО. У Вас подключены все возможности проекта HEPLY.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                outlined
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Подробнее о типах аккаунта
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Баланс
                        <v-spacer/>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Пополнить баланс
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <p>На Вашем счете 1 200 рублей.</p>
                        <p>Следующее списание в размере 999 рублей будет через 5 дней - 13 января 2020 года.</p>
                        <p>При недостаточном балансе Вы можете пользоваться текущей версией аккаунта в течение 1 недели (7 дней), затем Вам будет подключена базовая версия аккаунта.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                outlined
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Подробнее об оплате
                        </v-btn>
                    </v-card-actions>
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
