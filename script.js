//let visor = document.getElementById('visor');
let menuMedicamento = document.querySelector('.btn-menu medicamento');
let btn4 = parseFloat(document.getElementsByClassName("btn4")[0].value);
let btnCalcular = document.querySelector('.btn-calcular');
let resultado = parseFloat;


function medicamento() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn2 = parseFloat( document.getElementsByClassName("btn2")[0].value);
    let btn3 = parseFloat( document.getElementsByClassName("btn3")[0].value);
    
    resultado = btn1 * btn3 / btn2;
    
 console.log(resultado);
}

btnCalcular.addEventListener('click', medicamento);
