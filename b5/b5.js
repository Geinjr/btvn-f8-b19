window.onload = function () {
    var container = document.getElementById("triangle");
    var n = 5;
    var result = "";
    var currentNumber = 1;

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            result = result + currentNumber + " ";
            currentNumber++;
        }
        result += "<br>";
    }

    container.innerHTML = result;
};
