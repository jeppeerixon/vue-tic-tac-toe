export class PlayersInfo {
    value: any;
    constructor(
        public playerX: string,
        public playerXwins: number,
        public playerO: string,
        public playerOwins: number,
        public draws: number,
        public gameStarted: boolean,
        public gameOver: boolean) { }
}