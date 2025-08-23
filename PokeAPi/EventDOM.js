// Sistema do Menu de tipos de Pokémons
const menu = document.querySelector("#menu_type")
 const divType = document.querySelector(".pokeTypes")
  const type = document.querySelector("#closeTab")
   let menuType = false
menu.addEventListener("click", () => {
    if(!menuType){
        //menu.classList.add("rote_menu")
        divType.classList.add("On")
    type.addEventListener("click", () => {
        divType.classList.remove("On")
        //console.log("selecionou")
  }) 
 }
})

// função para trocar de tipo de pokemon
const pokeTypes = document.querySelectorAll(".types")
let currentIndex = 0
function AllpokesUpdate(index){
    pokeTypes.forEach((pokes, i) => {
        pokes.classList.toggle("On", i === index)
    })
}

function changeTypes(value){
    const numValue = (currentIndex) + value

    if(numValue < 0 || numValue >= pokeTypes.length) return;

    currentIndex = numValue

    //console.log(currentIndex)

    SelectTypePokemon(currentIndex)
    AllpokesUpdate(currentIndex)
}

// Event SelectType of Pokemon
const btn_selectType = document.querySelector("#selectType")

function SelectTypePokemon(index){
    btn_selectType.addEventListener("click", () => {
        pokeTypes.forEach((poke, i) => {
            if(i === index && poke.classList.contains("On")){
                divType.classList.remove("On")
                ApiFetch(index)
            }
        })
    })
}

// Event back and next type 
const BackArrow = document.querySelector("#back")
BackArrow.addEventListener("click", () => changeTypes(-1))
const NextArrow = document.querySelector("#next")
NextArrow.addEventListener("click", () => changeTypes(1))

// Api do tipo de pokemon
async function ApiFetch(Num){ 

    const res = await fetch(`https://pokeapi.co/api/v2/type/${Num}`)

    const dados = await res.json()

    console.log(dados.name)
}

async function Test(){
    const res = await fetch("https://pokeapi.co/api/v2/type/1")
    const dados = await res.json()

    //console.log(dados.pokemon[0].pokemon.name) //Acessa o obj do pokemon dentro do array 
    
    //console.log(dados["pokemon"][0]["pokemon"]["name"])


    const Allnames = dados.pokemon //Acessa todos os pokemons
    //console.log(Allnames)

    Allnames.forEach((pokes, i) => {
        //console.log(pokes) Objetos
        //console.log(i) Chave dos pokemons

        // let test = dados.pokemon[i].pokemon.name

        // console.log(test) //Saída: Todos os nomes dos Pokemons!
    })
}

Test()