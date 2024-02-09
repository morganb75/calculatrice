/* Fonction permettant le passage de la valeur des boutons(sauf C, =, % et +/-)
dans l'input de display*/
function displayValue() {
    let buttons = document.querySelectorAll(".btn, .btn-l-r");
buttons.forEach(function(button) {
        button.addEventListener("click",
            function() {
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