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
        console.log("selecionou")
  }) 
 }
})


