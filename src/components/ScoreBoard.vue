<script setup lang="ts">
    import { PlayersInfo } from '../models/PlayersInfo';

    interface IPlayersInfoProps {
        gameInfo: PlayersInfo;
    }

    const props = defineProps<IPlayersInfoProps>();

</script>

<template>
    <h2>Score:</h2>
    <h5>
        {{ props.gameInfo.playerX }}: {{ props.gameInfo.playerXwins }} wins
    </h5>
    <h5>
        {{ props.gameInfo.playerO }}: {{ props.gameInfo.playerOwins }} wins
    </h5>
    <h5>
        Draws: {{ props.gameInfo.draws }} 
    </h5>
  
</template>

<style scoped>

</style>