function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1:
function createDezDays () {
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysUl = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1){
    let number = dezDaysList[index];
    let numberList = document.createElement('li');
    numberList.innerHTML = number;
    
    if (number === 24 || number === 31) {
      daysUl.appendChild(numberList).className = 'day holiday'
    } else if (number === 4 || number === 11 || number === 18){
      daysUl.appendChild(numberList).className = 'day friday'
    } else if (number === 25){
      daysUl.appendChild(numberList).className = 'day holiday friday'
    } else {
      daysUl.appendChild(numberList).className = 'day';
    }
  }

}

createDezDays();

// Exercicio 2:
function btnFeriado (feriado) {
  let divButtons = document.querySelector('.buttons-container');
  let feriadoBtn = document.createElement('button');
  feriadoBtn.innerHTML = feriado;

  divButtons.appendChild(feriadoBtn).id = 'btn-holiday';
}

btnFeriado('Feriado');

// Exercicio 3:
