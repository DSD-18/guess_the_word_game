function Adduser(){
 p1=document.getElementById("player1_name_input").value;
 p2=document.getElementById("player2_name_input").value;
 localStorage.setItem("p1", p1);
 localStorage.setItem("p2", p2);
window.location="game_page.html";
}