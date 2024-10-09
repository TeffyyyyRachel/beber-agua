var beberBotao = document.getElementById('beber');
var zerarBotao = document.getElementById('zerar');
var marcacoesVazio = document.getElementById('vazio');
var divMarcar = document.getElementById('marcacoes');

var meta = 2500;
var totalBebido = 0;
var porcentagemTotal;
var vazio = true;
var contarMarcacoes = 0;

function marcar() {
    if (contarMarcacoes == 10) {
        return;
    }

    if (vazio) {
        marcacoesVazio.style.display = 'none';
        vazio = false;
    }
    var horaAtual = new Date().toLocaleTimeString([],{ hour:'2-digit', minute:'2-digit' });
    contarMarcacoes++;
    divMarcar.innerHTML += `<p>${(contarMarcacoes < 10? '0' + contarMarcacoes : contarMarcacoes)} - ${horaAtual}</p>`;
}

function beberAgua(valor) {
    if (porcentagemTotal == 100) {
        document.getElementById('porcentagem-atingida').innerText = 'Meta atingida!';
    } else {
        totalBebido += valor;
        porcentagemTotal = (totalBebido / meta) * 100;

        document.getElementById('porcentagem-atingida').style.height = porcentagemTotal + '%';
        document.getElementById('porcentagem-atingida').innerText = porcentagemTotal + '%';
        document.querySelector('title').innerText = 'Bebeu ' + porcentagemTotal + '%';
    }
}

function zerar() {
    if (confirm("Deseja zerar o contador?")){
        totalBebido = 0;
        porcentagemTotal = 0;
        document.getElementById('porcentagem-atingida').style.height = porcentagemTotal + '%';
        document.getElementById('porcentagem-atingida').innerText = "";
        document.querySelector('title').innerText = 'Beber Água';
        divMarcar.innerHTML = '<p id="vazio">vazio</p>';
        marcacoesVazio = document.getElementById('vazio');
        contarMarcacoes = 0;
        vazio = true;
    }
}