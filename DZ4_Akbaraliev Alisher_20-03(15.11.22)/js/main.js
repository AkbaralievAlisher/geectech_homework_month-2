const plus = document.getElementById('plus') 
const minus = document.getElementById('minus') 
const number = document.getElementById('number') 
const container = document.getElementById('container')
plus.onclick = ()=>{
    number.style.color='green' 
    number.innerHTML++}
minus.onclick = ()=>{ 
    number.style.color='red'
    if(number.innerHTML>0){
        number.innerHTML--
    }
}
//___________________________________________________

const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

container.addEventListener('mousemove', event => {
    let x = event.screenX
    let y = event.screenY
    posX.innerHTML = x
    posY.innerHTML = y
})
//____________________________________________________

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const text = document.getElementById('text')
const color = prompt().toLowerCase()
const style=(e)=>{
    e.style.display='flex'
    e.style.alignItems='center'
    e.style.justifyContent='center'
}
    if(color==='красный'){
        const svetofor=()=>{
        red.innerHTML='<b>STOP</b>'
        red.style.background='red'
        style(red)
    }
    svetofor()
}else if(color==='зеленый'){
    const svetofor=()=>{
        green.innerHTML='<b>GO</b>'
        style(green)
        green.style.background='green'
}
    svetofor()
}else if(color==='желтый'){
    const svetofor=()=>{
        yellow.innerHTML='<b>READY</b>'
        style(yellow)
        yellow.style.background='yellow'
}
    svetofor()
}


