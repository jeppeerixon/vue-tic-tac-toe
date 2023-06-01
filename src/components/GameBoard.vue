<script setup lang="ts">
import { ref } from 'vue';
import { PlayersInfo } from '../models/PlayersInfo';

let grid = ref<Array<string>>(['', '', '', '', '', '', '', '', '']);

const possibleWins: [] = [];

interface IPlayersInfoProps {
    gameInfo: PlayersInfo;
}

const props = defineProps<IPlayersInfoProps>();

let playerXTurn = ref<boolean>(true);

function checkIfWin() {

}

function checkIfTie() {

}

function handlePlayerClick(e: any) {
    let clickedCell: number = e.target.attributes.value.value;
    if (playerXTurn.value) {
        grid.value[clickedCell] = 'X';
        playerXTurn.value = false;
    }
    else {
        grid.value[clickedCell] = 'O';
        playerXTurn.value = true;
    }
    checkIfWin();
    checkIfTie();
}

</script>

<template>
    <h1>GameBoard</h1>
    <p v-if="playerXTurn">
        Varsegod {{ props.gameInfo.playerX }}, X tur att köra:
    </p>
    <p v-else>
        Varsegod {{ props.gameInfo.playerO }}, O tur att köra:
    </p>
    <div class="gridContainer">
        <div v-for="(cell, index) in grid" :value="index" class="gridCell" @click="handlePlayerClick">
            {{ cell }}
        </div>
    </div>
</template>

<style scoped>
.gridContainer {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
}

.gridCell {
    padding: 30px 10px;
    border-radius: 3px;
    background-color: whitesmoke;
    border: solid 2px black;

}
</style>