$(document).ready(onReady);

function onReady() {
  $('#addButton').on('click', setupClickListeners);
  getKoalas();
}

const clearInputs = () => {
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#genderIn').val('');
  $('#readyForTransferIn').val('');
  $('#notesIn').val('');
}

function setupClickListeners() {
  console.log('in addButton on click');
  // get user input and put in an object
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val(),
  };
  // call saveKoala with the new obejct
  saveKoala(koalaToSend);
  clearInputs();
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas

  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((response) =>{
    const koalas = response;
    $('#viewKoalas').empty();
    console.log('GET /koalas response:', koalas);
    for(let koala of koalas){
      if(koala.ready_to_transfer === 'N'){
        $('#viewKoalas').append(`
          <tr>
            <td>${koala.name}</td>
            <td>${koala.gender}</td>
            <td>${koala.age}</td>
            <td>${koala.ready_to_transfer}</td>
            <td>${koala.notes}</td>
            <td><button class="readyBtn" data-id="${koala.id}">Ready For Transfer</button></td>
          </tr>
        `)
      }else{
        $('#viewKoalas').append(`
        <tr>
          <td>${koala.name}</td>
          <td>${koala.gender}</td>
          <td>${koala.age}</td>
          <td>${koala.ready_to_transfer}</td>
          <td>${koala.notes}</td>
        </tr>
      `)
      }
    }
  })
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas

}

function readyToTransfer(){
  const koalaToMark = $(this).data('id');
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaToMark}`
  }).then((res) =>{
    getKoalas();
  }).catch((error) =>{
    console.log('readyToTransfer error:', error);
  })
}
