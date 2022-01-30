var visor = document.getElementById("visor");
var resultado = parseFloat;


function medicamento() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn2 = parseFloat( document.getElementsByClassName("btn2")[0].value);
    let btn3 = parseFloat( document.getElementsByClassName("btn3")[0].value);
    
        resultado = ((btn1 * btn3) / btn2).toFixed(1);
    
        visor.innerHTML = resultado + " " + "ml";

}

function gotejamentoGotas() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    const tres = 3;
    let btn4 = parseFloat( document.getElementsByClassName("btn4")[0].value);
    
        resultado = (btn1 / (btn4 * tres)).toFixed(1);

        visor.innerHTML = resultado + " " + "gotas";
    
}

function gotejamentoMicroGotas() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn4 = parseFloat( document.getElementsByClassName("btn4")[0].value);
            
        resultado = (btn1 / btn4).toFixed(1);

        visor.innerHTML = resultado + " " + "microgotas";

            
}

function insulinoterapia() {
    let btn1 = parseFloat( document.getElementsByClassName("btn1")[0].value);
    let btn2 = parseFloat( document.getElementsByClassName("btn2")[0].value);
    let btn3 = parseFloat( document.getElementsByClassName("btn3")[0].value);
                    
        resultado = ((btn1 * btn3) / btn2).toFixed(1);

        visor.innerHTML = resultado + " " + "Ul";

                                   
}

