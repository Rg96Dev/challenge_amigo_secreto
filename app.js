let amigos = [];
let lista = document.getElementById("listaAmigos");

//função que pega os nomes e adiciona ao array 
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Insira um nome válido");

    } else {
        amigos.push(nome);
        input.value = "";

        atualizarLista();
    }
}

//função que cria lista do sorteio
function atualizarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];

        lista.appendChild(itemLista);
    }
}

//função para limpar lista
function limparLista() {
    let listaHtml = document.querySelector("ul");
    listaHtml.innerHTML = "";
    amigos.length = 0;
    atualizarLista();

}

//função que faz o sorteio acontecer
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Número de amigos inválido! Insira 2 ou mais nomes para que sorteio seja excutado")
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let parabensMensagem = document.querySelector('h2');
        parabensMensagem.textContent = (`${amigoSorteado} é o seu amigo(a) secreto`);
        limparLista();
    }

}



