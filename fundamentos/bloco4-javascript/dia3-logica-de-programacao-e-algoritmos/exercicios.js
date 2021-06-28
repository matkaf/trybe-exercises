// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// let n = 10;
// let square = '';

// for (i = 0; i < n; i += 1){
//   square += '*';
// }

// for (i = 0; i < n; i+= 1){
//   console.log(square)
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// let n = 5;
// let square = [];

// for (i = 0; i < n; i += 1){
//   square += '*'
//   console.log(square)
// }

// 3- Agora inverta o lado do triângulo. Por exemplo:
let n = 5;
let triangle = [' ',];

  for (let i = 1; i < n; i += 1) {
    triangle += ' '
  }

  for (let x = 0; x < n; x += 1){
    triangle.shift();
    triangle.push('*');
    console.log(triangle);
  }

  // for (let x = 0; x < n; x += 1){
  //   triangle[triangle.length - x] = ' *';
  //   console.log(triangle);
  // }