// Sistema de mostrar qual pokémon você escolheu
const inpt_Nome = document.querySelector("#Poke_name")

 let timer = null
    inpt_Nome.addEventListener("input", () => {
        clearTimeout(timer) // Limpa o último setTimeout para n gerar loop quando digitar
        
    timer = setTimeout(() => { 
            BuscadorPoke(inpt_Nome.value) // executa a função quando parar de digitar  
            inpt_Nome.value = ""
        },1500)
    
    })

async function BuscadorPoke(name_poke){

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_poke}`)
      const datails = await resposta.json()
   PrintSpriters(datails)

}

function PrintSpriters(date){
    const div_img = document.querySelector("#img_poke")
    div_img.innerHTML = ""
    // aprendido com o ChatGPT
const spriteSources = [
    date.sprites.front_default,
    date.sprites.back_default,
    date.sprites.front_female,
    date.sprites.back_female,

    date.sprites.front_shiny,
    date.sprites.back_shiny,
    date.sprites.front_shiny_female,
    date.sprites.back_shiny_female,
    date.sprites.other['official-artwork'].front_default
]

spriteSources.forEach(src => {
    const Img_Sprit = document.createElement("img")
    Img_Sprit.classList.add("img_Pokes")
    Img_Sprit.src = src
    div_img.appendChild(Img_Sprit)
})

}
    // ChatGpt
function debounce(func, delay) {
  let timer = null
  return function (...args) { 
    /* Show Event - o evento que o addEventListener envia (nessa caso é o "change" )
    console.log(`args: ${args}`) 

     Mostra o Elemento - O elemento q disparou o evento <select>
    console.log(`this: ${this}`) */
     
    clearTimeout(timer)
    timer = setTimeout(() => {
      // this que chama a função (addEventListener)
      // args recebe os eventos  
      func.apply(this, args)
    }, delay)
  }
}

// Evento para o select 
const selectPoke = document.querySelector("#Poke_select")        
const mostrarValor = debounce(() => { // func  () => { console.log(input.value) | this.value }
  BuscadorPoke(selectPoke.value) // Acessa diretamente o valor do select 

}, 1500) // delay

selectPoke.addEventListener("change", mostrarValor) //...args recebe o evento do select

//função para colocar todos os pokémons no <select>
function keepAllnamesPoke(){
const SelectPoke = document.querySelector("#Poke_select")
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
.then(res => res.json())
.then(dados => {

  // forma aprendida com o ChatGPT
    const results = dados.results 
   results.forEach(poke => { // Pega a array do results [] items
    const option = document.createElement("option")
     option.innerText = poke.name // pega só os nomes dos Pokémons
   SelectPoke.appendChild(option)
   })


/* meu jeito
  for(let i = 0; i < dados.count; i++){
    let AllnamesPoke = dados.results[`${i}`].name
    let test = document.createElement("p")

    test.innerText = AllnamesPoke

    p.appendChild(test)
  }
*/

})
}
keepAllnamesPoke()

//Proxima coisa para fazer. Sistema para analisar imagem null, quando a imagem n existir avisar!
