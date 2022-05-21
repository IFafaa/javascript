function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    
    var anotxt = document.querySelector('input#txtano')
    var anonumber = Number.parseInt(anotxt.value)
    var idade = ano - anonumber

    var res = document.querySelector('div#res')

    if(anonumber < 1910 || anonumber > ano){
        alert('[ERRO] DIGITE UM VALOR VÁLIDO')
    }else{
        var msex = document.querySelector('input#masc')
        var fsex = document.querySelector('input#fem')
        var genero = ''
        var pronome = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex.checked){
            genero = 'Mulher'
            pronome = 'uma'
            if(idade < 10){
                //criança
                img.setAttribute('src','criançamulher.pbg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade < 45){
                //adulto
                img.setAttribute('src','adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosomulher.png')
            }
        }else if(msex.checked){
            genero = 'Homem'
            pronome = 'um'
            if(idade < 10){
                //criança
                img.setAttribute('src','criançahomem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 45){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src','idosohomem.png')
            }
        }
      
        res.innerHTML = `Detectamos ${pronome} ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}