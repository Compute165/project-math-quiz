function myLogin() {
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "gamePage.html";
}