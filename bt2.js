let t = prompt("Mời nhập tháng vào (1 / 2 /...12)");
switch (t) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write(`Tháng ${t} có 31 ngày`)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write(`Tháng ${t} có 30 ngày`)
        break;
    case 2:
        document.write(`Tháng ${t} có 28 ngày`)
}