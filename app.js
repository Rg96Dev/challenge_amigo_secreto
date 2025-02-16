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
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        const itemLista = document.createElement("li");
        itemLista.textContent = nome;
        lista.appendChild(itemLista);
    });
}



