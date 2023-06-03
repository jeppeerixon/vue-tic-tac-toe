<script setup lang="ts">
  import SignUp from './components/SignUp.vue';
  import GameBoard from './components/GameBoard.vue';
  import GameOptions from './components/GameOptions.vue';
  import { onMounted, ref } from 'vue';
  import { PlayersInfo } from './models/PlayersInfo';

  let gameInfo = ref<PlayersInfo>({
    playerX: '',
    playerXwins: 0,
    playerO: '',
    playerOwins: 0,
    draws: 0,
    gameStarted: false,
    gameOver: false,
    value: undefined
  })

  function startGame(playerOne: string, playerTwo: string) {
    gameInfo.value.playerX = playerOne;
    gameInfo.value.playerO = playerTwo;
    gameInfo.value.gameStarted = true;
    setLocalStorageContent()
  }

  function resetGame() {
    gameInfo.value = {
      playerX: '',
      playerXwins: 0,
      playerO: '',
      playerOwins: 0,
      draws: 0,
      gameStarted: false,
      gameOver: false,
      value: undefined
    }
  }

  onMounted(() => {
      loadLocalStorageContent()
  })
    
  function setLocalStorageContent() {
    localStorage.setItem('ticTacToe', JSON.stringify(gameInfo.value))
  }
  
  function loadLocalStorageContent() {
    let gameInfoString = localStorage.getItem('ticTacToe')
    if (gameInfoString != null) {
      gameInfo.value = JSON.parse(gameInfoString)
    }
  }

</script>

<template>
  <GameBoard v-if="gameInfo.gameStarted" :gameInfo="gameInfo" @reset-all="resetGame" />
  <SignUp v-else @init-game="startGame" />
</template>

<style scoped></style>