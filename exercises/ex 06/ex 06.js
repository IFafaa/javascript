//criação do array
var lista = []
//funçao que adiciona números ao array
function AdicionarNumero(){
            //puxando variáveis do HTML usando o DOM
    var numerotxt = document.getElementById('numerotxt')
    var tabela = document.getElementById('tabela')
    var numero = Number(numerotxt.value)
    var resultado = document.getElementById('resultado')

    if(numerotxt.value.length == 0 || numero > 100 || numero < 1){
        alert('[ERRO]Digite um valor válido!')
    }else{
            //adiciona os números a lista no HTML e ao array
        if(lista.indexOf(numero) == -1){
            lista.push(Number(numero))
            let item = document.createElement('option')
            item.text = `O número ${numero} foi adicionado`
            tabela.appendChild(item)
            resultado.innerHTML = ''
        }else{
            alert('Este número já foi adicionado!')
        }
    }
    numerotxt.value = ''
    numerotxt.focus()
}
//função que manipula o array
function VerificarNumeros(){
    if(lista.length == 0){
        alert('[ERRO]Adicione números a lista!')
    }else{
        var total = lista.length
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0
        for(var position in lista){
            soma += lista[position]
            if(lista[position] > maior)
            maior = lista[position]
            if(lista[position] < menor)
            menor = lista[position]
        }
        var media = soma/total
   
    resultado.innerHTML += `Ao todo, temos ${total} números cadastrados!`
    resultado.innerHTML += `<br>O maior valor informado é ${maior}.`
    resultado.innerHTML += `<br>O menor valor informado é ${menor}`
    resultado.innerHTML += `<br>A soma dos números cadastrádos é ${soma}`
    resultado.innerHTML += `<br>A média dos números cadastrádos é ${media}`
    }
}
//função que limpa a tabela
function LimparTabela(){
    tabela.options.length = 0;
    lista.length = 0
    resultado.innerHTML = ''
}