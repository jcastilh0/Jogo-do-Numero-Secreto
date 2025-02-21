let listaNumSorteados = [];
let numLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');    
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p','O número secreto é menor!');
            } else {
                exibirTextoNaTela('p','O número secreto é maior!');
            }
            tentativas++;
            limparCampo();
        }

        
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementLista = listaNumSorteados.length;

    if (qtdElementLista == numLimite){
        listaNumSorteados = [];
    }

    if(listaNumSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumSorteados.push(numeroEscolhido);
        console.log(listaNumSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reininciar').setAttribute('disabled',true);
}











