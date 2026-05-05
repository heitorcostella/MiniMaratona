function solucao() {
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
  


