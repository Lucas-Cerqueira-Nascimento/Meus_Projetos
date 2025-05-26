    // Sistema para armazenar a cor favorita da pessoa :)
const Inome = document.querySelector("#Inome")
 const Icor = document.querySelector("#Icor")
  const btn_save = document.querySelector('#btn_save')

  btn_save.addEventListener("click", () => {
  // converte string para array se n tiver ele cria uma 
        const names = JSON.parse(localStorage.getItem("nome")) || []  
        const Colors = JSON.parse(localStorage.getItem("Cor")) || []  

/*  
    let Check_index_name = 0
    let Check_index_color = 0
*/

    if(/^[A-Z]/.test(Inome.value.trim())){

        if(Inome.value != "" && !names.includes(Inome.value) && !Number(Inome.value)){

            names.push(Inome.value.trim()) // armazena sem deixa espaço em branco "nome"
            Colors.push(Icor.value.trim())
            
            Resultado(names, Colors)
        
            localStorage.setItem("nome", JSON.stringify(names))
            localStorage.setItem("Cor", JSON.stringify(Colors))
        
        }else{
            alert(`[ERRO]!!! Nome Já esta armazenado`)
        }
    
    }else{
        alert("O primeiro Caractere dever ser em MAIÚSCULO!!")
    }

    Inome.value = ""
    Icor.value = "#000000"

  })

async function Resultado(Nome_Storage, Cor_Storage){
   btn_save.innerText = "Salvando..."
 try{
        await new Promise(resolve => {
            setTimeout(() => {
                btn_save.innerText = "Salvo!!!"
                // Mostrar_conteudo(Nome_Storage, Cor_Storage, nameNumber, colorNumber)
                ShowContent_name_color(Nome_Storage, Cor_Storage)
    
            }, 1000); 
            resolve()
        })
        
 }catch (error){
        alert(`Ocorreu um erro ${error}`)
 }

 setTimeout(() => {
     btn_save.innerText = "Salvar"
 }, 1500);


}

function ShowContent_name_color(Nome_S, Cor_S){
    const div_name = document.querySelector("div#Nome");
    const div_cor = document.querySelector("div#Cor");

    div_name.innerHTML = ""
    div_cor.innerHTML = ""
    
    // Jeito aprendido com o ChatGPT
    Nome_S.forEach((nome, index) => {
        const nameP = document.createElement("p")
         nameP.classList.add("styleALL")
          nameP.innerText = nome

            const colorP = document.createElement("p")
                colorP.classList.add("styleALL")
            colorP.innerText = Cor_S[index] // pega o mesmo índice do Nome_S

        colorP.addEventListener("click", () => {
            const divBackground = document.querySelector("#Cor_escolhida")
                divBackground.style.backgroundColor = `${Cor_S[index]}`
        })

        nameP.addEventListener("click", () => {
            colorP.style.border = `2px solid ${Cor_S[index]}`
           colorP.style.outline = "1px solid lightyellow"
           setTimeout(() => {
             colorP.style.border = "1px solid black"
            colorP.style.outline = ''
           }, 5000)
        })


        div_name.appendChild(nameP)
        div_cor.appendChild(colorP)
    })

}


/* function Mostrar_conteudo(Nome_S, Cor_S, nameNumber=0, colorNumber=0){

    return new Promise(resolve => {
            const div_name = document.querySelector("div#Nome")
            const div_cor = document.querySelector("div#Cor")
       
           div_name.innerHTML = ""
           div_cor.innerHTML = ""
       
           for(let nomeIndex in Nome_S){
               let names_P = document.createElement("p")
                names_P.classList.add("styleALL")
       
                names_P.innerText = Nome_S.at(nameNumber)
       
                div_name.appendChild(names_P)
                nameNumber++
            
                
           }
       
           for(let corIndex in Cor_S){
               let cor_P = document.createElement("p")
                cor_P.classList.add("styleALL")
       
                cor_P.innerText = Cor_S.at(colorNumber)
       

                div_cor.appendChild(cor_P)
                colorNumber++

           }

           resolve()

    })

}
*/

/*
function teste(){
    /*
    let tes = ["lucas","andre","isaque"]
    let nome = Inome.value.trim()
    let regex = /^[A-Z]/

    if(regex.test(nome)){

    // tes.indexOf(nome.value) === -1
        if(!tes.includes(nome)){
            tes.push(nome)
            alert('salvo com sucesso')
        }else{
        alert('nome já existe')
    }

    }else{
        alert('Nome deve ser com letra maiúscula')
    }

    console.log(tes)


 // SISTEMA PARA  ACRESCENTAR VALORES NO <p> 
    const div = document.querySelector("div#Nome")
    let contador = 0
 if(Inome.value != ""){
    let testStorage = JSON.parse(localStorage.getItem("teste")) || [] // converte string para ARRAY

    testStorage.push(Inome.value)

    div.innerHTML = ""
    for(let test in testStorage){
        let Paragrafo = document.createElement("p")
         Paragrafo.classList.add("styleALL")

         Paragrafo.innerText = testStorage.at(contador)

        div.appendChild(Paragrafo)

        contador++

        }

        localStorage.setItem("teste", JSON.stringify(testStorage))
        
    }
    

        Inome.value = ""
        Inome.focus()
    }
*/

