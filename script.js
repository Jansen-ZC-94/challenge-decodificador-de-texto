function criptografarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    let textoCriptografado = textoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    const mensagemSaida = document.getElementById('mensagemSaida');
    mensagemSaida.value = textoCriptografado;

    if (mensagemSaida.value.length > 0) {
        mensagemSaida.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    }
}

function descriptografarTexto() {
    const textoEntrada = document.getElementById('mensagemSaida').value;
    
    let textoDescriptografado = textoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    const mensagemSaida = document.getElementById('mensagemSaida');
    mensagemSaida.value = textoDescriptografado;

    if (mensagemSaida.value.length > 0) {
        mensagemSaida.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    }
}

function copiarTexto() {
    const textoCopiado = document.getElementById('mensagemSaida');
    textoCopiado.select();
    document.execCommand('copy'); 

}


document.getElementById('mensagemSaida').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    } else {
        this.classList.remove('encriptador__conteudo__mensagem--sem-imagem');
    }
});