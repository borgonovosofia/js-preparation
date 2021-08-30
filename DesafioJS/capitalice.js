//Realizar una función(string) que capitalice la primera letra de 
//cada palabra en una cadena de texto.
const cadena = 'Esta es la ORACION que tengo que coNVertir'

const palabras = cadena.split(' ');
const palabrasCap = palabras.map((palabra) => 
                               (palabra.charAt(0).toUpperCase() + 
                                palabra.slice(1).toLowerCase()));

console.log(palabrasCap.toString().replaceAll(',',' '));