const a=Number(prompt('Задание 1: введите первое число'))
const b=Number(prompt('введите второе число'))
console.log('ex1')
const minInt=()=>{
    if(a<b){
         console.log(a,b,'min',a)
    }else if(b<a){ console.log(a,b,'min',b)}
    else{ console.log(a,'=',b)}
}
minInt()
// _____________________________________________

console.log('ex2')
const input=prompt('Задание 2: введите текст')
let k=0
const lengthStr=()=>{
    for(var i=0;i<input.length;i++)
        k++
    return console.log(input,'=', k)
}
lengthStr()
//_____________________________________________

console.log('ex3')
const calc=(m,c,n)=>{
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
const intt=Number(prompt('Задание 3: введите первое число'))
const char=prompt('введите знак')
const int=Number(prompt('введите второе число'))
calc(intt,char,int)