let nomeAmigo = '';
let listaNomeAmigo = [];
let listItem;

function recebeNome(){
    nomeAmigo = document.querySelector('input').value;
}

function adicionarAmigo() {
    recebeNome();
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome')
    } else {
        if (listaNomeAmigo.includes(nomeAmigo)){
            alert(`${nomeAmigo} já foi incluído, tente adicionar algo mais para melhorar a identificação`)
        } else {
            listaNomeAmigo.push(nomeAmigo);
            limparCampo();
            exibirListaAmigos();
        }
    }
    limparCampoResultado();
}

function exibirListaAmigos(){
    let listaUl = document.getElementById('listaAmigos');
    let novoAmigo = listaNomeAmigo[listaNomeAmigo.length - 1]; 
    let listItem = document.createElement('li');
    listItem.textContent = novoAmigo;
    listaUl.appendChild(listItem);
}

function sortearAmigo() {
    if (listaNomeAmigo.length === 0 || listaNomeAmigo.length === 1) { 
        alert(`Ops! Antes de sortear, adicione dois ou mais nomes dos seus amigos!`);
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaNomeAmigo.length); 
        let amigoSorteado = listaNomeAmigo[indiceAleatorio]; 
        let listaUl = document.getElementById('listaAmigos');
        listaUl.innerHTML = '';
        listItem = document.createElement('li');
        listItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        listaUl.appendChild(listItem);
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
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});