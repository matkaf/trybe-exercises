const { question, questionFloat } = require('readline-sync');

const name = question('Qual seu nome? ');
const weight = questionFloat('Qual seu peso? ');
const height = questionFloat('Qual sua altura? ');

const imc = weight / (height ** 2);

if (imc < 18.5) {
  console.log(`${name}, seu IMC é ${imc}. Você está abaixo do peso ideal!`);
} else if (imc < 25) {
  console.log(`${name}, seu IMC é ${imc}. Você está com o peso adequado. Parabéns!`);
} else if (imc < 30) {
  console.log(`${name}, seu IMC é ${imc}. Você está com sobrepeso.`);
} else if (imc < 35) {
  console.log(`${name}, seu IMC é ${imc}. Você está com obesidade grau I. Cuidado!`);
} else if (imc < 40) {
  console.log(`${name}, seu IMC é ${imc}. Você está com obesidade grau II. Cuidado!`);
} else {
  console.log(`${name}, seu IMC é ${imc}. Você está com obesidade grau III. Procure um médico imediatamente!`);
}
