$(document).ready(function() {

  var firstName = '';
  var playerAnswer1= '';
  var answer1= 'Baseball'

  $('.question').hide();


  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-player-name').text(firstName);
    $('#welcome-screen').addClass('animated fadeOut');
    setTimeout(removeWelcomeScreen, 1000);
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
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
    $('#show-player-name2').show().addClass('animated fadeIn');
    $('#show-player-name3').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn');
  };
  $('#question1-btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer1 = $('input-question1').val().trim();
  	console.log(playerAnswer1);
  	showPlayerAnswer1();
  });
  function showPlayerAnswer1(){
  	$('#show-player-answer1').text(playerAnswer1);
  	$('#correct-answer1').text(answer1);
  };
});