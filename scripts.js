const img = document.querySelector('#img')

let lsImg = ["/img/vermelho.png", "/img/amarelo.png", "/img/verde.png", "/img/amarelo.png",]
let cont = 0

setInterval(()=>{{
    img.src = lsImg[cont]
    cont++

    if (cont > 3) {
        cont = 0
    }

}}, 3000)