$(document).ready(function(){
     const correctAnswers = ["2009", "name", "code", "js"];
     const questions = ["Which year Nazarbayev University was founded?",
     "What does HTML stand for?",
     "What is the programming language used to make interactive websites?",
     "What is the abbreviation for JavaScript?"];
     const choiceOptions = [["2009", "2010", "2008", "2011"],
     ["name", "number", "style", "code"],
     ["python", "css", "html", "js"],
     ["java", "json", "js", "xml"]];
     const numQuestions = questions.length;
     let currentQuestion = 0;
     let score = 0;

     function displayQuestion() {
          const question = questions[currentQuestion];
          const choices = choiceOptions[currentQuestion];
          let choiceHtml = '';
      
          for(let i = 0; i < choices.length; i++) {
              choiceHtml += '<label><input type="radio" name="choice" value="' + choices[i] + '">' + choices[i] + '</label><br>';
          }
      
          $('#quiz-box').html('<div class="question"><p>' + question + '</p>' + choiceHtml + '</div><button id="checkAnswer" class="button-3">Check Answer</button>');
      }
      
      function checkAnswer() {
          const userAnswer = $('input[name=choice]:checked').val();
          if(userAnswer === correctAnswers[currentQuestion]) {
              score++;
          }
      }
      
      $('#quiz-box').on('click', '#checkAnswer', function() {
          checkAnswer();
          currentQuestion++;
      
          if(currentQuestion < numQuestions) {
              displayQuestion();
          } else {
              $('#quiz-box').html('<p>You have answered all of the questions. Your score is ' + score + ' out of ' + numQuestions + '.</p>');
          }
      });
      
      displayQuestion();
     });