const quiz =[
{
  question:"What is the color of the sun?",
  answer:"yellow",
},
{
  question:"What year is it?",
  answer: 2021,
},
{
  question:"What is my name?",
  answer: "Clarisa",
},
{
  question:"What is my e-mail?",
  answer: "z.clarisa@yahoo.com",
},
{
  question:"What month does summer start?",
  answer:"June",
}
];

let turn = 0;
let count = 0;

$('#submit').click(checkAnswer);
showQuestion();

function showQuestion() {
  $('#question').text(quiz[turn].question);
  $('#counter').text(turn+1);

}
function checkAnswer() {
    if (answer.value == quiz[turn].answer) 
    {
      $('#message').text("Well Done, that is Correct!");
      count++;
      showTurn();
      nextQuestion();
    } else 
    {
      $('#message').text("Oops, that is Wrong. Try again!");
      count++;
      showTurn();
    }
}
function showTurn() {
  if (answer.value == quiz[turn].answer){
    $('#count').text(count);
  }
  else {
    $('#count').text(count);
  }
}

function nextQuestion() {
  turn++;
  if (turn < quiz.length) {
    showQuestion();
  } else {
    $('body').html("Congratulations for completing the quiz!");
  }
}