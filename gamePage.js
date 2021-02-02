function send() {
    num1 = document.getElementById("player1_name_input").value;
    num2 = document.getElementById("player2_name_input").value;

    fAns = parseInt(num1) * parseInt(num2);

    row = "<h4>" + num1 + " X " + num2 + "</h4> <br>Answer : <input type='text' id='inputAnsBox'>  <br><br><button class='btn btn-info' onclick='verify()'>Check</button>"

    document.getElementById("output").innerHTML = row;

    document.getElementById("player1_name_input").value = "";
    document.getElementById("player2_name_input").value = "";
}