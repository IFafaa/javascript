function carregar(){
 
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
 
    var data = new Date()
    var hora_atual = data.getHours()
    msg.innerHTML = `Agora são ${hora_atual} horas.`

    if(hora_atual < 12 ){
        imagem.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#aaa899'
    }else if(hora_atual < 18){
        imagem.src = 'fototarde.png'
        document.body.style.backgroundColor = '#ff9d00'
    }else{
        imagem.scr = 'fotonoite.png'
        document.body.style.backgroundColor = '#244143'
    }
}