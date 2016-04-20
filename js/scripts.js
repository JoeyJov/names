$(document).ready(function() {

  var firstName = '';
  var playerAnswer1= '';
  var answer1= 'baseball';
  var correctCounter= 0;
  var triesLeft= 3;


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

	// HIDE
	$('.question1').hide();
	$('.correct-msg1').hide();
	$('.incorrect-msg1').hide();
	$('#lose-game-msg').hide();

	/*****************************************************
		QUESTION 1
	*****************************************************/

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

  // FADE OUT FUNCTION
  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg1').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion1() {
    $('#question1').addClass('animated fadeOut');
    setTimeout($('#question1').detach(), 2500);
    $('#question2').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated fadeOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn')
    };
  };

  // CHECK ANSWER
  function answerCheck1() {
  	if(playerAnswer1 === answer1) {
  		console.log("Player's answer is correct");
  		$('.correct-msg1').show().addClass('animated fadeIn');
  		correctCounter++;
  		$('#score').text(correctCounter);
  		setTimeout(fadeOutAnswerCheckMsg, 2500);
  	}
  	else {
  		console.log("Player's answer is Incorrect!");
  		$('.incorrect-msg1').show().addClass('animated fadeIn');
  		setTimeout(fadeOutAnswerCheckMsg, 2500);
  	}
  }

  /**********************************************************
	QUESTION 2 
  ***********************************************************/

  // QUESTION 2 BUTTON
  $('question2btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer2 = $('#input-question2').val().trim().toLowerCase();
  	console.log('The players answer is ' + playerAnswer2);
  	answerCheck2();
  });

  // SHOW ANSWERS 2
  function showPlayerAnswer2(){
  	$('#show-player-answer2').text(playerAnswer1);
  	$('#correct-answer2').text(answer2);
  };

  // CHECK ANSWERS 2
  	function checkAnswer2(){
  		if(playerAnswer2 === answer2) {
  			console.log("Players answer is correct!");
  			$('correct-msg2').show().addClass('animated fadeIn');
  			correctCounter++;
  			$('#score').text(correctCounter);
  			setTimeout(fadeOutAnswerCheckMsg, 2500);
  		}
  		else{
  			console.log("Players answer is incorrect!");
  			$('.incorrect-msg2').show().addClass('animated fadeIn');
  			setTimeout(fadeOutAnswerCheckMsg, 2500);
  		}
  	}
});