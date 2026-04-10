// console.log("Hello, World!");

// //Variables
// let maVar ="True" // valeur qui peut changer
// const maConst = "autre valeur" // ne changera jamais

// // Structures conditionnelles

// // Conditionnelle 1 
// // let autreVar : String
// // let autreVar = "jjj"
// // if(){ Expression attentue.console.log(autreVar)}

// // Conditionnelle 2
// // if (condition) et condition ou (condition et condition))
// if(maVar == "True"){console.log("C'est vraie !")}

// // Conditionnelle 3
// switch (maVar) {
//     case "True":
//         console.log("C'est vraie !")
//         break;  
//     case "Titi":
//         console.log("C'est Titi !")
//         break;
//     default:
//         console.log("On est dans le cas par défaut !")
// }

// // Ternaires
// // variable = (condition) ? valeur si vrai : valeur si faux
// let age = 19
// const information = age >= 18 ? "Majeur" : "Mineur"
// console.log(information)

// if(age> 16 && age < 18){
//     console.log("Pas encore majeur")
// }else if (age > 18 && age <30){
//     console.log("jghjkl")
// }

// // Contatenation
// age = 25
// const prénom ="Salomé"
// const nom = "Caignard"
// console.log("Bonjour je m'appelle" + prénom + " et mon nom de famille c'est" + nom + ", j'ai" + age + " ans !")
// console.log("Bonjour je m'appelle" + prénom + " " + nom + ", j'ai" + age + " ans !")
// //Boucles

// //while
// //Ammprcage, la variable de boucle
// let i = 0
// while(i < 100){
//     console.log(`Nombre impair: ${i}`)
//     //Modification de la condition
//     //i = i + 2 -> équivalent à la ligne au dessous 
//     i+=2
    
// }

// let valeur = "huhu"
// while(valeur !="ahah"){
//     console.log("La valeur est différente")

//     valeur = "ahah"
// }

// // for
//     // for(compteur;condition;incrémentation/ décrémentation)
// for(let i ; i < 100; i = i + 2){
//     console.log("Nombre pair: " + i)
// }

//     // for in
//     // for of


// //forEach

// // DRY = Don't Repeat Yourself*

// //Fonctions
// function direbonjour(prenom){
//     console.log(`Bonjour ${prenom} !`)
// }
// direbonjour("Alice")
// direbonjour("Bob")

// const sayHello = (prenom) => {
//     console.log(`Hello ${prenom} !`)
// }
// sayHello("Alice") 
// sayHello("Bob") 

// const h1 = document.querySelector("h1")
// //h1.innerHTML = "toto"
// h1.textContent = "titi <br/>"

// const monPremierArticle = `
//        <article> 
//             <div>
//                 <h1> jjj</h1>
//                 <ul>
//                     <li> A </li>
//                     <li> B </li>
//                     <li> C </li>
//                     <li> D </li>
//                     <li> E </li>
//                 </ul>
//             </div>
//         </article>
// `


// document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("afterbegin",monPremierArticle)

// const h1 = document.querySelector("h1")
// let count = 0
// const title = h1.textContent
// // h1.addEventListener('type d'évenement observé', fonction à lancer)
// h1.addEventListener('click',()=>{
//     count++
//     h1.textContent = `${title} ${count}`
// })


// localStorage.setItem("clé", valeur au format string)
localStorage.setItem("prenom", "Salomé")
// localStorage.getItem("clé") -> retourne la valeur associée à la clé
const prenom = localStorage.getItem("prenom")
console.log(prenom)

const person = {
    prénom: "Salomé",
    nom: "Caignard",
    age: 20
}

const strperson = JSON.stringify(person) // transforme un objet en string
localStorage.setItem("person", strperson)

const parseperson = JSON.parse(localStorage.getItem("person")) // transforme une string en objet
console.log(parseperson) 

const fruits = ["tomate","pomme", "banane", "orange"]

const ul = document.querySelector("ul")

fruits.forEach((el)=>{
    ul.insertAdjacentHTML("afterbegin", `<li>${el}</li>`)
}) 

const buttons = document.querySelectorAll("button")

buttons.forEach((button)=>{
    button.addEventListener("click",(el)=>{
        const id = el.target.dataset.id
        const autre= el.target.dataset.autre
        document.querySelector("body > section:nth-child(4) > p").textContent = `Tu as cliqué sur ${id} : ${autre}`
    })
})

import { isMajor ,isMinor} from "./utils.js"

isMajor(18)
isMinor(15)