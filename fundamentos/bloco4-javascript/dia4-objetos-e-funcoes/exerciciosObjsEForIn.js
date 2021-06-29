let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  }

// // Exercicio 1: Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// console.log('Bem vinda, ' + info.personagem);

// //Exercicio 3: Faça um for/in que mostre todas as chaves do objeto.
// for (let keys in info){
//   console.log(keys);
// }

// // Exercicio 4: Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// for (let keys in info){
//   console.log(info[keys]);
// }

//Exercicio 5: Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

for (let keys in info) {
  if (keys === 'recorrente' && info.recorrente === infoDois.recorrente){
    console.log('Ambas recorrentes')
  } else {
    console.log(info[keys] + ' e ' + infoDois[keys]);
  }
}
