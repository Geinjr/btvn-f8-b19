var soKwh = 500;
var giaDien;
if (soKwh <= 50) {
    giaDien = soKwh * 1678;
} else if (soKwh <= 100) {
    giaDien = 50 * 1678 + (soKwh - 50) * 1734;
} else if (soKwh <= 200) {
    giaDien = 50 * 1678 + 50 * 1734 + (soKwh - 100) * 2014;
} else if (soKwh <= 300) {
    giaDien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (soKwh - 200) * 2536;
} else if (soKwh <= 400) {
    giaDien =
        50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (soKwh - 300) * 2834;
} else {
    giaDien =
        50 * 1678 +
        50 * 1734 +
        100 * 2014 +
        100 * 2536 +
        100 * 2834 +
        (soKwh - 400) * 2927;
}

console.log(`Số tiền điện phải trả là: ${giaDien} VND`);
