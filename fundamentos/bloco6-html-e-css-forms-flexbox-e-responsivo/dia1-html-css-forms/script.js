const submitBtn = document.querySelector('#submit-btn')

function submitPrevent (event){
  event.preventDefault();
}

submitBtn.addEventListener('click', submitPrevent);

function listaEstados (){
  const estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
  const siglas = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  let statesSelect = document.querySelector('#state');
  
  for (let i in estados) {
    let statesOption = document.createElement('option');
    statesSelect.appendChild(statesOption).innerText = estados[i];
    statesSelect.appendChild(statesOption).value = siglas[i];
  }
}

let picker = new Pikaday({
  field: document.getElementById('beginDate'),
  format: 'DD/MM/YYYY',
  yearRange: [2010,2021],
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },

  parse(dateString, format = 'DD/MM/YYYY') {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  },

  i18n: {
    previousMonth : 'Mês Anterior',
    nextMonth     : 'Próximo Mês',
    months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    weekdays      : ['Domingo','Segunda','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'],
    weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
},

});
function formValidation () {
  validation.init('#exercise', {
    events: ["change", "paste", "blur", "keyup"],
  });

  validation.highlight();

}

window.onload = function () {
  listaEstados();
  picker;
  formValidation();
}