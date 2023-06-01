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
  gameStart: false,
  value: undefined
})

function startGame(playerOne: string, playerTwo: string) {
  gameInfo.value.playerX = playerOne;
  gameInfo.value.playerO = playerTwo;
  console.log(gameInfo.value.playerX)
  gameState.value = true;
}

let gameState = ref<boolean>(false);

</script>

<template>
  <SignUp @init-game="startGame" />
  <GameBoard v-if="gameState" :gameInfo="gameInfo" />
  <GameOptions />
</template>

<style scoped></style>