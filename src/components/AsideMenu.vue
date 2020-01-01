<template>
    <v-list>
        <v-list-item>
            <v-text-field
                    label="Поиск"
                    outlined
                    hide-details
                    dense
                    class="my-3"
            ></v-text-field>
        </v-list-item>
        <v-list-item  v-for="(item) in getData.items" :key="item.id">
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle v-if="item.data">
                    <span v-if="item.data.pages">{{item.data.pages.length}} страниц(ы) | </span>
                    <span>{{ item.data.created_at }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="item.data">
                    <span v-for="button in item.data.buttons" :key="item.id+button.route" class="mr-1">
                        <router-link :to="{ name: button.route, params: { id: item.id }}">
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

<style scoped>

</style>