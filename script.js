//let visor = document.getElementById('visor');
let menuMedicamento = document.querySelector('.btn-menu medicamento');
let btnCalcular = document.querySelector('.btn-calcular');
let resultado = parseFloat;


}

function medicamento() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn2 = parseFloat( document.getElementsByClassName("btn2")[0].value);
    let btn3 = parseFloat( document.getElementsByClassName("btn3")[0].value);
    
        resultado = (btn1 * btn3) / btn2;
    

}
        btnCalcular.addEventListener('click', medicamento);


function gotejamentoGotas() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    const tres = 3;
    let btn4 = parseFloat( document.getElementsByClassName("btn4")[0].value);
    
        resultado = btn1 / (btn4 * tres);
    
}
            btnCalcular.addEventListener('click', gotejamentoGotas);


function gotejamentoMicroGotas() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn4 = parseFloat( document.getElementsByClassName("btn4")[0].value);
            
        resultado = btn1 / btn4;
            
}
            btnCalcular.addEventListener('click', gotejamentoMicroGotas);

function insulinoterapia() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn2 = parseFloat( document.getElementsByClassName("btn2")[0].value);
    let btn3 = parseFloat( document.getElementsByClassName("btn3")[0].value);
                    
        resultado = (btn1 * btn3) / btn2;
                    
                
}
            btnCalcular.addEventListener('click', insulinoterapia             i);

