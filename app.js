var beberBotao = document.getElementById('beber');
var zerarBotao = document.getElementById('zerar');

var meta = 2500;
var totalBebido = 0;
var porcentagemTotal;

function beberAgua(valor) {
    if (porcentagemTotal == 100) {
        console.log('Meta atingida!');
    } else {
        totalBebido += valor;
        porcentagemTotal = (totalBebido / meta) * 100;

        document.getElementById('porcentagem-atingida').style.height = porcentagemTotal + '%';
        document.getElementById('porcentagem-atingida').innerText = porcentagemTotal + '%';
        document.querySelector('title').innerText = 'Bebeu ' + porcentagemTotal + '%';
    }
}

function zerar() {
    totalBebido = 0;
    porcentagemTotal = 0;
    document.getElementById('porcentagem-atingida').style.height = porcentagemTotal + '%';
    document.getElementById('porcentagem-atingida').innerText = "";
    document.querySelector('title').innerText = 'Beber Água';
}