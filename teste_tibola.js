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
function final(n){

    vetor = n

let dia = n[0];
let venda = 0;

for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] > venda){
        venda = vetor[i]
    }

    if(dia < vetor[i]){
        dia = vetor[i]
    }
    
}

let valor = venda - dia

if(valor === 0){
    return `Sem lucro`
}

console.log(valor)

}
final([1,2,3])

    

