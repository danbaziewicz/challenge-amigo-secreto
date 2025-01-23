let nomeAmigo = '';
let listaNomeAmigo = [];
let listItem;

function recebeNome(){
    nomeAmigo = document.querySelector('input').value;
    // console.log(nomeAmigo);
}

function adicionarAmigo() {
    recebeNome();
    if (nomeAmigo == '') {
        alert('Ops! Digite o nome de um amigo!')
    } else {
        if (listaNomeAmigo.includes(nomeAmigo)){
            alert(`${nomeAmigo} já foi incluído, tente adicionar algo mais para melhorar a identificação`)
        } else {
            listaNomeAmigo.push(nomeAmigo);
            // console.log(listaNomeAmigo)
            limparCampo();
            exibirListaAmigos();
        }
    }
    limparCampoResultado();
}

function exibirListaAmigos(){
    let listaUl = document.getElementById('listaAmigos');
    let novoAmigo = listaNomeAmigo[listaNomeAmigo.length - 1]; // Pega o último nome adicionado
    let listItem = document.createElement('li');
    listItem.textContent = novoAmigo;
    listaUl.appendChild(listItem);
}

function sortearAmigo() {
    if (listaNomeAmigo.length === 0 || listaNomeAmigo.length === 1) { // Verifica se a lista está vazia
        alert(`Ops! Antes de sortear, adicione dois ou mais nomes dos seus amigos!`);
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaNomeAmigo.length); // Gera um índice aleatório
        let amigoSorteado = listaNomeAmigo[indiceAleatorio]; // Pega o nome do amigo no índice sorteado
        
        // Seleciona o elemento <ul> onde os amigos estão listados
        let listaUl = document.getElementById('listaAmigos');
        
        // Limpa a lista visualmente antes de adicionar o sorteio
        listaUl.innerHTML = '';

        // Cria um novo <li> com a mensagem do sorteio
        listItem = document.createElement('li');
        listItem.textContent = `O amigo sorteado é: ${amigoSorteado}`; // Exibe o nome sorteado
        listaUl.appendChild(listItem); // Adiciona o <li> à lista
        
        // Limpa a lista de amigos no array
        listaNomeAmigo = [];
    }
}

function limparCampoResultado(){
    listItem.textContent = '';
}

function limparCampo(){
    let inputField = document.querySelector('input');
    inputField.value = '';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Verifica se a tecla pressionada foi "Enter"
        adicionarAmigo(); // Chama a função do sorteio
    }
});