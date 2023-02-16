const board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 1
let symbols = ["o", "x"];

// mudar jogador
function handleMove(squarePosition) {

    const checkedMove = board[squarePosition] == '';

    if (checkedMove) {
        
        board[squarePosition] = symbols[playerTime];

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0;
        }

    }
}