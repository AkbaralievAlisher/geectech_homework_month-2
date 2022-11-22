const input=document.getElementById('input')
const button1=document.getElementById('button1')
const list=document.getElementById('list')
const button2=document.getElementById('button2')
const inputName=document.getElementById('inputName')
const inputAge=document.getElementById('inputAge')
const list2=document.getElementById('list2')

button1.onclick=()=>{
    if (input.value.trim() != '') {
        const listText=document.createElement('p')
        listText.innerText=(((input.value).split('')).reverse()).join('')
        list.append(listText)
        input.value = ""
    }else{
        input.value = ""
    }
}

button2.onclick=()=>{
    if (inputName.value.trim() != '' && inputAge.value.trim()!='') {
        const person=[{name:inputName.value, age:Number(inputAge.value)}]
        person.map(persons => {
            const p = document.createElement('p')
            list2.append(p)
            p.append(`Name: ${persons.name}; Age: ${persons.age}`)
            inputName.value = ""
            inputAge.value = ""
        })
    }else{
        inputName.value = ""
        inputAge.value = ""
    }
}
