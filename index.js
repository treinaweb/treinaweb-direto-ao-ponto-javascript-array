const numeros = [5, 6, 3, 1, 4];
const letras = ["d", "a", "b", "c"];

const numerosELetras = [...letras, ...numeros];

// console.log(numeros.sort());
// console.log(letras.sort());
// console.log(numerosELetras.sort());

// console.log(numeros.reverse());
// console.log(letras.reverse());
// console.log(numerosELetras.reverse());

console.log(numeros.sort().reverse());
console.log(letras.sort().reverse());
console.log(numerosELetras.sort().reverse());
