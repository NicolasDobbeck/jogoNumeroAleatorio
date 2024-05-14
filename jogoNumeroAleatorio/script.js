let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirNumeroTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

function exibirMenssagemInicial(){
    exibirNumeroTela('h1', 'Jogo do número secreto!');
    exibirNumeroTela('p', 'Escolha um número de 1 a 10')
}

exibirMenssagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirNumeroTela('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let menssagemTentativa = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativas}`;
        exibirNumeroTela('p', menssagemTentativa)
    }else{
        if(chute > numeroSecreto){
            exibirNumeroTela('p', 'O número secreto é menor')
        }else{
            exibirNumeroTela('p', 'O número secreto é maior')
        }
        tentativa++;
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disables', true)
}

