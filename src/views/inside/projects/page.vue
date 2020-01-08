<template>
    <v-container fluid>
        <h1>{{title}}</h1>
        <div class="my-3">
            <v-chip class="mr-3" color="pink accent-2" dark>Родительская страница</v-chip>
            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 1</v-chip>
            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 2</v-chip>
            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 3</v-chip>
        </div>
        <v-row>
            <v-col>
                <v-img
                        class="mb-5"
                        src="https://www.vladtime.ru/uploads/posts/2016-12/1482919493_19.jpg"
                ></v-img>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula fringilla nisi, eu facilisis magna blandit vel. Nam convallis dapibus dignissim. Aliquam nec lectus eros. Nullam eget ipsum et velit interdum tristique ac at sapien. Sed non neque ac urna condimentum finibus. Nulla massa justo, accumsan vitae nisi sed, sollicitudin cursus ligula. Duis at risus varius, aliquam erat et, pharetra massa. Aliquam a justo id enim posuere aliquet. Suspendisse potenti. Cras ut fermentum nunc, et efficitur nibh. Integer dignissim lobortis elit, vitae luctus mauris efficitur id. Ut finibus vel quam commodo pretium. In quis urna nec metus vestibulum imperdiet suscipit sit amet felis.</p>

                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu pulvinar sapien. Quisque hendrerit vehicula vestibulum. Vivamus at pretium felis, aliquam suscipit ante. Nullam mauris lectus, imperdiet et magna eget, ultricies dignissim metus. Vestibulum sit amet dignissim risus. Pellentesque elementum at urna sit amet aliquam. Nulla pulvinar accumsan rutrum. Proin aliquam ligula ligula. Quisque ultrices orci eu mauris feugiat convallis. Nunc euismod scelerisque felis, sed auctor justo eleifend vulputate. Nullam euismod magna ut ligula hendrerit elementum. Nullam ornare pellentesque ex at sollicitudin. Nullam porta massa at facilisis mollis.</p>

    <div class="code-block">
    <pre>
    async function f() {

    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    alert(result); // "готово!"
    }

    f();
    </pre>
    </div>


                <p>Pellentesque tristique turpis sed tellus tincidunt, sed molestie mauris imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum odio sapien, laoreet vitae dui et, rhoncus dictum dui. Nullam et lacinia lacus. Integer erat velit, porttitor eget elit ut, aliquam varius tortor. Aliquam porta, ex non viverra hendrerit, enim libero euismod urna, vitae sodales nibh nibh ut nulla. Fusce varius elit dapibus aliquet scelerisque. Sed sagittis in urna sit amet blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eros sapien, pharetra a pulvinar ut, eleifend non ante.</p>

                <h2>Here is H2</h2>
                <p>Sed nulla libero, lacinia quis nulla non, dapibus eleifend lacus. Sed et vehicula tellus, lacinia dignissim leo. Donec iaculis tortor nulla, viverra laoreet erat tempor at. Donec ac lacus sed eros ultrices lobortis. In justo nisl, aliquet vel fermentum eu, commodo sit amet nibh. Morbi sit amet pretium mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <v-row>
                    <v-col cols="6" v-for="(i) in 1" :key="i">
                        <v-img
                                class="mb-5"
                                src="https://www.vladtime.ru/uploads/posts/2016-12/1482919493_19.jpg"
                        ></v-img>
                    </v-col>
                </v-row>


                <p>Sed tincidunt magna ac felis auctor ultricies. Suspendisse potenti. Nulla vitae maximus lacus. Aliquam eros eros, hendrerit quis dolor vel, tincidunt sodales libero. Mauris ullamcorper enim at nunc dignissim, ut sagittis leo ornare. Proin lacus massa, vehicula et quam ac, placerat euismod eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan felis sit amet lorem sodales, nec efficitur enim fringilla. Cras ac leo aliquet, aliquam leo ut, pellentesque risus. Praesent velit metus, pretium quis orci ac, accumsan lacinia tellus. Vivamus ante velit, tempor non viverra sagittis, laoreet sit amet nibh. Donec justo tellus, facilisis id rutrum id, suscipit in lectus. Donec a sem odio. Integer hendrerit, velit quis lobortis maximus, urna urna pretium nisi, in tincidunt sapien odio non leo.
                </p>

                <v-row>
                    <v-col cols="4" v-for="(i) in 3" :key="i">
                        <v-img
                                class="mb-5"
                                src="https://www.vladtime.ru/uploads/posts/2016-12/1482919493_19.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
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
                return `Страница ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
        },

        mounted() {

        }

    };
</script>