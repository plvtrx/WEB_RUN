// chamando o meu canvas
const canvas = document.getElementById('canvas');

// passando o ctx do meu canvas
const ctx = canvas.getContext('2d');

// declarando o tamanho da minha calçada
const globalW= 800;
const globalH= 120;
const velocidadeCarro = 1.5;
const velocidade = 3;
let pY= 675
let pX= 325
var tempo = 0;
var morto = false;
let anima


function game(){
    street()
    desenhar();
    mover();
    colisao();
    ponto()
    anima=requestAnimationFrame(game)
}

function colisao(){
    if(pX < carropX + 120 && 
        pX + 70 > carropX &&
        pY < carropY + 70 &&
        pY + 70 > carropY){
            desenharMorreu();
            setTimeout(function(){
                window.location.reload()
            },500);
    }

    if(pX < carrop2X + 120 && 
        pX + 70 > carrop2X &&
        pY < carrop2Y + 70 &&
        pY + 70 > carrop2Y){
            desenharMorreu();
            setTimeout(function(){
                window.location.reload()
            },500);
    }

    if(pX < carrop3X + 120 && 
        pX + 70 > carrop3X &&
        pY < carrop3Y + 70 &&
        pY + 70 > carrop3Y){
            desenharMorreu();
            setTimeout(function(){
                window.location.reload()
            },500);
    }

    if(pX < carrop4X + 120 && 
        pX + 70 > carrop4X &&
        pY < carrop4Y + 70 &&
        pY + 70 > carrop4Y){
            desenharMorreu();
            setTimeout(function(){
                window.location.reload()
            },500);
    }

    if(pX < carrop5X + 120 && 
        pX + 70 > carrop5X &&
        pY < carrop5Y + 70 &&
        pY + 70 > carrop5Y){
            desenharMorreu();
            setTimeout(function(){
                window.location.reload()
            },500);
    }
}

const teclado ={
    cima:false,
    baixo:false,
    esquerda:false,
    direita:false
}

window.addEventListener('keydown',(tecla)=>{
    var key = tecla.keyCode;
    if(key === 38 && key !== 40) {
        teclado.cima = true;
    }
    if(key === 40 && key !== 38) {
        teclado.baixo = true;
    }
    if(key === 37 && key !== 39) {
        teclado.esquerda = true;
    }
    if(key === 39 && key !== 37) {
        teclado.direita = true;
    }
});

window.addEventListener('keyup',(tecla)=>{
    var key = tecla.keyCode;
    if(key === 38 && key !== 40) {
        teclado.cima = false;
    }
    if(key === 40 && key !== 38) {
        teclado.baixo = false;
    }
    if(key === 37 && key !== 39) {
        teclado.esquerda = false;
    }
    if(key === 39 && key !== 37) {
        teclado.direita = false;
    }
});

function mover(){

    if (morto == true){
        
    } else {
    if (teclado.cima) {
            if(pY>-40){
            pY-= velocidade
    }
    } if (teclado.baixo){
        if(pY< 785-100){
        pY+= velocidade
        }
    } if (teclado.esquerda) {
        if(pX>0){
        pX-= velocidade
        }
    } if (teclado.direita) {
        if(pX< 750-100){
        pX+= velocidade
        }
    }
}
};

function street() {
    let street = new Image()
    street.src = '../img/street.png'
    street.addEventListener('load',()=>{
        ctx.drawImage(street,0,0,750,785)
    })

    carro1()
    carro2()
    carro3()
    carro4()
    carro5()

    carropX+= (velocidadeCarro) * Math.min(Math.random()*15, 7);
    requestAnimationFrame(carro1);
    if (carropX>=750){
        carropX=-250;
        carropX+= velocidadeCarro 
        requestAnimationFrame(carro1);
    }

    carrop2X-= (velocidadeCarro) * Math.min(Math.random()*15, 7);
    requestAnimationFrame(carro2);
    if(carrop2X<=-170){
        carrop2X= 850;
        carrop2X-= velocidadeCarro
        requestAnimationFrame(carro2);
    }

    carrop3X+=(velocidadeCarro) * Math.min(Math.random()*15, 7);
    requestAnimationFrame(carro3);
    if (carrop3X>=750){
        carrop3X=-250;
        carrop3X+= velocidadeCarro 
        requestAnimationFrame(carro3);
    }

    carrop4X-= (velocidadeCarro) * Math.min(Math.random()*15, 7);
    requestAnimationFrame(carro4);
    if(carrop4X<=-170){
        carrop4X= 850;
        carrop4X-= velocidadeCarro
        requestAnimationFrame(carro4);
    }

    carrop5X+= (velocidadeCarro) * Math.min(Math.random()*15, 7);
    requestAnimationFrame(carro5);
    if (carrop5X>=750){
        carrop5X=-250;
        carrop5X+= velocidadeCarro 
        requestAnimationFrame(carro5);
    }
}

game()