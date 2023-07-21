let kg = +prompt("Hãy nhập cân nặng của bạn (kg)");
let m = +prompt("Hãy nhập chiều cao của bạn (m)");
let bmi = kg / Math.pow(m, 2);
if (bmi < 18.5) {
    alert("Cân nặng thấp (gầy)");
}
else if (18.5 <= bmi && bmi < 25) {
    alert("Bình thường");
}
else if (25 <= bmi && bmi < 30) {
    alert("Thừa cân: Tiền béo phì");
}
else if (30 <= bmi && bmi < 35) {
    alert("Thừa cân: Béo phì độ I");
}
else if (35 <= bmi && bmi < 40) {
    alert("Thừa cân: Béo phì độ II");
}
else {
    alert("Thừa cân: Béo phì độ III");
}