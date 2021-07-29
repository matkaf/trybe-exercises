const numbers = [5, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

// Para fixar:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
 return numbers.find((num) => num % 3 === 0 && num % 5 === 0);
}

// Como é acessado o array numbers dentro dessa função anonima? Não teria que respeitar o escopo? Eu não deveria ter utilizado um parametro e chamado o array aqui embaixo no console.log?

// Quando usar as chaves na função anonima? {} ou ()?

console.log(findDivisibleBy3And5());

// Fixacao 2:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((nome) => nome.length === 5 );
}

console.log(findNameWithFiveLetters());

// Fixacao 3:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id)
}

console.log(findMusic('31031686'))