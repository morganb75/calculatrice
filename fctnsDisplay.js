/* Fonction permettant le passage de la valeur des boutons(sauf C, =, % et +/-)
dans l'input de display*/

function displayValue() {
    let buttons = document.querySelectorAll(".btn, .btn-l-r");
buttons.forEach(function(button) {
        button.addEventListener("click",() => {
                let value = button.textContent;
                // console.log(value);
                let initValue = document.getElementById("input-value").value;
                if (initValue===null) {
                    document.getElementById("input-value").value = value;
                } else {
                    document.getElementById("input-value").value = initValue + value;
                }
            })
})}

/* Fonction assurant le traitement de ce qu'on récupère en input display
 lorsqu'on presse la touche "egal" */

function processingInput(operation){
    let eqButton = document.getElementById("btn-eq");
    eqButton.addEventListener("click",() => {
        operation = document.getElementById("input-value").value;
        console.log(operation);
    })
}