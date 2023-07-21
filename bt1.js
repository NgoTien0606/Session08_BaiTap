let kg = +prompt("Nhập cân nặng của bạn (kg)");
let m = +prompt("Nhập chiều cao của bạn (m)");
let bmi = kg / (m * m);
console.log(kg + m);
document.writeln("Cân nặng của bạn là:" + " " + kg);
document.writeln("Chiều cao của bạn là:" + " " + m);
document.writeln(`Chỉ số BMI: ${bmi}`);
if (bmi < 18.5) {
    document.writeln("Cân nặng thấp (gầy)");
}
else {
    if (18 <= bmi && bmi < 25) { document.writeln("Thừa cân"); }
    if (25 <= bmi && bmi < 30) { document.writeln("Tiền béo phì"); }
    if (30 <= bmi && bmi < 35) { document.writeln("Béo phì độ I"); }
    if (35 <= bmi && bmi < 40) { document.writeln("Béo phì độ II"); }
    if (40 <= bmi) { document.writeln("Béo phì độ III"); }
} 
