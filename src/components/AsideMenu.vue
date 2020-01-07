<template>
    <v-list>
        <v-list-item v-if="getData.appendSearch">
            <v-text-field
                    single-line
                    color="pink darken-2"
                    label="Поиск"
                    outlined
                    rounded
                    hide-details
                    dense
                    class="my-3"
            ></v-text-field>
        </v-list-item>
        <v-list-item  v-for="(item) in getData.items" :key="item.id" ripple three-line>
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle v-if="item.data && item.data.pages" class="my-2">
                    <span v-if="item.data.pages">{{item.data.pages.length}} страниц(ы) | </span>
                    <span>{{ item.data.created_at }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="item.data">
                    <span v-for="button in item.data.buttons" :key="item.id+button.route" class="mr-1">
                        <router-link :to="{ name: button.route, params: { id: item.id }}" class="link">
                            {{ button.title }}
                        </router-link>
                    </span>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    import {mapGetters}        from "vuex"

    export default {
        name: "AsideMenu",
        props: [
            "data"
        ],

        beforeRouteEnter(to, from, next) {
            Promise.all([
            ]).then(() => {
                next(vm => {
                    vm.getDefault();
                    vm.getData();
                });
            }).catch(next);
        },

        computed:{
            ...mapGetters("menuStates", ["getData", "getDefault"]),
        },
    }
</script>

<style scoped lang="scss">
    .link{
        display: inline-block;
        text-decoration: none;
        margin-bottom: 7px;
        color: #FF4081;
    }
    .link:hover{
        color: #F48FB1;
    }
</style>