<script setup lang="ts">
  import SignUp from './components/SignUp.vue';
  import GameBoard from './components/GameBoard.vue';
  import GameOptions from './components/GameOptions.vue';
  import { ref } from 'vue';
  import { PlayersInfo } from './models/PlayersInfo';

let gameInfo = ref<PlayersInfo>({
  playerX: '',
  playerXwins: 0,
  playerO: '',
  playerOwins: 0,
  draws: 0,
  gameOver: false,
  value: undefined
})

function startGame(playerOne: string, playerTwo: string) {
  gameInfo.value.playerX = playerOne;
  gameInfo.value.playerO = playerTwo;
  gameState.value = true;
}

let gameState = ref<boolean>(false);

</script>

<template>
  <GameBoard v-if="gameState" :gameInfo="gameInfo" />
  <SignUp v-else @init-game="startGame" />
</template>

<style scoped></style>