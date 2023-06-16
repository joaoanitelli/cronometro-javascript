function ativarContagem() {
    tempo = setInterval(function(){
        var contador = document.getElementById('cronometro').innerHTML;
        var soma = parseInt(contador)+1;
        document.getElementById('cronometro').innerHTML = soma;
    },1000)
}

function pausarContagem(){
    clearInterval(tempo);
}

function cancelarContagem(){
    clearInterval(tempo);
    document.getElementById('cronometro').innerHTML = 0;
}