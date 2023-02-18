document.addEventListener('DOMContentLoaded', () => {
    let boardSquare = document.documentElement.querySelectorAll('.home-stage');

    boardSquare.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

// checar o quadrado clicado
function handleClick(event) {

    const squareClicked = event.target;
    let squarePosition = squareClicked.id;

    runGame(squarePosition);
}

function runGame(poaitionArgument) {

    if (handleMove(poaitionArgument)) {
        alert('O jogo o acabou!')
    }

    handleMove(poaitionArgument);
    updateSquares();

}

// checar e atualizar os quadrados com os simbolos
function updateSquares() {

    let boardSquare = document.documentElement.querySelectorAll('.home-stage');

    boardSquare.forEach(function (square) {

        let elementDivPosition = square.id;
        let symbol = board[elementDivPosition];

        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }

    })

}