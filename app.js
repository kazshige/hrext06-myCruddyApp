$(document).ready(function(){
  console.log('jQuery loaded');

  const config = {
    emptyListMsg: 'nothing to display yet'
  };

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function() {
    // var was used before ES6; it's still being used because of compatibility issues
    // Gets input value
    const fieldValue = $('.text-entry').val();
    // Gets current user
    const userValue = $('.current-user').val();
    // Gets current Date on a string
    const now = Date();

    // Generates data
    const data = {
      message: fieldValue,
      user: userValue,
      date: now,
      views: 0
    };

    // Generates a key
    const key = genKey();

    // Saves data
    localStorage.setItem(key, JSON.stringify(data));

    // Shows updated list
    showList();
  });

  function genKey() {
    let key;
    do {
      key = Math.random();
    } while(localStorage.getItem(key) !== null);

    return key;
  }

  // Gets local storage
  function getStorage () {
    const ignore = [
      'length',
      'key',
      'setItem',
      'getItem',
      'removeItem',
      'clear'
    ];

    const data = [];

    for (const key in localStorage) {
      if(!ignore.includes(key)) {
        data.push(JSON.parse(localStorage.getItem(key)));
      }
    }

    console.log('data:', data);

    return data; // array! Can have 0 or more values/strings
  }

  // Shows updated list (from the local storage data)
  function showList () {
    const myData = getStorage();

    // We don't have values to show
    if(myData.length === 0) {
      $('.list-display-field').html(config.emptyListMsg);
    } else {
      const list = myData.reduce(
        (list, value, index) => `
          ${list}<div id="${index}">
            ${value.user}: ${value.message}
          </div>`
      , '');

      // display the value here
      $('.list-display-field').html(list);
    }
  }

  showList();

  const listContainer = $(".list-display-field");

  $('.btn-toggle').click(function() {
    listContainer.toggle();
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.clear();
    showList();
  });
});