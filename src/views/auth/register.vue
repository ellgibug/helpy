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
                <h1>Создать аккаунт</h1>
                <v-card max-width="600px" class="mx-auto my-3">
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Имя*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="E-mail*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Пароль*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn color="primary" :to="{name: 'dashboard'}">Зарегистрироваться</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
                <p>
                    Уже есть аккаунт?
                    <router-link :to="{name: 'login'}">
                        Войти в личный кабинет!
                    </router-link>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
