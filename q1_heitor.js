function questao1() {
      let vetor = [];
      let n = parseInt(document.getElementById('numero').value)
      for (let i = 1; i <= n; i++) {
            vetor.push(i);
      }
      for (let i = 0; i < vetor.length; i++) {
            if ( vetor[i] % 3 === 0 && vetor[i] % 5 === 0) {
                  vetor[i] = "FizzBuzz";
            } 
            else if (vetor[i] % 3 === 0) {
                  vetor[i] = "Fizz";
            } 
            else if (vetor[i] % 5 === 0) {
                  vetor[i] = "Buzz";
            } 
            else if (vetor[i] % 7 === 0) {
                  vetor[i] = "Boom";
            }
      }
      alert(vetor);
}
function questao3(){
      let str = document.getElementById('str').value;
      let inicio = 0;
      let final = str.length - 1;
      let vetsaida = [];
      for(let i = final; i >= inicio; i--){
            vetsaida.push(str[i]);
      }
      alert(vetsaida);
}
function questao6(vetor){
     let numero = parseInt(document.getElementById('botao').value);
      let resultado = [];
      for(let i = 0; i < vetor.length; i++){
            let existe = false;

            for(let h = 0; h < resultado.length; h++){
                  if(vetor[i] == resultado[h]){
                        existe = true;
                  }
            }
            if (existe == false) {
                  resultado.push(vetor[i]);
            }
      }
      alert("resultado");
}
