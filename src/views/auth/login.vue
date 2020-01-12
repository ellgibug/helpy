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
                <h1 class="display-1 mb-5">Войти в личный кабинет</h1>
                <v-card max-width="400px" class="mx-auto my-3" style="border-radius: 28px" hover>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="E-mail*" required outlined single-line></v-text-field>
                                    <v-text-field label="Пароль*" type="password" required outlined single-line></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn rounded color="light-blue accent-3" depressed :to="{name: 'dashboard'}">Войти</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
                <p>
                    Нет аккаунта?
                    <router-link :to="{name: 'register'}">
                        Зарегистрируйтесь!
                    </router-link>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
