const elementsBoard = document.querySelectorAll(".home-stage");
const stageContainer = document.querySelector(".stage-container");

for (let i of elementsBoard) {
    i.addEventListener("click", function(e) {
        let stageElement = e.target.classList[1];
        console.log(`Você clicou na ${stageElement}`);
    })
}
