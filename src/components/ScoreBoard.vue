<script setup lang="ts">
    import { PlayersInfo } from '../models/PlayersInfo';

    interface IPlayersInfoProps {
        gameInfo: PlayersInfo;
    }

    const props = defineProps<IPlayersInfoProps>();

</script>

<template>
    <h1>Highscore:</h1>
    <h3>
        {{ props.gameInfo.playerX }}: {{ props.gameInfo.playerXwins }} wins
    </h3>
    <h3>
        {{ props.gameInfo.playerO }}: {{ props.gameInfo.playerOwins }} wins
    </h3>
  
</template>

<style scoped>

</style>