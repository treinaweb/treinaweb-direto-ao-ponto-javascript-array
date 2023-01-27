const frutas = ["maçã", "mamão", "laranja", "banana", "pera"];

const numeros = [10, 5, 30, 27, 18];

const frutasFiltradas = frutas.filter(function (fruta, indice, frutas) {
    return fruta.length <= 5
});

const numerosP = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

const numerosPares = numeros.map((numero) => {
    if (numero % 2 === 0) {
        return numero;
    }
});

console.log(numerosPares);
console.log(numerosP);