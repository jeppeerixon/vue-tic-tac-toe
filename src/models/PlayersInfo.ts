export class PlayersInfo {
    value: any;
    constructor(
        public playerX: string,
        public playerXwins: number,
        public playerO: string,
        public playerOwins: number,
        public gameStart: boolean) { }
}