function solucao() {
    var vetor = [];
    var numero = parseInt(document.getElementById('numero').value); 
         if( numero%3 === 0 & numero%5 === 0){ 
      alert("FizzBuzz");
      return;
}
     if( numero%3 === 0){ 
      alert("Fizz");
}
     if( numero%5 === 0){ 
      alert("Buzz");
}
     if( numero%7 === 0){ 
      alert("Boom");
}
}
