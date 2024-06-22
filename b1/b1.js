var way = 100;
var money;

if (way < 0) {
    console.log("Không tồn tại");
} else if (way <= 1) {
    money = 15000 * way;
    console.log(`Số tiền = ${money}`);
} else if (way <= 5) {
    money = 15000 * 1 + 13500 * (way - 1);
    console.log(`Số tiền = ${money}`);
} else if (way <= 120) {
    money = 15000 * 1 + 13500 * 4 + 11000 * (way - 5);
    console.log(`Số tiền = ${money}`);
} else {
    money = (15000 * 1 + 13500 * 4 + 11000 * (way - 5)) * 0.9;
    console.log(`Số tiền = ${money}`);
}
