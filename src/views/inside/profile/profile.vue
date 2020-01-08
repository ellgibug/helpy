<template>
    <v-container fluid>
        <h1>Профиль (администратор)</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Персональные данные</v-card-title>
                    <v-card-text>
                        <p>Ваш ID клиента: 1234567</p>
                        <v-text-field
                                outlined
                                class="my-5"
                                color="pink accent-2"
                                label="ФИО"
                                single-line
                                hide-details
                        ></v-text-field>
                        <v-text-field
                                outlined
                                class="mb-5"
                                color="pink accent-2"
                                label="Email"
                                single-line
                                hide-details
                        ></v-text-field>
                        <v-text-field
                                outlined
                                color="pink accent-2"
                                label="Телефон"
                                single-line
                                hide-details
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="text-center">
                        <v-btn
                                class="px-12 text-center"
                                dark
                                large
                                rounded
                                color="pink accent-2"
                                depressed>
                            Применить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Безопасность</v-card-title>
                    <v-card-text>
                        <v-text-field
                                outlined
                                class="my-5"
                                color="pink accent-2"
                                label="Текущий пароль"
                                single-line
                                hide-details
                        ></v-text-field>
                        <v-text-field
                                outlined
                                class="mb-5"
                                color="pink accent-2"
                                label="Новый пароль"
                                single-line
                                hide-details
                        ></v-text-field>
                        <v-text-field
                                outlined
                                color="pink accent-2"
                                label="Подтвердить пароль"
                                single-line
                                hide-details
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="text-center">
                        <v-btn
                                class="px-12 text-center"
                                dark
                                large
                                rounded
                                color="pink accent-2"
                                depressed>
                            Применить
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
