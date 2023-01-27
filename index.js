const frutas = ["maçã", "mamão", "laranja", "banana"];

// console.log(frutas[0]);

const resultado = frutas.indexOf("laranja")
if (resultado !== -1) {

    frutas[resultado] = "uva";
}

console.log(frutas);