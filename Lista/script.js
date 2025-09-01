const form = document.querySelector("#novoItem")
const nome = document.querySelector("#nome")
const quantidade = document.querySelector("#quantidade")
const ul = document.querySelector("#lista")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    Storage(nome, "name")
    Storage(quantidade, "quantidade")

    
})

function Storage(input, key){
    if(!input && !key) return;

    const storage = JSON.parse(localStorage.getItem(`${key}`)) || []

    storage.push(input.value)

    storage.forEach(element => {
        console.log(element)
    });

    ul.innerHTML += `<li>${storage}</li>`

    localStorage.setItem(`${key}`, JSON.stringify(storage))


    input.value = ""
}