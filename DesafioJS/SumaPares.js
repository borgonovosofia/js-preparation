//Calcular la suma de todos los números pares que se encuentren entre el 10 y el 50. (branch sugerida "/desafio01")
const min = 10;
const max = 50;
   
const esNumeroPar = (n) =>  (n % 2) == 0 && true;

const sumarPares = (min,max) => {
    var acum = 0;
    for(var i=min; i<=max; i++) {
      if(esNumeroPar(i)) { 
        console.log(`sumo ${i}`)
        acum += i;
      }
    }
    return acum;
}

console.log(sumarPares(min,max));