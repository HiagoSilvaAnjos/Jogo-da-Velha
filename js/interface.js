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

function runGame(positionArgument) {

    if (handleMove(positionArgument)) {
        setTimeout(() => {
            alert(`O jogo o acabou! o vencedor foi o jogador ${symbols[playerTime]}`);
            location.reload();
        }, 50)

    }

    handleMove(positionArgument);
    updateSquare(positionArgument);

}

// atualizar os quadrados com os simbolos
function updateSquare(position) {

    let boardSquare  = document.getElementById(position.toString());
    let symbol = board[position];
 
    boardSquare.innerHTML = `<div class="${symbol}"></div>`;
  
}