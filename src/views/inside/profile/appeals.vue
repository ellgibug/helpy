<template>
    <v-container fluid>
        <v-row class="px-4">
            <h1>История обращений</h1>
            <v-btn
                    class="ml-auto"
                    dark
                    rounded
                    color="pink accent-2"
                    depressed>
                Создать новое обращение
            </v-btn>
        </v-row>
        <v-row>
            <v-col>
                <v-card outlined elevation="0" v-for="(i) in 4" :key="i" class="mb-4">
                    <v-card-title>
                        Обращение {{ i }}
                        <v-spacer/>
                        23.12.2019
                    </v-card-title>
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum dolor dolore
                            dolores esse fugit harum illum magnam nostrum numquam perferendis possimus quam quidem,
                            ratione rem vel vero. Hic, minus.</p>
                        <v-rating v-model="rating" color="pink accent-4" background-color="pink lighten-2"></v-rating>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                class="mr-3"
                                small
                                dark
                                rounded
                                color="pink accent-2"
                                depressed>
                            Просмотр
                        </v-btn>
                        <v-btn
                                small
                                dark
                                rounded
                                color="pink darken-4"
                                depressed>
                            Открыть заново
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <h2>Обращение 2</h2>
                <v-textarea
                        no-resize
                        background-color="white"
                        class="my-5 px-3"
                        color="pink accent-2"
                        label="Сообщение"
                        single-line
                        rounded
                        outlined
                        hide-details
                ></v-textarea>
                <div class="chat">
                    <div v-for="(i) in 12" :key="i" class="chat__item" :style="i%2 === 1 ? 'float:left' : 'float:right'">
                        <small style="text-align: right !important;">11.12.2019 11:12:13</small>
                        <p class="ma-0">
                            <v-icon v-if="i%2 === 1" class="mr-3">mdi-account</v-icon>
                            <v-icon v-else class="mr-3">mdi-laptop</v-icon>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div style="clear: both"></div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
    .chat{
        margin: 20px 0;
        max-height: 1000px;
        overflow-y: auto;
        padding: 0 15px;
        &__item{
            font-size: 12px;
            padding: 20px;
            border: 1px solid rgba(0,0,0,0.16);
            border-radius: 28px;
            display: inline-block;
            margin: 10px 0;
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
                });
            }).catch(next);
        },

        data(){
            return{
                rating: 3,
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
