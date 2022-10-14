var carropY= 560;
var carropX= -250;

var carrop2Y= 470;
var carrop2X= 850;

var carrop3Y= 380;
var carrop3X= -250;

var carrop4Y= 190;
var carrop4X= 850;

var carrop5Y= 100;
var carrop5X= -250;

var size = 90;

function carro1() {
    let carro1 = new Image()
        carro1.src = "../img/carro1.png"
    
        carro1.addEventListener('load',()=>{
            ctx.drawImage(carro1,carropX,carropY,120,80)
        });
}

function carro2() {
    let carro2 = new Image()
        carro2.src = "../img/carro2.png"
    
        carro2.addEventListener('load',()=>{
            ctx.drawImage(carro2,carrop2X,carrop2Y,120,80)
        });
}

function carro3() {
    let carro3 = new Image()
        carro3.src = "../img/carro3.png"
    
        carro3.addEventListener('load',()=>{
            ctx.drawImage(carro3,carrop3X,carrop3Y,120,80)
        });
}

function carro4() {
    let carro4 = new Image()
        carro4.src = "../img/carro4.png"
    
        carro4.addEventListener('load',()=>{
            ctx.drawImage(carro4,carrop4X,carrop4Y,120,80)
        });
}

function carro5() {
    let carro5 = new Image()
        carro5.src = "../img/carro5.png"
    
        carro5.addEventListener('load',()=>{
            ctx.drawImage(carro5,carrop5X,carrop5Y,120,80)
        });
}