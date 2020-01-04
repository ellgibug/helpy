<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Родительские страницы</v-card-title>
                    <v-card-text>
                        <p>Страница 1</p>
                        <p>Страница 2</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
                <v-card elevation="0" outlined>
                    <v-card-title>Дочерние страницы</v-card-title>
                    <v-card-text>
                        <p>Страница 45</p>
                        <p>Страница 46</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto commodi
                            repellat reprehenderit repudiandae suscipit. Et, excepturi magni minus modi ratione ullam
                            voluptates. Error eveniet ipsa quae quaerat rem sed.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto commodi
                            repellat reprehenderit repudiandae suscipit. Et, excepturi magni minus modi ratione ullam
                            voluptates. Error eveniet ipsa quae quaerat rem sed.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto commodi
                            repellat reprehenderit repudiandae suscipit. Et, excepturi magni minus modi ratione ullam
                            voluptates. Error eveniet ipsa quae quaerat rem sed.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto commodi
                            repellat reprehenderit repudiandae suscipit. Et, excepturi magni minus modi ratione ullam
                            voluptates. Error eveniet ipsa quae quaerat rem sed.</p>
                    </v-card-text>
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
                return `Просмотр страницы "${this.$route.params.id}"`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>