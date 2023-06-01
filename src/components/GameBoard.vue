<script setup lang="ts">
import { ref } from 'vue';
import { PlayersInfo } from '../models/PlayersInfo';
import ScoreBoard from './ScoreBoard.vue';

let grid = ref<Array<string>>(['', '', '', '', '', '', '', '', '']);

const possibleWins: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

interface IPlayersInfoProps {
    gameInfo: PlayersInfo;
}

const props = defineProps<IPlayersInfoProps>();

let playerXTurn = ref<boolean>(true);

function checkIfWin(player: string) {
    for (let i = 0; i <= 7; i++) {
        const threeInARow = possibleWins[i];
        if (grid.value[threeInARow[0]] === '' || grid.value[threeInARow[1]] === '' || grid.value[threeInARow[2]] === '') {
            continue;
        }
        if (grid.value[threeInARow[0]] === grid.value[threeInARow[1]] && grid.value[threeInARow[1]] === grid.value[threeInARow[2]]) {
            console.log('Player' + player + 'won!!!')
            playerXTurn ? props.gameInfo.playerXwins++ : props.gameInfo.playerOwins++
            break
        }
    }
}

function checkIfTie() {
    //måste finnas ett kortare sätt för denna...
    let sum: number = 0;
    grid.value.forEach(i => {
        if (i === 'X' || i === 'O' ) {
            sum++
        }
        if (sum === 9 ) {
            console.log('det blev lika: ggwp')
        }
    })

}

function handlePlayerClick(e: any) {
    let clickedCell: number = e.target.attributes.value.value;
    if (playerXTurn.value) {
        grid.value[clickedCell] = 'X';
        checkIfWin(props.gameInfo.playerX);
    } else {
        grid.value[clickedCell] = 'O';
        checkIfWin(props.gameInfo.playerO);
    }
    playerXTurn.value = !playerXTurn.value;
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
    <ScoreBoard :gameInfo="props.gameInfo" />
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