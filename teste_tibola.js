/*function teste(vetor){

    let vetorAuxiliar = [];



    for(let i = vetor.length - 1; i >= 0; i--){

        vetorAuxiliar.push(vetor[i])
    }
return vetorAuxiliar


}
*/


/*function teste(){
    let txt = document.querySelector('.inp').value


let pao = txt.trim().split(" ");



let palavra = "";
let menor = pao[0];
for (let i = 0; i < pao.length; i++) {

    if(pao[i].length > palavra.length){
        palavra = pao[i]
    }

    if(pao[i].length < palavra.length){
        menor = pao[i]
    }

    
}
alert(`Total: ${txt.length} \n
    Maior: ${palavra} \n
    Menor: ${menor}`)
}*/


let vetor = [];
function final(valores){

    vetor = valores

let menorValor = valores[0];
let maiorValor = 0;

for (let i = 1; i < valores.length; i++) {

let lucro = valores[i] - menorValor

    if(lucro > maiorValor){
        maiorValor = lucro
    }

    if(valores[i] < menorValor){
        menorValor = valores[i]
    }
   
}


console.log(maiorValor)





}
final([5,4,3,2,1])

    

