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

/*
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

    

*/

/*
let vetor = [];
function aaa(n){

for (let i = 1; i <= n; i++) {
if(i % 3 === 0 && i % 5 === 0){
    vetor.push(`FizzBuzz`)    
}
else if(i % 3 === 0){
    vetor.push(`Fizz`)
}else if(i % 5 === 0){
    vetor.push(`Buzz`)
}else if(i % 7 === 0){
    vetor.push(`Boom`)
}else{
    vetor.push(i)
}


}
return vetor
}
console.log(aaa(15))*/