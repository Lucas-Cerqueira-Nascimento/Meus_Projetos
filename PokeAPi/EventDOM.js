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
            }
        })
    })
}

// Event back and next type 
const BackArrow = document.querySelector("#back")
BackArrow.addEventListener("click", () => changeTypes(-1))
const NextArrow = document.querySelector("#next")
NextArrow.addEventListener("click", () => changeTypes(1))
