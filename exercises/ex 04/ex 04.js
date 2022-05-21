function contar(){
        //puxando as variáveis do HTML
    let iniciotxt = document.getElementById('inicio')
    let fimtxt = document.getElementById('fim')
    let passotxt = document.getElementById('passo')
    let resultado = document.getElementById('res')
        //erro para falta de dados
    if(iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0){
        alert('[ERRO]Faltam dados!')
    }else{
        resultado.innerHTML = 'Contando: <br>'

        let inicio = Number(iniciotxt.value)
        let fim = Number(fimtxt.value)
        let passo = Number(passotxt.value)
        
        let contador = inicio
        if(passo <= 0){
            alert('[ERRO]Passo inválido')
            resultado.innerHTML = 'Digite novamente!'
        }else{
            //contagem regressiva
            if(contador > fim){
                while(contador > fim){
                    contador -= passo
                    resultado.innerHTML += `${contador}  `
                }
            }
            //conntagem crescente
            while(contador < fim){
                contador += passo
                resultado.innerHTML += `${contador}   `
            }
        }
    }
}