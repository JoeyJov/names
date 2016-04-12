$(document).ready(function() {

  var firstName = '';
  var middleName = '';
  var lastName = '';

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-player-name').text(firstName);
  });
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    middleName = $('#middle-name').val();
    console.log(middleName);
    $('#show-player-name2').text(middleName);
  });
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    lastName = $('#last-name').val();
    console.log(lastName);
    $('#show-player-name3').text(lastName);
  });
  $('#first-name').focus();
});