var chessboard = document.getElementById("chessboard");

var size = 8;

for (var i = 0; i < size; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < size; j++) {
        var cell = document.createElement("td");

        if ((i + j) % 2 === 0) {
            cell.className = "white";
        } else {
            cell.className = "black";
        }

        row.appendChild(cell);
    }

    chessboard.appendChild(row);
}

console.log(chessboard);
