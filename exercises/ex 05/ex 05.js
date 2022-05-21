function gerarTabuada(){
    let numerotxt = document.getElementById('numerotxt')
    let tabuada = document.getElementById('seltab')

    if(numerotxt.value.length == 0){
        alert('Digite um número!')
    }else{
        let numero = Number(numerotxt.value)
        let c = 1
        tabuada.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}