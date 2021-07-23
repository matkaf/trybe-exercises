// 1 - Modique esse if abaixo:
// const testingScope = escopo => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = escopo => ((escopo === true) ? "Ótimo, fui utilizada no escopo" : "Não devo ser utilizada fora do meu escopo");
// console.log(testingScope(false));

// 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// const oddsAndEvens = [13, 35, 4, 10, 27, 12];
// const sortNumbers = oddsAndEvens => oddsAndEvens.sort((a, b) => a - b);
// console.log(sortNumbers(oddsAndEvens));

// PARTE 2

// 1 - Crie uma função que receba um número e retorne seu fatorial.
//  let num = 4;
//  let calc = num;
//  const fatorial = num => {
//    for (let i = num-1; i > 0; i -= 1){
//      calc *= i;
//    }
//    console.log(calc)
//   }

//  fatorial(num);

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
// const longestWord = frase => {
//   let splitedWords = frase.split(' ');
//   let wordLength = 0;
//   let word = '';

//   for (const i of splitedWords) {
//     if (i.length > wordLength) {
//       wordLength = i.length;
//       word = i;
//     }
//   } 
//   return word;
// }
//  console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));