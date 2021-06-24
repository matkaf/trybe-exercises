let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;

// Exercicio 1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

// for (number of numbers) {
//   console.log(number);
// } 

// Exercicio 2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

// for ( i = 0; i < numbers.length; i+=1){
//   soma += numbers[i];
// }

// console.log(soma);

//Exercicio 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
// for ( i = 0; i < numbers.length; i+=1){
//      soma += numbers[i];
// }

// console.log(soma/numbers.length);

// Exercicio 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
// for ( i = 0; i < numbers.length; i+=1){
//       soma += numbers[i];
//  }
//   if (soma/numbers.length > 20){
//     console.log('Valor maior que 20')
//   }
//   else {
//     console.log('Valor menor ou igual a 20')
//   }

// Exercicio 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o
// num = 0;
// for (index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > num) {
//     num = numbers[index]; 
//   }
// }
// console.log('O maior número é ' + num);

// Exercicio 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// contadorImpar = 0;

// for (index = 0; index < numbers.length; index += 1){
//    if (numbers[index]%2 != 0){
//      contadorImpar+=1;
//     }
// }
// if (contadorImpar > 0){
//   console.log('Existem ' + contadorImpar +' números ímpares')
// }
// else{
//   console.log('Nenhum valor ímpar encontrado');
// }

// Exercicio 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o
// num = 0;
// for (index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > num) {
//     num = numbers[index]; 
//   }
//  for (indexMenor = 0; indexMenor < numbers.length; indexMenor += 1){
//    if (numbers[indexMenor] < num) {
//      num = numbers[indexMenor];
//    }
//  }
// }
// console.log('O menor número é ' + num);

// ------------ NÃO PRECISA MAIS DAS VARIAVEIS NO TOPO ----------------------------

// Exercicio 8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
// contador = [];
// for (index = 1; index <= 25; index += 1){
//       contador += [index];
//       console.log (index);
// }

// // Exercicio 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// contador = [];
// for (index = 1; index <= 25; index += 1){
//       contador += [index];
//       console.log (index/2);
// }