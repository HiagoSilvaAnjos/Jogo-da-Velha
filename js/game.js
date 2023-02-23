const board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 1
let symbols = ["O", "X"];
let gameOver = false;
let isWinStades = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];


// mudar jogador
function handleMove(squarePosition) {

    const checkedMove = board[squarePosition] == '';

    if (gameOver) {
        return;
    }

    if (checkedMove) {

        board[squarePosition] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = playerTime == 0 ? 1 : 0
        }

    }

    return gameOver;
}

function isWin() {

    for (let i = 0; i < isWinStades.length; i++) {
        let sequence = isWinStades[i];

        let positionSquareOne = sequence[0];
        let positionSquareTwo = sequence[1];
        let positionSquareThree = sequence[2];

        if (board[positionSquareOne] == board[positionSquareTwo]
            && board[positionSquareOne] == board[positionSquareThree]
            && board[positionSquareOne] != '') {
            return true;
        }

    }

    return false;

}