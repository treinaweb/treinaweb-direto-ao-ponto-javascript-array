const numeros = [44, 52, 10, 4];

const numerosNovos = numeros.map((numero, indice, numeros) => {
    console.log(numero, 'indice>', indice);

    return numero * 2;
});

console.log(numerosNovos);