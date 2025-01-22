let nomeAmigo = '';
let ListaNomeAmigo = [];

function recebeNome(){
    nomeAmigo = document.querySelector('input').value;
    // console.log(nomeAmigo);
}

function adicionarAmigo() {
    recebeNome();
    if (nomeAmigo == '') {
        alert('Ops! Digite o nome de um amigo!')
    } else {
        if (ListaNomeAmigo.includes(nomeAmigo)){
            alert(`${nomeAmigo} já foi incluído, tente adicionar algo mais para melhorar a identificação`)
        } else {
            ListaNomeAmigo.push(nomeAmigo);
            // console.log(ListaNomeAmigo)
            limparCampo();
            exibirListaAmigos();
        }
    }
}

function exibirListaAmigos(){
    nomeAmigo = document.getElementById('listaAmigos');
    nomeAmigo.innerHTML = ListaNomeAmigo;
    console.log(`func exibirListaAmigos ${ListaNomeAmigo}`);
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}