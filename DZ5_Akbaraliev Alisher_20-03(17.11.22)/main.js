const input = document.getElementById('input')
const button = document.getElementById('create_button')
const list = document.getElementById('todo__list')
console.log(button);

let todo = e =>
{
    if (input.value.trim() != '') {
        const div = document.createElement("div")
        const text = document.createElement("h3")
        const btnsDiv = document.createElement("div")
        const btnDelete = document.createElement("button")
        const btnEdit = document.createElement("button")
        btnDelete.setAttribute("class", "btn")
        btnEdit.setAttribute("class", "btn")
        btnsDiv.setAttribute("class", "btns")
        div.setAttribute("class", "block_text")
        btnDelete.innerText='delete'
        btnEdit.innerText='edit'
        text.innerText = input.value
        list.append(div)
        div.append(text)
        div.append(btnsDiv)
        btnsDiv.append(btnDelete)
        btnsDiv.append(btnEdit)
        input.value = ""
        btnDelete.onclick=()=>{div.remove()}
        btnEdit.onclick=()=>{
            var p=prompt()
            text.innerText = p
        }
    }
    else input.value = ""
}

button.onclick = () => todo()
input.addEventListener('keydown', e =>
{
    if (e.keyCode === 13) todo()
})
