<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Проект в интернете с оглавлением и поиском</v-card-title>
                    <v-card-text>
                        <div class="code">
                            <a href="https://fonts.google.com/?subset=cyrillic-ext">https://fonts.google.com/?subset=cyrillic-ext</a>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Скопировать
                        </v-btn>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-4"
                                depressed>
                            Перейти
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Скачать проект в формате</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-document</v-icon>
                                    <span>Docx</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-pdf</v-icon>
                                    <span>Pdf</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-outline</v-icon>
                                    <span>Plain Text</span>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="types">
                                    <v-icon>mdi-file-image</v-icon>
                                    <span>Png Image</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
    .types{
        text-align: center;
        i{
            display: block;
            font-size: 80px;
        }
        span{
            display: block;
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
                return `Настройки экспорта проекта ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>