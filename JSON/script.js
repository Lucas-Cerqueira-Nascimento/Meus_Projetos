const inpt_name = document.querySelector("#Iname")
const inpt_age = document.querySelector("#Iage")

const tes = new Object()
function salvar() {
       tes.nome = inpt_name.value
        tes.age = inpt_age.value

    const {nome , age} = tes 

    const names = JSON.parse(localStorage.getItem("nome")) || []
    const idade = JSON.parse(localStorage.getItem("age")) || []

    names.push(nome)
    idade.push(age)


localStorage.setItem("nome", JSON.stringify(names))       
localStorage.setItem("age", JSON.stringify(idade))
}

async function test() {
    const res = await fetch("Json.json")
    const data = await res.json()

   const test = data.map(maps => {
        
        return maps.age * 2
    })
    
    //console.log(test)

    //console.log(data[2]["TESTE"].test)
}

//test()