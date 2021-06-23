let a = 45;
let b = 74;
let c = 31;

if (a > b && a > c){
    console.log('O maior número é '+a);
  }  
  else if (b > a && b > c){
    console.log('O maior número é '+b);
  }
  else if (c > a && c > b){
    console.log('O maior número é '+c);
  }
  else {
    console.log('Seus parâmetros não estão alinhados com a proposta do código')
  }