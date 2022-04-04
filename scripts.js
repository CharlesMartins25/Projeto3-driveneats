function primeiroprato() {
document.getElementById("Comida").style.borderColor = "green"
document.getElementById("iconcomida").style.display = "flex"
document.getElementById("Comida2").style.borderColor = "white"
document.getElementById("iconcomida2").style.display = "none"
document.getElementById("Comida3").style.borderColor = "white"
document.getElementById("iconcomida3").style.display = "none"
prato = 1;
    valorPrato = 14.90;
    tipoPrato = "Comida ";
    habilitarBotao();
}
function segundoprato(){
    document.getElementById("Comida2").style.borderColor = "green"
    document.getElementById("iconcomida2").style.display = "flex"
document.getElementById("Comida").style.borderColor = "white"
document.getElementById("iconcomida").style.display = "none"
document.getElementById("Comida3").style.borderColor = "white"
document.getElementById("iconcomida3").style.display = "none"
prato = 1;
valorPrato = 14.90;
tipoPrato = "Comida2";
habilitarBotao();
}
function terceiroprato(){
    document.getElementById("Comida3").style.borderColor = "green"
    document.getElementById("iconcomida3").style.display = "flex"
document.getElementById("Comida2").style.borderColor = "white"
document.getElementById("iconcomida2").style.display = "none"
document.getElementById("Comida").style.borderColor = "white"
document.getElementById("iconcomida").style.display = "none"
prato = 1;
valorPrato = 14.90;
tipoPrato = "Comida3";
habilitarBotao();
}
function primeirabebida(){
    document.getElementById("bebida1").style.borderColor = "green"
    document.getElementById("iconbebida1").style.display = "flex"
document.getElementById("bebida2").style.borderColor = "white"
document.getElementById("iconbebida2").style.display = "none"
document.getElementById("bebida3").style.borderColor = "white"
document.getElementById("iconbebida3").style.display = "noe"
bebida = 1;
valorBebida = 4.90;
tipoBebida = "bebida1";
habilitarBotao();
}
function segundabebida(){
    document.getElementById("bebida2").style.borderColor = "green"
    document.getElementById("iconbebida2").style.display = "flex"
document.getElementById("bebida1").style.borderColor = "white"
document.getElementById("iconbebida1").style.display = "none"
document.getElementById("bebida3").style.borderColor = "white"
document.getElementById("iconbebida3").style.display = "none"
bebida = 1;
valorBebida = 4.90;
tipoBebida = "bebida2";
habilitarBotao();
}
function terceirabebida(){
    document.getElementById("bebida3").style.borderColor = "green"
    document.getElementById("iconbebida3").style.display = "flex"
document.getElementById("bebida2").style.borderColor = "white"
document.getElementById("iconbebida2").style.display = "none"
document.getElementById("bebida1").style.borderColor = "white"
document.getElementById("iconbebida1").style.display = "none"
bebida = 1;
valorBebida = 4.90;
tipoBebida = "bebida3";
habilitarBotao();
}
function primeirasobremesa(){
    document.getElementById("sobremesa").style.borderColor = "green"
    document.getElementById("iconsobremesa").style.display = "flex"
document.getElementById("sobremesa2").style.borderColor = "white"
document.getElementById("iconsobremesa2").style.display = "none"
document.getElementById("sobremesa3").style.borderColor = "white"
document.getElementById("iconsobremesa3").style.display = "none"
sobremesa = 1;
valorSobremesa = 7.90;
tipoSobremesa = "sobremesa"
habilitarBotao();
}
function segundasobremesa(){
    document.getElementById("sobremesa2").style.borderColor = "green"
    document.getElementById("iconsobremesa2").style.display = "flex"
document.getElementById("sobremesa").style.borderColor = "white"
document.getElementById("iconsobremesa").style.display = "none"
document.getElementById("sobremesa3").style.borderColor = "white"
document.getElementById("iconsobremesa3").style.display = "none"
sobremesa = 1;
valorSobremesa =  7.90;
tipoSobremesa = "sobremesa2"
habilitarBotao();
}
function terceirasobremesa(){
    document.getElementById("sobremesa3").style.borderColor = "green"
    document.getElementById("iconsobremesa3").style.display = "flex"
document.getElementById("sobremesa2").style.borderColor = "white"
document.getElementById("iconsobremesa2").style.display = "none"
document.getElementById("sobremesa").style.borderColor = "white"
document.getElementById("iconsobremesa").style.display = "none"
sobremesa = 1;
    valorSobremesa =  7.90;
    tipoSobremesa = "sobremesa3"
    habilitarBotao();
  
}

let prato = 0;
let bebida = 0;
let sobremesa = 0;

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

let tipoPrato = 0;
let tipoBebida = 0;
let tipoSobremesa = 0; 

function habilitarBotao (){
    if ((prato === 1) && (bebida ===1) && (sobremesa ===1)){
        document.getElementById("sempedido").style.display = "none";
        document.getElementById("pedidopronto").style.display = "flex";
        }
    }
    function encaminhar(){
        let somaPedido = valorPrato + valorBebida + valorSobremesa;
        let somaAjustada = somaPedido.toFixed(2)
        nome = prompt('Qual seu nome?');
        endereco = prompt('Qual seu endereço?');
        textoMensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${tipoPrato}\n-Bebida: ${tipoBebida}\n-Sobremesa:  ${tipoSobremesa}\nTotal: R$ ${somaAjustada}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5514991665553?text=${encodeURIComponent(textoMensagem)}`);
        }