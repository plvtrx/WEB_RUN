
function playAudio(url) {
    new Audio(url).play();
}

function desenharMorreu() {
    if(!morto)
        playAudio("../audio/batendo.mp3");
    morto = true

    let perdeu = new Image()

    perdeu.src = "../img/GameOver.jpg"
    perdeu.addEventListener('load',()=>{
        ctx.drawImage(perdeu,0,0,750,785)
    });
}

