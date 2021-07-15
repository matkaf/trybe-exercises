const submitBtn = document.querySelector('#submit-btn')

function submitPrevent (event){
  event.preventDefault();
}

submitBtn.addEventListener('click', submitPrevent);