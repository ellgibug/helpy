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
                    let activeProjectId = vm.$route.params.id;
                    let activeProject = vm.getProjectById(activeProjectId);
                    let pages = activeProject.data.pages;
                    vm.setActiveProject(pages);
                    vm.setActiveMenuState('pages');
                });
            }).catch(next);
        },

        data(){
            return{

            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData", "getProjectById"]),
            title(){
                return 'Project View ' + this.$route.params.id;
            },

        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState", "setActiveProject"]),

        }

    };
</script>