const temp = document.querySelector('.contador');
const morreu = document.getElementById('morreu');

let number = 100;

setInterval(()=>{
    number--
    temp.innerHTML = `Tempo = ${number}`

    if (number == 0) {
        morto = true
        morreu.setAttribute('src','../img/GameOver.jpg')
        setInterval(()=>{
            location.reload();
        },1000)
    }
},1000)
