const message= document.getElementById("message")
function startGame() {
        
    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " начинают");
}

function setMessage(msg) {
    message.innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + " уже выиграли игру, начните снова");
    } else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("Это поле занято");
    }
}

function switchTurn() {

    if (checkForWinner(document.turn)) {
        setMessage(document.turn + " выиграли!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("Ход ноликов");
    } else {
        document.turn = "X";
        setMessage("Ход крестиков");
    }
}

function checkForWinner(move) {
    let result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}
