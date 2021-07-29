// Função FOR EACH:
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 31, approved: '' },
];

function verifyGrades() {
  students.forEach((student) => {
    if (student.grade >= 60) {
      // students[index].approved = 'Aprovado';
      student.approved = 'Aprovado';
    } else {
      // students[index].approved = 'Recuperação';
      student.approved = 'Recuperação';

    }
  });
}

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
// const lista = [];

// const minhaSolucao = (names) => {
//   names.forEach((name) => {
//     lista.push(name.toUpperCase());
//   })
//   return lista
// }

// console.log(minhaSolucao(names));

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);

console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

verifyGrades();

console.log(students);

// Para Fixar:

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);



// Função FIND:
