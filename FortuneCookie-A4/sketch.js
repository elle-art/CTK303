$(document).ready(function() {

    var fortunecookie = {};
    fortunecookie.listOfAnswers = ["It matters not what you've done, but what you do with what you've done for others.", "Don't worry. Pitbull's been there, done that.", "Drop out.", "WWRD. What would Reggie do.", "Live. Laugh. Love", "You will catch a scent in the wind[like a fart]."];
  
    $("#answer").hide();
    $("#eatedCookie").hide();

  
    fortunecookie.omNomNom = function() {
  
    $("#cookie").fadeOut(100);

      $("#eatedCookie").fadeIn(3000);
      $("#answer").fadeIn(3000);
  
      var randomNumber = Math.random();
  
      var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
      var randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      var answer = this.listOfAnswers[randomIndex];
  
      $("#answer").text(answer);
  
      console.log(answer);
    };
  
    var onClick = function() {
  
      $("#answer").hide();

      $("#cookie").attr("src", "closedFortune.jpg");

      $("#cookie").effect("shake");
  
     fortunecookie.omNomNom();
      
    };
  
    $("#questionButton").click(onClick);
  
  });