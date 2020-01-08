<template>
    <v-container fluid>
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
                    <v-card-title>
                        Связи в проекте
                        <v-spacer/>
                        <v-btn
                                dark
                                small
                                rounded
                                color="pink accent-2"
                                depressed>
                            Изменить
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <div class="my-3">
                            <v-chip class="mr-3" color="pink accent-2" dark>Родительская страница</v-chip>
                            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 1</v-chip>
                            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 2</v-chip>
                            <v-chip class="mr-3" color="pink accent-2" dark outlined>Дочерняя страница 3</v-chip>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Приоритет выдачи
                    </v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="priority" :mandatory="false">
                            <v-radio color="pink accent-2" label="По умолчанию" value="default"></v-radio>
                            <v-radio color="pink accent-2" label="Высокий приоритет" value="hight"></v-radio>
                            <v-radio color="pink accent-2" label="Низкий приоритет" value="low"></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="0" outlined>
                    <v-card-title>
                        Последние изменения
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
                                        outlined
                                        x-small
                                        rounded
                                        color="pink darken-1"
                                        depressed>
                                    Перейти
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters}        from "vuex"
    import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';

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
                editor: DocumentEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                },
                priority: 'default',
                search2: '',
                headers2: [
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Дата', value: 'date' },
                    { text: 'Страница', value: 'page' },
                    { text: 'Действие', value: 'action' },

                ],
                desserts2: [
                    {
                        name: 'Иванов И.И.',
                        date: "23.12.2019",
                        page: "Страница 1",
                    },
                    {
                        name: 'Петров П.П.',
                        date: "12.12.2019",
                        page: "Страница 2",
                    },
                    {
                        name: 'Сидоров С.С.',
                        date: "17.12.2019",
                        page: "Страница 3",
                    }
                ]
            }
        },

        computed:{
            ...mapGetters("menuStates", ["getData"]),
            title(){
                return `Редактирование страницы ${this.$route.params.id}`;
            }
        },

        methods:{
            ...mapActions("menuStates", ["setActiveMenuState"]),
            onReady (editor) {
                this.$refs.editorWrapper.prepend(editor.ui.view.toolbar.element)
            }
        },

        mounted() {

        }

    };
</script>


<style lang="scss" scoped>
    .document-editor {
        margin-top: 20px;
        border: 1px solid var(--ck-color-base-border);
        border-radius: var(--ck-border-radius);

        /* Set vertical boundaries for the document editor. */
        max-height: 700px;

        /* This element is a flex container for easier rendering. */
        display: flex;
        flex-flow: column nowrap;
    }

    .document-editor__toolbar {
        /* Make sure the toolbar container is always above the editable. */
        z-index: 1;

        /* Create the illusion of the toolbar floating over the editable. */
        box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );

        /* Use the CKEditor CSS variables to keep the UI consistent. */
        border-bottom: 1px solid var(--ck-color-toolbar-border);
    }

    /* Adjust the look of the toolbar inside the container. */
    .document-editor__toolbar .ck-toolbar {
        border: 0;
        border-radius: 0;
    }

    /* Make the editable container look like the inside of a native word processor application. */
    .document-editor__editable-container {
        padding: calc( 2 * var(--ck-spacing-large) );
        background: var(--ck-color-base-foreground);

        /* Make it possible to scroll the "page" of the edited content. */
        overflow-y: scroll;
    }

    .document-editor__editable-container .ck-editor__editable {
        /* Set the dimensions of the "page". */
        width: 15.8cm;
        min-height: 21cm;

        /* Keep the "page" off the boundaries of the container. */
        padding: 1cm 2cm 2cm;

        border: 1px hsl( 0,0%,82.7% ) solid;
        border-radius: var(--ck-border-radius);
        background: white;

        /* The "page" should cast a slight shadow (3D illusion). */
        box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );

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