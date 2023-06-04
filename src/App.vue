<script setup lang="ts">
  import SignUp from './components/SignUp.vue';
  import GameBoard from './components/GameBoard.vue';
  import ScoreBoard from './components/ScoreBoard.vue';
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
    localStorage.setItem('playerData', JSON.stringify(gameInfo.value))
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
    localStorage.removeItem('playerData');
    localStorage.removeItem('gameData');
  }

  onMounted(() => {
      loadLocalPlayerData()
  })
  
  function loadLocalPlayerData() {
    let gameInfoString = localStorage.getItem('playerData')
    if (gameInfoString != null) {
      gameInfo.value = JSON.parse(gameInfoString)
    }
  }

</script>

<template>
  <GameBoard v-if="gameInfo.gameStarted" :gameInfo="gameInfo" @reset-all="resetGame" />
  <SignUp v-else @init-game="startGame" />
  <ScoreBoard v-if="gameInfo.gameStarted" :gameInfo="gameInfo" />
</template>

<style scoped></style>