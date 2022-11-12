function minInt(){
    let a=Number(prompt('Задание 1: введите первое число'))
    let b=Number(prompt('введите второе число'))
    console.log('ex1')
    if(a<b){
         console.log(a,b,'min',b)
    }else if(b<a){ console.log(a,b,'min',a)}
    else{ console.log(a,'=',b)}
}

minInt()
// _____________________________________________

function lengthStr(){
    console.log('ex2')
    let input=prompt('Задание 2: введите текст')
    let k=0
    for(var i=0;i<input.length;i++)
        k++
    return console.log(input,'=', k)
}
lengthStr()
//_____________________________________________

function calc(m,c,n){
    console.log('ex3')
    switch(c){
        case '+':
            return console.log(m,c,n,'=',m+n)
            break
        case '-':
            return console.log(m,c,n,'=',m-n)
            break
        case '*':
            return console.log(m,c,n,'=',m*n)
            break
        case '/':
            return console.log(m,c,n,'=',m/n)
            break
    }
}
var intt=Number(prompt('Задание 3: введите первое число'))
var char=prompt('введите знак')
var int=Number(prompt('введите второе число'))
calc(intt,char,int)