let t = +prompt("Nhập điểm môn Toán của bạn");
let l = +prompt("Nhập điểm môn Lý của bạn");
let h = +prompt("Nhập điểm môn Hóa của bạn");
let v = +prompt("Nhập điểm môn Văn của bạn");
let s = +prompt("Nhập điểm môn Sử của bạn");
let đ = +prompt("Nhập điểm môn Địa của bạn");
let đtb = (t + l + h + v + s + đ) / 6;
alert(`Điểm trung bình môn: ${đtb}`)
if (8 <= đtb && đtb <= 10) {
    alert("Xếp loại Giỏi");
}
else if (6.5 <= đtb && đtb < 8) {
    alert("Xếp loại khá");
}
else if (5 <= đtb && đtb < 6.5) {
    alert("Xếp loại trung bình");
}
else {
    alert("Xếp loại yếu");
}