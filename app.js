let nomeAmigo = '';
let listaNomeAmigo = [];

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
}

function exibirListaAmigos(){
    let listaUl = document.getElementById('listaAmigos');
    let novoAmigo = listaNomeAmigo[listaNomeAmigo.length - 1]; // Pega o último nome adicionado
    let listItem = document.createElement('li');
    listItem.textContent = novoAmigo;
    listaUl.appendChild(listItem);
}


function limparCampo(){
    let inputField = document.querySelector('input');
    inputField.value = '';
}