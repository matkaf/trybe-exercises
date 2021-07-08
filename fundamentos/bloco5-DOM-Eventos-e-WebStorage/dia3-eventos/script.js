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
let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', holidaysBackground);

function holidaysBackground (){
  let holidays = document.querySelectorAll('.holiday');

  for (index = 0; index < holidays.length; index += 1){
    if (holidays[index].style.backgroundColor != 'green'){
      holidays[index].style.backgroundColor = 'green';
    } else {
      holidays[index].style.backgroundColor = '';
    }
  }
}

// Exercicio 4:
function fridayButton (txtSexta) {
  let divButtons = document.querySelector('.buttons-container');
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  divButtons.appendChild(btnFriday).innerHTML = txtSexta;
}

fridayButton('Sexta-Feira');

// Exercicio 5:

let fridayChange = document.querySelector('#btn-friday').addEventListener('click', changeFriday)
let fridayClass = document.querySelectorAll('.friday');

// Recebe os inteiros correspondentes a sexta-feira e guarda
let numFriday = [];
for (let i = 0; i < fridayClass.length; i += 1) {
  numFriday.push(fridayClass[i].innerText);
}

//Verifica e troca o conteúdo da coluna Sexta-feira
function changeFriday () {
  for (let i = 0; i < fridayClass.length; i+= 1){
    if (fridayClass[i].innerText != 'Sextou!'){
      fridayClass[i].innerText = 'Sextou!'
    } else {
      console.log(numFriday)
      fridayClass[i].innerText = numFriday[i];
    }
  }
}

// Exercicio 6:
let liDay = document.querySelector('#days');
liDay.addEventListener('mouseover', dayMouseOver);
liDay.addEventListener('mouseout', dayMouseOut)

function dayMouseOver (event){
  event.target.style.fontSize = '30px';
  event.target.style.color = 'black'
};

function dayMouseOut (event){
  event.target.style.fontSize = '';
  event.target.style.color = '';

}

// Exercicio 7:
let tasksDiv = document.querySelector('.my-tasks');

function taskReceiver (task){
  tasksDiv.appendChild(document.createElement('span')).innerText = task;  
}

taskReceiver('Exercícios 5.3: ');

// Exercicio 8:

function taskColor (cor){
  tasksDiv.appendChild(document.createElement('div')).className = 'task';
  document.querySelector('.task').style.backgroundColor = cor;
}

taskColor('blue');

