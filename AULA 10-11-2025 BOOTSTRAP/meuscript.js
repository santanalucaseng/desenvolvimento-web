function getdados(){
    let dados = document.querySelector('#email');
    document.getElementById('mail').innerHTML = dados.value;
}
function getdados2(){
    let dados = document.querySelectorAll('input'); //BUSCAR TODAS AS INPUTS//
    let divDados = document.getElementById('dados');
    for(let i=0;i<dados.length; i++){
        let paragrafo = document.createElement('p')
        paragrafo.innerHTML = dados[i].value;
        divDados.appendChild(paragrafo);
    }
    }