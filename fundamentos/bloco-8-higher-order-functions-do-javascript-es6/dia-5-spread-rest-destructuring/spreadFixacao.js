// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Bergamota', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Hortelã', 'Melancia'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]

};

console.log(fruitSalad(specialFruit, additionalItens));