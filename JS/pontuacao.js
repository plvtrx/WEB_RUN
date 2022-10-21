const keyboard = document.getElementById('teclas');
keyboard.setAttribute('src','../img/keyboard.png');

var point = 0
let pXc = 350
let pYc =  15
let pYc2 = 310
let pYc3 = 695
let pYc4 =  15
let ent = false

function ponto() {


    ctx.font = '28px Arial'
    ctx.fillStyle = '#000'
    ctx.fillText('Score: ' + point ,10,40)

    let perdeu = new Image()

    perdeu.src = "../img/cenoura.png"
    perdeu.addEventListener('load',()=>{
    ctx.drawImage(perdeu,pXc,pYc,50,50)
    });
    
    if (pX < pXc + 50 && 
        pX + 70 > pXc &&
        pY < pYc + 50 &&
        pY + 70 > pYc) {
            window.addEventListener('keypress', (e)=>{
                let enter = e.keyCode
                
                if (enter == 32 && pXc == pXc && pYc == 15) {
                    ent = true
                    if(ent == true)
                    pXc = pXc
                    pYc = pYc2
                    point += 1
                }
            })
        }

    if (pX < pXc + 50 && 
        pX + 70 > pXc &&
        pY < pYc2 + 50 &&
        pY + 70 > pYc2) {
            window.addEventListener('keypress', (e)=>{
                let enter = e.keyCode
                
                if (enter == 32 && pXc == pXc && pYc == pYc2) {
                    ent = true
                    if(ent == true)
                    pXc = pXc
                    pYc = pYc3
                    point += 1
                }
            })
        }

        if (pX < pXc + 50 && 
            pX + 70 > pXc &&
            pY < pYc3 + 50 &&
            pY + 70 > pYc3) {
                window.addEventListener('keypress', (e)=>{
                    let enter = e.keyCode
                    
                    if (enter == 32 && pXc == pXc && pYc == pYc3) {
                        ent = true
                        if(ent == true)
                        pXc = 0
                        pYc = 0
                        point += 1
                    }
                })
            }

            if (pX < 0 + 50 && 
                pX + 70 > 0 &&
                pY < 0 + 50 &&
                pY + 70 > 0) {
                    window.addEventListener('keypress', (e)=>{
                        let enter = e.keyCode
                        
                        if (enter == 32 && pXc == 0 && pYc == 0) {
                            ent = true
                            if(ent == true)
                            pXc = 300
                            pYc = 10
                            point += 1
                        }
                    })
                }

                if (pX < 300 + 50 && 
                    pX + 70 > 300 &&
                    pY < 10 + 50 &&
                    pY + 70 > 10) {
                        window.addEventListener('keypress', (e)=>{
                            let enter = e.keyCode
                            
                            if (enter == 32 && pXc == 300 && pYc == 10) {
                                ent = true
                                if(ent == true)
                                pXc = 600
                                pYc = 605
                                point += 1
                            }
                        })
                    }

                    if (pX < 600 + 50 && 
                        pX + 70 > 600 &&
                        pY < 605 + 50 &&
                        pY + 70 > 605) {
                            window.addEventListener('keypress', (e)=>{
                                let enter = e.keyCode
                                
                                if (enter == 32 && pXc == 600 && pYc == 605) {
                                    ent = true
                                    if(ent == true)
                                    pXc = 100
                                    pYc = 300
                                    point += 1
                                }
                            })
                        }

                        if (pX < 100 + 50 && 
                            pX + 70 > 100 &&
                            pY < 300 + 50 &&
                            pY + 70 > 300) {
                                window.addEventListener('keypress', (e)=>{
                                    let enter = e.keyCode
                                    
                                    if (enter == 32 && pXc == 100 && pYc == 300) {
                                        ent = true
                                        if(ent == true)
                                        pXc = 200
                                        pYc = 250
                                        point += 1
                                    }
                                })
                            }

                            if(point == 10) {
                                window.location.href = './html/winner.html'
                            }
}

