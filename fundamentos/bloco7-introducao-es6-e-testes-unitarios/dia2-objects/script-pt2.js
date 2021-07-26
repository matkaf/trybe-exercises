const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  const addTurnolesson2 = (obj, key, value) => {obj[key] = value}

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  const showKeysLesson1 = (obj) => {console.log(Object.keys(obj))}

//3 - Crie uma função para mostrar o tamanho de um objeto.

  const objectLength = (obj) => {console.log(Object.keys(obj).length)};

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

  const objectValues = (obj) => {console.log(Object.values(obj))}

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

  // Gabarito:
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 }); 

  // Tentativa:
  // const allLessonsFunction = (lesson1, lesson2, lesson3) => {
  //   const allLessons = {lesson1 = {}, lesson2 = {}, lesson3 = {}};
  //   Object.assign(allLessons.lesson1, lesson1);
  //   Object.assign(allLessons.lesson2, lesson2);
  //   Object.assign(allLessons.lesson3, lesson3);
  //   console.log(allLessons)
  // };

addTurnolesson2(lesson2, 'turno', 'noite');
showKeysLesson1(lesson1);
objectLength(lesson1);
objectValues(lesson1);
console.log(allLessons);
// console.log(lesson1)
// console.log(lesson2)
// console.log(lesson3)
