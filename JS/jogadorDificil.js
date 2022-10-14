let numSprite=0
let posIniX=0
let Limagem=0
let largSprite=200
let numSprites=8
function desenhar(){

    // ctx.fillStyle = "#ff6";
    // ctx.fillRect(pX, pY, 100, 100);

    // let personagem = new Image()
    //     personagem.src = "img/rabbit.gif"
    
    //     personagem.addEventListener('load',()=>{
    //         // ctx.clearRect(0,0,750,785)
    //         ctx.drawImage(personagem,pX,pY,90,90)
    //     });        

        let personagem = new Image()
        if(morto == true) {
            
            personagem.src = "../img/sangue.png"
            ctx.drawImage(personagem,pX,pY,90,90)
            

        } else {
        personagem.src = "../img/personagem.png"
        largSprite=personagem.width/numSprites
        posIniX=largSprite*(numSprite)
        ctx.drawImage(personagem,posIniX,0,largSprite,238,pX,pY,90,90)
        

        tempo++;
        
        if(tempo%3==0){
            numSprite++;
        }

        if(numSprite>7){
            numSprite=0
        }

        if(tempo == 3000){
            tempo = 0;
        }
        
    }
}