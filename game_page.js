var p1= localStorage.getItem("p1");
var p2= localStorage.getItem("p2");

var p1_score=0;
var p2_score=0;

document.getElementById("p1_name").innerHTML=p1+"-";
document.getElementById("p2_name").innerHTML=p2+"-";

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;

document.getElementById("player-question").innerHTML="Question turn - "+p1;
document.getElementById("player-answer").innerHTML="Answer turn - "+p2;

function send(){
    var word = document.getElementById("word").value;
    var question=word;
    word=word.toLowerCase();
    f = word.charAt(1);
    m = word.charAt(word.length/2);
    l = word.charAt(word.length-1);
    word=word.replace(f,"_");
    word=word.replace(m,"_");
    word=word.replace(l,"_");
    q="<h4 id='word_display'>Q1."+ word+"</h4>";
    i =" <br>Answer:<input type='text' id='input_check'></input>";
    b = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    box=q+i+b;
    document.getElementById("output").innerHTML=box;
    document.getElementById("word").value=" ";
}
var question_turn="p1";
var answer_turn="p2";
function check(){
    var answer = document.getElementById("input_check").value;
    answer= answer.toLowerCase();
    if(answer == question){
        if( answer_turn == "p1"){
            p1_score = p1_score + 1;
            document.getElementById("p1_score").innerHTML = p1_score;
        }
        else{
            p2_score = p2_score + 1;
            document.getElementById("p2_score").innerHTML = p2_score;
        }
    }
    if(question_turn == "p1"){
        question_turn = "p2";
        answer_turn = "p1";
        document.getElementById("player_question").innerhtml= "question_turn - "+  p2_name;
        document.getElementById("player_answer").innerhtml="answer_turn - "+  p1_name;
    }
    else{
        question_turn = "p1";
        answer_turn = "p2";
        document.getElementById("player_question").innerhtml= "question_turn - "+  p1_name;
        document.getElementById("player_answer").innerhtml="answer_turn - "+  p2_name;        
    }
}