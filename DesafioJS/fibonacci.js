//Realizar una función(n) que calcule la secuencia fibonacci de n elementos .(branch sugerida "/desafio02")
//-En matemáticas, los números de Fibonacci, comúnmente denominados Fₙ, forman una secuencia, llamada secuencia de Fibonacci, de manera que cada número es la suma de los dos precedentes, comenzando por 0 y 1. 
const cantidad = 18;

const fibonacci = (cant) => {  
  var secuencia = [];
  for(var i = 0; i < cant ; i++){
    if(i <= 1){
      secuencia.push(i);
    }
    else {      
      secuencia.push(secuencia[i-2]+secuencia[i-1]);
    }    
  }
  return secuencia;
}

console.log(fibonacci(cantidad));
