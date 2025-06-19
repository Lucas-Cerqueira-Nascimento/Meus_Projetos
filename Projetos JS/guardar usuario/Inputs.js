// Sistema para Usuarios e amarzenador
 const inpt_User = document.querySelector("#Inome")
  const inpt_numF = document.querySelector("#Inum")
   const inpt_age = document.querySelector("#Iage")
    const check_M = document.querySelector("#Masc")
     const check_F = document.querySelector("#Femi")
     

 // Sistema para mudar efeito inpt_age
  const Label = document.querySelector("#L_age")
 inpt_age.addEventListener("input", () => {
        Label.innerHTML = inpt_age.value
    
 })

// Sistema para os Checkbox
 check_M.addEventListener("click", () => {
    if(check_M.checked){
        check_F.disabled = true
    }else{
        check_F.disabled = false
    }
 })

 check_F.addEventListener("click", () => {
    if(check_F.checked){
        check_M.disabled = true
    }else{
        check_M.disabled = false
    }
 })

 // Sistema para o Checkbox do checar 
 const choose_M = document.querySelector("#Masc_R") 
 const choose_F = document.querySelector("#Femi_R")
   
    choose_M.addEventListener("change", () => {
       if(choose_M.checked){
           choose_F.disabled = true
       }else{
           choose_F.disabled = false
       }
    })
   
    choose_F.addEventListener("change", () => {
       if(choose_F.checked){
           choose_M.disabled = true
       }else{
           choose_M.disabled = false
       }
    })

 const ArmazeM = []
 const ArmazeF = []

function Check_box(M, F, storeM, storeF){
    if(M.checked){
        storeM.push("M")
    }else{
        storeM.shift()
    }

     if(F.checked){
        storeF.push("F")
    }else{
        storeF.shift()
    }

}



function Alarm(User, numF, age, M, F){
    if(User.value == "" || numF.value == "" || age.value == "" || !M.checked && !F.checked){
        alert("Valor faltando!")
    }

}

function Limpar_campo(User, numF, age, Sex_M, Sex_F){
    if(User.value != '' && numF.value != '' && age.value != '' && Sex_M.checked || Sex_F.checked){
        Label.innerHTML = "Idade:"
        inpt_User.value = ""
        inpt_numF.value = ''
        inpt_age.value = ''

        check_M.checked = ""
        check_F.checked = ""
         check_M.disabled = false
         check_F.disabled = false
    }
}
     
    // Área Dos inputs
    const ArmazeUser = []
     const ArmazeNumf = []
      const ArmazeAge = []

function Salvar_Conteudo(){
   Alarm(inpt_User,inpt_numF,inpt_age,check_M,check_F)

    ArmazeUser.push(inpt_User.value)
    ArmazeNumf.push(Number(inpt_numF.value))
    ArmazeAge.push(Number(inpt_age.value))


   Check_box(check_M, check_F, ArmazeM, ArmazeF)

 Limpar_campo(inpt_User,inpt_numF,inpt_age,check_M,check_F)


}



function Mostrar_save(){

const Table = document.querySelector(".Table_save")  
 let P_Numbers = 4  // Quantidade de Paragráfos 
        // Armazena os paragrafos
    let ArmazenarFor = []
   for(let i = 0; i < P_Numbers; i++){
       let paragra = document.createElement("p")
        ArmazenarFor.push(paragra) // permite editar
             
        Table.appendChild(paragra)
   }

   ArmazenarFor.forEach(Paragrafo => {
    Paragrafo.style.color = "white"
    Paragrafo.style.fontWeight = "bold"
   })


// Coloca o conteúdo na tela 

    ArmazenarFor[0].innerText = `${ArmazeUser.at(-1)}` // Nome  
   ArmazenarFor[1].innerText = `${ArmazeNumf.at(-1)}` // N.Favorito
   ArmazenarFor[2].innerText = `${ArmazeAge.at(-1)}` // Idade

   if(ArmazeM.includes("M")){
       ArmazenarFor[3].innerText = `${ArmazeM.at(-1)} ` // Sexo M
   }

   if(ArmazeF.includes("F")){
    ArmazenarFor[3].innerText = `${ArmazeF.at(-1)}` // Sexo F
    }




   // Sistema aonde quando clicar nos sexos ele mostrar o sexo M e sexo F

 choose_M.addEventListener("change", () => {
    if(choose_M.checked){
        if(ArmazenarFor[3].innerText == "M"){
            ArmazenarFor[3].style.color = "blue"
        }
    }else{
        ArmazenarFor.forEach(P => P.style.color = "white")
    }
})

 choose_F.addEventListener("change", () => {
    if(choose_F.checked){
        if(ArmazenarFor[3].innerText == "F"){
            ArmazenarFor[3].style.color = "red"
        }
    }else{
        ArmazenarFor.forEach(P => P.style.color = "white")
    }
})

    choose_M.checked = ""
    choose_F.checked = ""
}

