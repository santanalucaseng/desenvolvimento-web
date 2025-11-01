function exibir() {
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar() {
    document.getElementById('texto').innerHTML = '';
}

// Alterna a cor entre preto e azul
function mudaCor() {
    let elemento = document.getElementById('cor');
    let corAtual = elemento.style.color;

    if (corAtual === 'black' || corAtual === '') {
        elemento.style.color = 'blue';
    } else {
        elemento.style.color = 'black';
    }
}

// Liga e desliga a lâmpada
function ligar() {
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';
}

function desligar() {
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}