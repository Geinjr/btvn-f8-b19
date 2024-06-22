var container = document.getElementById("multiplication");
var multiplication = "";

for (let i = 1; i <= 10; i++) {
    multiplication += `<div class='table'>`;
    multiplication += `<div class='bảng'>Bảng ${i}</div>`;
    for (let j = 1; j <= 10; j++) {
        multiplication += `${i} * ${j} = ${i * j}<br>`;
    }
    multiplication += `</div>`;
}

container.innerHTML = multiplication;
console.log(container);
