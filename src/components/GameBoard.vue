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
const emits = defineEmits(["resetAll"])

let playerXTurn = ref<boolean>(true);
let lastWinner = ref<string>('');

function checkIfWin(player: string) {
    for (let i = 0; i <= 7; i++) {
        const threeInARow = possibleWins[i];
        if (grid.value[threeInARow[0]] === '' || grid.value[threeInARow[1]] === '' || grid.value[threeInARow[2]] === '') {
            continue;
        }
        if (grid.value[threeInARow[0]] === grid.value[threeInARow[1]] && grid.value[threeInARow[1]] === grid.value[threeInARow[2]]) {
            console.log('Player' + player + 'won!!!')
            endOfGame(player)
            playerXTurn.value ? props.gameInfo.playerXwins++ : props.gameInfo.playerOwins++
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
            endOfGame('draw')
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
    e.target.style.pointerEvents = 'none'
    checkIfTie();
}

function endOfGame(result: string) {
    if (result === 'draw') {
        lastWinner.value = result;
        props.gameInfo.draws++

    } else {
        lastWinner.value = result + ' vann!';
    }
    toggleBoard('none')
    props.gameInfo.gameOver = true;
}

function restartGame() {
    grid.value = ['', '', '', '', '', '', '', '', ''];
    props.gameInfo.gameOver = false;
    toggleBoard('auto')
}

function toggleBoard(value: string) {
    let allGrids = document.querySelectorAll('.gridCell') as NodeListOf<HTMLDivElement>;
    allGrids.forEach(div => {
        div.style.pointerEvents = value;
    })
}

</script>

<template>
    <h1>Tic Tac Toe</h1>
    <h3 v-if="props.gameInfo.gameOver">
        Game Over! {{ lastWinner }}
    </h3>
    <h3 v-else-if="playerXTurn">
        Varsegod {{ props.gameInfo.playerX }}, X tur att köra:
    </h3>
    <h3 v-else>
        Varsegod {{ props.gameInfo.playerO }}, O tur att köra:
    </h3>
    <div class="gridContainer">
        <div v-for="(cell, index) in grid" :value="index" class="gridCell" @click="handlePlayerClick">
            {{ cell }}
        </div>
    </div>
    <br>
    <div class="gameControls">
        <button @click="restartGame">Start New Game</button>
        <button @click="$emit('resetAll')">Change Players</button>
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