let date = +prompt("Hãy nhập ngày sinh của bạn");
let month = +prompt("Hãy nhập tháng sinh của bạn");
switch (month) {
    case 1:
        if (date < 20) {
            alert("Cung Ma Kết")
        } else {
            alert("Cung Bảo Bình")
        }
        break;
    case 2:
        if (date < 19) {
            alert("Cung Bảo Bình")
        } else {
            alert("Cung Song Ngư")
        }
        break;
    case 3:
        if (date < 21) {
            alert("Cung Song Ngư")
        } else {
            alert("Cung Bạch Dương")
        }
        break;
    case 4:
        if (date < 20) {
            alert("Cung Bạch Dương")
        } else {
            alert("Cung Kim Ngưu")
        }
        break;
    case 5:
        if (date < 21) {
            alert("Cung Kim Ngưu")
        } else {
            alert("Cung Song Tử")
        }
        break;
    case 6:
        if (date < 22) {
            alert("Cung Song Tử")
        } else {
            alert("Cung Cự Giải")
        }
        break;
    case 7:
        if (date < 23) {
            alert("Cung Cự Giải")
        } else {
            alert("Cung Sư Tử")
        }
        break;
    case 8:
        if (date < 23) {
            alert("Cung Sư Tử")
        } else {
            alert("Cung Xử Nữ")
        }
        break;
    case 9:
        if (date < 23) {
            alert("Cung Xử Nữ")
        } else {
            alert("Cung Thiên Bình")
        }
        break;
    case 10:
        if (date < 24) {
            alert("Cung Thiên Bình")
        } else {
            alert("Cung Hổ Cáp")
        }
        break;
    case 11:
        if (date < 22) {
            alert("Cung Hổ Cáp")
        } else {
            alert("Cung Nhân Mã")
        }
        break;
    case 12:
        if (date < 22) {
            alert("Cung Nhân Mã")
        } else {
            alert("Cung Ma Kết")
        }
        break;
}