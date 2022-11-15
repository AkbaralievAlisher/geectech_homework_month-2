//задание 1
var arr=[]
console.log('ex1')
for(var i=0;i<10;i++){
    console.log(arr.push(i))
}
//задание 2
console.log('ex2')
var q=20
while(q>0){
    console.log(q--)
}
//задание 3
var a=prompt('выберите цвет(красный,желтый,зеленый)').toLowerCase() //все заглавные буквы в маленькие
if(a==='красный' || a==='Красный' ){
    alert('СТОП')
}
else{
    if(a==='желтый' || a==='Желтый' ){
    alert('ПРИГОТОВИТЬСЯ')
}
else{
    if(a==='зеленый' || a==='Зеленый' ){
    alert('ЕХАЛА')
}
else{
    alert('"Крысный" либо "Желтый" либо "Зеленый"')
}
}
}
