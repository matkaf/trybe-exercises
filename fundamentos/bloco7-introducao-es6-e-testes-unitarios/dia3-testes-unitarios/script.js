// Exercicio 1:

  // const assert = require('assert');

  // function sum(a, b) {
  //   if (typeof a !== 'number' || typeof b !== 'number') {
  //     throw new Error('parameters must be numbers');
  //   }

  //   return a + b;
  // }

  // // implemente seus testes aqui

  // assert.strictEqual(sum(4,5), 9, 'Não é 9')
  // assert.strictEqual(sum(0,0), 0, 'Não é 0')
  // assert.strictEqual(sum(4,'5'), 9, 'Não é 9')
  
// Exercicio 2:
  const assert = require('assert');

  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  // implemente seus testes aqui
  // console.log(myRemove([1, 2, 3, 4], 3))
  assert.deepStrictEqual(myRemove([1 ,2, 3, 4], 3), [1, 2, 4], 'Erro');
  assert.notDeepStrictEqual(myRemove([1 ,2, 3, 4], 3), [1, 2, 3, 4], 'Erro');
  assert.deepStrictEqual(myRemove([1 ,2, 3, 4], 3), [1, 2, 4], 'Erro');
  assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Erro')





