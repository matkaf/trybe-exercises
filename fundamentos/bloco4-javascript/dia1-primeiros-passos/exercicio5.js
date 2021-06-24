let triangle = 10;
let angulo1 = 0;
let angulo2 = 0;
let angulo3 = 0;

if (triangle === 180) {
  angulo1 = triangle/3;
  angulo2 = triangle/3;
  angulo3 = triangle/3;
  console.log(angulo1+'+'+angulo2+'+'+angulo3+' = 180 -> Positive');
}
else {
  console.log('Seu triângulo não é um triângulo :) -> False')
}