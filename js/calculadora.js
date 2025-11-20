document.getElementById("calcular").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    if(isNaN(num1)||isNaN(num2)){
        resultado.textContet = "Ingrese número Válidos";
        return;
    }
function calcular(a,b,op){
    switch (op) {
        case "suma":
            return a+b;
            break;
        case "resta":
            return a-b;
            break;
        case "multiplicacion":
            return a*b;
            break;
        case "division":
            return a/b;
            break;
        default:
            return "Operación Inválida"
            
    }
}
let resultadoFinal = calcular(num1,num2,operacion);
resultado.textContet="El resultado es: "+resultadoFinal;
})