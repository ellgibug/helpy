<template>
    <v-container>
        <h1>{{title}}</h1>
        <v-row>
            <v-col ref="editorWrapper">
                <div class="document-editor">
                    <div class="document-editor__toolbar"></div>
                    <div class="document-editor__editable-container">
                        <div class="document-editor__editable">
                            <ckeditor
                                    :editor="editor"
                                    :config="editorConfig"
                                    v-model="editorData"
                                    @ready="onReady"
                            ></ckeditor>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>Видимость страницы</v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="version" :mandatory="false">
                            <v-radio color="pink accent-2" label="Публичная версия - видна всем в интернете" value="public"></v-radio>
                            <v-radio color="pink accent-2" label="Приватная версия - видна только сотрудникам организации" value="private"></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Права доступа сотрудников
                        <v-spacer/>
                        <v-text-field
                                color="pink darken-2"
                                v-model="search"
                                label="Поиск"
                                outlined
                                rounded
                                dense
                                single-line
                                hide-details
                                style="max-width: 300px"
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text class="px-0">
                        <v-data-table
                                :items-per-page="5"
                                :headers="headers"
                                :items="desserts"
                                :search="search"
                                :footer-props="{
                                  disableItemsPerPage: true
                                }"
                        >
                            <template v-slot:item.action="{ item }">
                                <v-btn
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Изменить
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Показывать сразу на страницах
                        <v-btn
                                class="ml-3"
                                small
                                dark
                                rounded
                                color="pink accent-2"
                                depressed>
                            <v-icon left>mdi-plus</v-icon>
                            Добавить
                        </v-btn>
                        <v-spacer/>
                        <v-text-field
                                color="pink darken-2"
                                v-model="search2"
                                label="Поиск"
                                outlined
                                rounded
                                dense
                                single-line
                                hide-details
                                style="max-width: 300px"
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text class="px-0">
                        <v-data-table
                                :items-per-page="5"
                                :headers="headers2"
                                :items="desserts2"
                                :search="search2"
                                :footer-props="{
                                  disableItemsPerPage: true
                                }"
                        >
                            <template v-slot:item.action="{ item }">
                                <v-btn
                                        class="mr-3"
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Изменить
                                </v-btn>
                                <v-btn
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Удалить
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center py-7">
                <v-btn
                        class="px-12"
                        dark
                        large
                        rounded
                        color="pink accent-2"
                        depressed>
                    Создать
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters}        from "vuex"
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';


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

        components:{

        },

        data(){
            return{
                version: 'public',
                search: '',
                headers: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Роль', value: 'role' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts: [
                    {
                        name: 'Иванов И.И.',
                        role: "Сотрудник",
                    },
                    {
                        name: 'Петров П.П.',
                        role: "Сотрудник",
                    },
                    {
                        name: 'Сидоров С.С.',
                        role: "Сотрудник",
                    }
                ],
                search2: '',
                headers2: [
                    {
                        text: 'Страница',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                        width: '70%'
                    },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
                    {
                        name: 'http://localhost:8080/',
                    },
                    {
                        name: 'http://localhost:8081/',
                    },
                    {
                        name: 'http://localhost:8082/',
                    }
                ],
                editor: DocumentEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                },

            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData", "getProjectById"]),
            title(){
                return `Создать страницу в проекте ${this.$route.params.id}`;
            },

        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState", "setActiveProject"]),
            onReady (editor) {
                this.$refs.editorWrapper.prepend(editor.ui.view.toolbar.element)
            }

        }

    };
</script>

<style lang="scss" scoped>
    .document-editor {
        margin-top: 20px;
        border: 1px solid rgba(0,0,0,0.16);
        border-radius: 2px;
        overflow: hidden;

        /* Set vertical boundaries for the document editor. */
        max-height: 500px;

        /* This element is a flex container for easier rendering. */
        display: flex;
        flex-flow: column nowrap;
    }

    .document-editor__toolbar {
        /* Make sure the toolbar container is always above the editable. */
        z-index: 1;

        /* Create the illusion of the toolbar floating over the editable. */
        box-shadow: none;

        /* Use the CKEditor CSS variables to keep the UI consistent. */
        border-bottom: 0;
    }

    /* Adjust the look of the toolbar inside the container. */
    .document-editor__toolbar .ck-toolbar {
        border: 0;
        border-radius: 0;
    }

    /* Make the editable container look like the inside of a native word processor application. */
    .document-editor__editable-container {
        padding: calc( 2 * var(--ck-spacing-large) );
        background: #e9edf5;

        /* Make it possible to scroll the "page" of the edited content. */
        overflow-y: scroll;
    }

    .document-editor__editable-container .ck-editor__editable {
        /* Set the dimensions of the "page". */
        width: 25.8cm;
        min-height: 21cm;

        /* Keep the "page" off the boundaries of the container. */
        padding: 1cm 2cm 2cm;

        border: 1px hsl( 0,0%,82.7% ) solid;
        border-radius: var(--ck-border-radius);
        background: white;

        /* The "page" should cast a slight shadow (3D illusion). */
        box-shadow: 0 0 15px hsla( 0,0%,0%,.1 );

        /* Center the "page". */
        margin: 0 auto;
    }

    /* Set the default font for the "page" of the content. */
    .document-editor .ck-content,
    .document-editor .ck-heading-dropdown .ck-list .ck-button__label {
        font: 16px/1.6 "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    /* Adjust the headings dropdown to host some larger heading styles. */
    .document-editor .ck-heading-dropdown .ck-list .ck-button__label {
        line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );
        min-width: 6em;
    }

    /* Scale down all heading previews because they are way too big to be presented in the UI.
    Preserve the relative scale, though. */
    .document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label {
        transform: scale(0.8);
        transform-origin: left;
    }

    /* Set the styles for "Heading 1". */
    .document-editor .ck-content h2,
    .document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {
        font-size: 2.18em;
        font-weight: normal;
    }

    .document-editor .ck-content h2 {
        line-height: 1.37em;
        padding-top: .342em;
        margin-bottom: .142em;
    }

    /* Set the styles for "Heading 2". */
    .document-editor .ck-content h3,
    .document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {
        font-size: 1.75em;
        font-weight: normal;
        color: hsl( 203, 100%, 50% );
    }

    .document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label {
        color: var(--ck-color-list-button-on-text);
    }

    /* Set the styles for "Heading 2". */
    .document-editor .ck-content h3 {
        line-height: 1.86em;
        padding-top: .171em;
        margin-bottom: .357em;
    }

    /* Set the styles for "Heading 3". */
    .document-editor .ck-content h4,
    .document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {
        font-size: 1.31em;
        font-weight: bold;
    }

    .document-editor .ck-content h4 {
        line-height: 1.24em;
        padding-top: .286em;
        margin-bottom: .952em;
    }

    /* Set the styles for "Paragraph". */
    .document-editor .ck-content p {
        font-size: 1em;
        line-height: 1.63em;
        padding-top: .5em;
        margin-bottom: 1.13em;
    }

    /* Make the block quoted text serif with some additional spacing. */
    .document-editor .ck-content blockquote {
        font-family: Georgia, serif;
        margin-left: calc( 2 * var(--ck-spacing-large) );
        margin-right: calc( 2 * var(--ck-spacing-large) );
    }

</style>