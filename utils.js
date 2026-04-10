export function isMajor(age){
    console.log(age>=18? "Tu es majeur" : "Tu es mineur")
    const calcul = calculCarre(5)
    console.log(calcul)
}

export function isMinor(age){
    console.log(age>=18? "Tu es majeur" : "Tu es mineur")
}

function calculCarre(nombre){
    return nombre*nombre
}