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

    /*    
    // pegar coisas dentro um do outro use [""].
    date.sprites.other["official-artwork"].front_default
    Img_Sprit.src = date.sprites.back_default
    Img_Sprit.src = date.sprites.back_female
    Img_Sprit.src = date.sprites.back_shiny
    Img_Sprit.src = date.sprites.back_shiny_female
    Img_Sprit.src = date.sprites.front_default
    Img_Sprit.src = date.sprites.front_female
    Img_Sprit.src = date.sprites.front_shiny
    Img_Sprit.src = date.sprites.front_shiny_female
     */