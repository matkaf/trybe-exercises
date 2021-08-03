// Exercicio 1:
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [string, funcao] = saudacoes

// console.log(typeof string);
// console.log(typeof funcao);
// funcao(string);

// Exercicio 2:

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let lista = [comida, animal, bebida]
// const [animal, bebida, comida] = lista;
// console.log(comida, animal, bebida);

// Exercicio 3:
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

numerosPares = numerosPares.filter((num) => num % 2 === 0);

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

