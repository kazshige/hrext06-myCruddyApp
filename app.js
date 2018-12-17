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

    // myItemInStorage.push(fieldValue); // ["test1","test2","test3"]
    myItemInStorage.push(fieldValue); // {"0":"test1","1":"test2","2":"test3"}

    localStorage.setItem('inputFieldValue', JSON.stringify(myItemInStorage));
    
    console.log('myItemInStorage', myItemInStorage);

    const list = myItemInStorage.reduce(
      (list, currentValue, index) => `${list}<div id="${index}">${currentValue}</div>`
    , '');

    // display the value here
    $('.list-display-field').html(list); // ??
  });  
});