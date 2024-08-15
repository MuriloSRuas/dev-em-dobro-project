/*//Passo 1
const botoesCarrossel = document.getElementById(".botao")

//Passo 2
botoesCarrossel.forEach((botao , indice) => {
    botao.addEventListener("click", () => {

        //Passo 3
        const botaoSelecionado = document.querySelector(".selecionado");
        const imagem = document.querySelector(".imagem");
        const informacoes = document.querySelectorAll(".informacoes");
        
        //Passo 4
        desativarBotaoSelecionado(botaoSelecionado, botao);

        //Passo 5
        const imagemAtiva = document.querySelector(".ativa")
        imagemAtiva.classList.remove("ativa")

        //Passo 6
        imagem[indice].classList.add("ativa")

        //Passo 7
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        //Passo 8
        informacoes[indice].classList.add("ativa")
    })
});

function desativarBotaoSelecionado(botaoSelecionado, botao) {
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
}
*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();
        

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);
    })
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");
}        