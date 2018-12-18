$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function() {
    var myItemInStorage = localStorage.getItem('inputFieldValue');

    if(myItemInStorage) {
      myItemInStorage = JSON.parse(myItemInStorage);
    } else {
      myItemInStorage = {}; // if diplay in array => myItemInStorage = {} 
    }
    
    var fieldValue = $('.text-entry').val();

    // myItemInStorage.push(fieldValue); // ["apple","orange","kiwi"]
    myItemInStorage[Object.keys(myItemInStorage).length] = fieldValue; // {"0":"apple","1":"orange","2":"kiwi"}

    localStorage.setItem('inputFieldValue', JSON.stringify(myItemInStorage));
    
    console.log('myItemInStorage', myItemInStorage);

    const list = Object.values(myItemInStorage).reduce(
      (list, currentValue, index) => `${list}<div id="${index}">${currentValue}</div>`
    , '');

    // display the value here
    $('.list-display-field').html(list); // ??
  });  
});