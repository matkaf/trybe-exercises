// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// function verificaPalindrome(word){

//   let palindrome = '';
//   let resultado = false;

//   for (let index = word.length - 1; index >= 0; index -= 1){
//     palindrome += word[index];
//     }
//   if (word === palindrome){
//     resultado = true;
//   } else {
//     resultado = false;
//   }
//   console.log(resultado);
// }

// verificaPalindrome('arara');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
// let numbers = [2, 3, 6, 7, 10, 1];

// function indexMaior(numbers) {
//   let posicao = 0;
//   for (let index in numbers){
//     if (numbers[posicao] < numbers[index]){
//       posicao = index;
//     } 
//   }
//   console.log(posicao)
// }

// indexMaior(numbers);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
// let numbers = [2, 4, 6, 7, 10, 0, -3];

// function indexMenor (numbers){
//   let posicao = 0;
//   for (let index in numbers){
//     if (numbers[posicao] > numbers[index]){
//       posicao = index;
//     }
//   }
//   console.log(posicao);
// }

// indexMenor(numbers);

// // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorNome (names){
//   let posicao = 0;
//   let nomeComprido = '';
//   for (let index in names){
//     if (names[posicao].length < names[index].length){
//       posicao = index;
//     }
//   }
//   nomeComprido = names[posicao];
//   console.log(nomeComprido);
// }

// maiorNome(names);

// // 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
// let numeros = [2, 3, 2, 5, 8, 2, 3]; 

// function verificarRepeticao(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) { // Como inicia sempre do zero?
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// verificarRepeticao(numeros);

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
// PORQUE N FUNCIONA COM O FOR/IN????
// let n = 5;

// function somatorio (n){
//   let soma = 0;
//   for (let index = 0; index <= n; index += 1){
//     soma += index;
//   }
//   console.log(soma);
// };

// somatorio(n);

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false