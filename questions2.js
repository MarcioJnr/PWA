var answers = {};
var question = 1;

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3;
    
    return total_score;
}

var nextquestion = document.getElementById('next-question');
var previousquestion = document.getElementById('previous-question');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);
    

    $(el).show();
    $(el2).hide();
}

function previousQuestion(question_number){
    var current_question_number = question_number + 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    $(el).show();
    $(el2).hide();
}

nextquestion.addEventListener('click', function(){
    if(question<4) 
    {
    question = question + 1;
    nextQuestion(question);
    document.getElementById("page-question").innerHTML = question.toString() + "/3";
    }
    if(question == 4){
        document.getElementById("slidezin").style.display = "none";
        document.getElementById("navblue").style.display = "none";
        document.getElementById("navwhite").style.display = "block";
        if(totalScore() >= 0){
            document.getElementById("printtotalscore").innerHTML = totalScore();
        }
        else{
            document.getElementById("printtotalscore2").innerHTML = "Porém não respondeu todas as questões"
            document.getElementById("printtotalscore2").style.color = "red"
        }
    }
})

previousquestion.addEventListener('click', function(){
    if(question>1) 
    {
    question = question - 1;
    previousQuestion(question);
    document.getElementById("page-question").innerHTML = question.toString() + "/3"
    }
})
