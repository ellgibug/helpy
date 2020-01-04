<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Проект в интернете</v-card-title>
                    <v-card-text>
                        <p><a href="">Открыть</a> проект в интернете.</p>
                        <p><a href="">Скопируйте</a> ссылку для быстрого доступа (страницы с оглавлением и поиском).</p>
                        <kbd>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</kbd>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>DOCX</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>PDF</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Plain Text</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>PNG Image</v-card-title>
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
                return `Проект "${this.$route.params.id}" - экпорт`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>