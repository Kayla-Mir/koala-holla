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

} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas

}
