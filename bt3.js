let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let x = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
switch (x) {
    case "/":

        if (b !== 0) document.write(`Kết quả của phép tính trên: a / b = ${a / b}`);
        else document.write("Không tồn tại phép tính");
}
