$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function() {
    var myItemInStorage = localStorage.getItem('inputFieldValue');

    if(myItemInStorage) {
      myItemInStorage = JSON.parse(myItemInStorage);
    } else {
      myItemInStorage = [];
    }
    
    var fieldValue = $('.text-entry').val();

    myItemInStorage.push(fieldValue);

    localStorage.setItem('inputFieldValue', JSON.stringify(myItemInStorage));
    
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??
  });
  
  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});