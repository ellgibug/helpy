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
                <h1>Account</h1>
                <p>Организация</p>
                <ul>
                    <li>Лицевой счет - только админ</li>
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
