/* Fonction permettant le passage de la valeur des boutons(sauf C, =, % et +/-)
dans l'input de display*/

function displayValue() {
    let buttons = document.querySelectorAll(".btn, .btn-l-r");
buttons.forEach((button) => {
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

function processingInput(operation) {
    let eqButton = document.getElementById("btn-eq");
    let inputDisplay = document.getElementById("input-value");
    let resDisplay = document.getElementById("input-result");
    eqButton.addEventListener("click",() => {
        operation = document.getElementById("input-value").value;
        let num1;
        let num2;
        let operande;
        let result = operation.split(/([+\-x\/])/);
        let resFinal
        num1 = result[0];
        num2 = result[2];
        operande = result[1];
        console.log(result);
        console.log(num1+" "+num2+" "+operande);

        switch(operande) {
            case '+': resFinal = sum(num1,num2);
            break;
            case '-': resFinal = minus(num1,num2);
            break;
            case 'x': resFinal = multiply(num1,num2);
            break;
            case '/': resFinal = divide(num1,num2);
            break;
        }
        inputDisplay.value = inputDisplay.value +"=";
        resDisplay.value = resFinal;

    })
}