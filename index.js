// const numeros = [5, 12, 8, 130, 44];

// const numero = numeros.find(function (numero) {
//     return numero > 10;
// });

// console.log(numero);

const alunos = [
    {
        nome: 'Ariel',
        sobrenome: 'Sardinha'
    },
    {
        nome: 'Elton',
        sobrenome: 'Fonseca'
    },
    {
        nome: 'Amauri',
        sobrenome: 'Blanco'
    }
];

const aluno = alunos.find((aluno) => aluno.nome === 'Amauri');

console.log(aluno);