$(document).ready(function() {

  var firstName = '';
  var playerAnswer1= '';
  var answer1= 'Baseball'
  var correctCounter= 0;


  // FIRST NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-player-name').text(firstName);
    $('#welcome-screen').addClass('animated fadeOut');
    setTimeout(removeWelcomeScreen, 1000);
  });
  // MIDDLE NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    middleName = $('#middle-name').val();
    console.log(middleName);
    $('#show-player-name2').text(middleName);
   });
  // LAST NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    lastName = $('#last-name').val();
    console.log(lastName);
    $('#show-player-name3').text(lastName);
  });
  // FIRST NAME START
  $('#first-name').focus();

  // REMOVE WELCOME SCREEN
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
    $('#show-player-name2').show().addClass('animated fadeIn');
    $('#show-player-name3').show().addClass('animated fadeIn');
    $('.question1').show().addClass('animated fadeIn').focus();
	};

	// hides question 1
	$('.question1').hide();
	$('correct-msg1').hide();
	$('incorrect-msg1').hide();

	// QUESTION 1 BUTTON
  $('#question1-btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer1 = $('#input-question1').val().trim().toLowerCase();
  	console.log('The players answer for question 1 is ' + playerAnswer1);
  	answerCheck1();
  });

  // SHOWS ANSWERS
  function showPlayerAnswer1(){
  	$('#show-player-answer1').text(playerAnswer1);
  	$('#correct-answer1').text(answer1);
  };

  // CHECK ANSWER
  function answerCheck1() {
  	if(playerAnswer1 === answer1) {
  		console.log("Player's answer is correct");
  		$('#correct-msg1').show().addClass('animated fadeIn');
  		correctCounter++;
  		$('#score').text(correctCounter);
  	}
  	else {
  		console.log("Player's answer is Incorrect!");
  		$('#incorrect-msg1').show().addClass('animated fadeIn');
  	}
  }
});