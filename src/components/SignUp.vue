<script setup lang="ts">
import { ref } from 'vue';

let playerOne = ref('')
let playerTwo = ref('')

function handleStartClick() {
    console.log('start clicked')
}

</script>

<template>
    <h1>Sign Up</h1>
    <form @submit.prevent="handleStartClick">
        <label> Player 1/X:
            <input type="text" placeholder="Player One" v-model="playerOne">
        </label>
        <label> Player 2/O:
            <input type="text" placeholder="Player One" v-model="playerTwo">
        </label>
        <button @click="$emit('initGame', playerOne, playerTwo)">Start</button>
    </form>
</template>

<style scoped></style>