let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let b = 1; b < numbers.length; b += 1){ // Indica a 2ª posição do array
  for (let a = 0; a < numbers[b]; a += 1){ // Indica a 1ª posição do array
    if (numbers[b] < numbers[a]){ // Se a 1ª posição for menor que a 2ª posição haverá a troca de lugar [segue]
      let troca = numbers[b]; // sendo o primeiro número sempre o menor até o fim do array (Bubble Sort).
      numbers[b] = numbers [a];
      numbers[a] = troca;
    }
  }
}
