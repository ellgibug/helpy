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
                <h1>Register</h1>
                <router-link :to="{name: 'login'}">
                    Login
                </router-link>
                <br>
                <v-btn class="mt-10" color="primary" :to="{name: 'dashboard'}">Личный кабинет</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
