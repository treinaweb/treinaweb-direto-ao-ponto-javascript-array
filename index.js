const frutas = ["maçã", "mamão", "laranja", "banana"];
// 1 argumento -> acessa o indice do array
// 2 argumento -> ele serve para remover o elemento
// 3 ou N argumento -> serve para adicionar elementos
// frutas.splice(2, 2, "melancia", "morango");

// Remova 0 elementos(zero) antes do índice 2 e insira "melancia"
// frutas.splice(2, 0, "melancia");

// Remova 1 elemento no índice 3]
// frutas.splice(3, 1);

//Remova 1 elemento no índice 2 e insira "melancia"
// frutas.splice(2, 1, 'melancia');

// Remova 2 elementos do índice 0 e insira "melancia", "morango" e "coco"
// frutas.splice(0, 2, "melancia", "morango", "coco");

// Remova 2 elementos, começando no índice 2
// frutas.splice(2, 2);

// Remova 1 elemento do índice -2
// frutas.splice(-2, 1);

// Remova todos os elementos, começando no índice 2
frutas.splice(2);

console.log(frutas);

