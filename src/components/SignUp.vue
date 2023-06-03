<script setup lang="ts">
import { ref } from 'vue';

let playerOne = ref('')
let playerTwo = ref('')

const emits = defineEmits(["initGame"])

function handleStartClick() {
    console.log('start clicked')
}

</script>

<template>
    <h1>Tic Tac Toe</h1>
    <form @submit.prevent="handleStartClick">
        <label> Player X:
            <input type="text" placeholder="Player X" v-model="playerOne">
        </label>
        <label> Player O:
            <input type="text" placeholder="Player O" v-model="playerTwo">
        </label>
        <button @click="$emit('initGame', playerOne, playerTwo)">Start</button>
    </form>
</template>

<style scoped></style>