// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const cadastro = (nome) => {
  const emailName = nome.split(' ').join('_');
  const pessoaObj = {
    nomeCompleto: nome,
    email: `${emailName}@trybe.com`,
  }
  return pessoaObj
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(cadastro));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const verificaLoteria = (num1, num2) => num1 === num2;

const sorteioHof = (number, callback) => {
  const numLoteria = Math.floor(Math.random() * 5) + 1;

  return callback(number, numLoteria) ? `O número sorteado foi: ${numLoteria}. Parabéns! Você ganhou!` : `Infelizmente, não deu. Tente novamente`
}

console.log(sorteioHof(3, verificaLoteria));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifica = (respostas, gabarito) => {
  const pontuacao = 0;
  for (let index = 0; index < respostas.length; index += 1) {
    if (respostas[index] === 'N.A' ) {
      pontuacao += 0;
    } else if (respostas[index] === gabarito[index]){
      pontuacao += 1;
    } else {
      pontuacao -= 0.5;
    }
  }
  return pontuacao
}

const verificaHof = (respostas, gabarito, callback) => {
  return callback(respostas, gabarito);
}

console.log(verificaHof((STUDENT_ANSWERS, RIGHT_ANSWERS, verifica())));