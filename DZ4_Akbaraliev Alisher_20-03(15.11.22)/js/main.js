const plus = document.getElementById('plus') 
const minus = document.getElementById('minus') 
const number = document.getElementById('number') 

plus.onclick = function(){
    number.style.color='green' 
    number.innerHTML++}
minus.onclick = function(){ 
    number.style.color='red'
    if(number.innerHTML>0){
        number.innerHTML--
    }
}
//___________________________________________________

const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

window.addEventListener('mousemove', event => {
    let x = event.screenX
    let y = event.screenY
    if(x<500 && y<600){
    posX.innerHTML = x
    posY.innerHTML = y
    }
})
//____________________________________________________

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const text=document.getElementById('text')
var color = prompt().toLowerCase()
    if(color==='красный'){
        function svetofor(){
        red.innerHTML='<b>STOP</b>'
        red.style.background='red'
        red.style.display='flex'
        red.style.alignItems='center'
        red.style.justifyContent='center'
    }
    svetofor()
}else if(color==='зеленый'){
    function svetofor(){
        green.innerHTML='<b>GO</b>'
        green.style.display='flex'
        green.style.alignItems='center'
        green.style.justifyContent='center'
        green.style.background='green'
}
    svetofor()
}else if(color==='желтый'){
    function svetofor(){
        yellow.innerHTML='<b>READY</b>'
        yellow.style.display='flex'
        yellow.style.alignItems='center'
        yellow.style.justifyContent='center'
        yellow.style.background='yellow'
}
    svetofor()
}


