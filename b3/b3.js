var n = 10;
var s = 0;
var p = 1;
for (var i = 1; i <= n; i++) {
    p = i * (i + 1);
    s = s + p;
}
console.log(`Giá trị của biểu thức = ${s}`);
