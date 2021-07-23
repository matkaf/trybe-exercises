// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// function obj (objeto, keyName, keyValue) {
//   objeto[keyName] = keyValue;
//   return objeto;
// }

// console.log(obj(customer, 'surName', 'Kaffka'));

// OBJECT KEYS

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// OBJECT VALUES:

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// OBJECT ENTRIES:
// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
//   console.log('--------');

// };

// OBJECT ASSIGN:

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson.name);
// console.log(person);