
// carne - 400 gr por pessoa > 6h = 650

// Cerveja - 1200 ml por pessoas >6h = 2000 ml

//Refrigerante/agua - 1000 ml por pessoa >6h = 1500 ml

// Crianças valem 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")



let resultado = document.getElementById("resultado")

function calcular() {

    console.log("Calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdeCarne = carnePP(duracao) * adultos + carnePP(duracao)/2 * criancas
    let qtdeCerveja = cervejaPP(duracao) * adultos
    let qtdeBebida = bebidaPP(duracao) * adultos + bebidaPP(duracao/2) * criancas
    

    resultado.innerHTML = `<p>Você vai precisar de: `
    resultado.innerHTML += `<p>${qtdeCarne / 1000} KG de Carne`
    resultado.innerHTML += `<P> ${Math.ceil(qtdeCerveja/500)} de latinhas Cerveja`
    resultado.innerHTML += `<P> ${Math.ceil(qtdeBebida / 2000)} Refrigerantes de 2L`
    


function carnePP(duracao){

    if(duracao >=6){

            return 650;
    }
    else{
            return 400;
    }

 }

function cervejaPP(duracao){

    if(duracao >=6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidaPP(duracao){
if(duracao>=6){
return 1500;
}else{

return 1000
}

}


}



