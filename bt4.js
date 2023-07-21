let a = +prompt("Hãy nhập vào số a");
let b = +prompt("Hãy nhập vào số b");
let c = +prompt("Hãy nhập vào số c");
if (a > b && b > c) {
    console.log(`Max là ${a}`);
    console.log(`Min là ${c}`);
}
else if (a > b && b < c && a > c) {
    console.log(`Max là ${a}`);
    console.log(`Min là ${b}`);
}
else if (a > b && b < c && a < c) {
    console.log(`Max là ${c}`);
    console.log(`Min là ${b}`);
}
else if (a > b && b == c) {
    console.log(`Max là ${a}`);
    console.log(`Min là ${b}`);
}
else if (a < b && b < c) {
    console.log(`Max là ${c}`);
    console.log(`Min là ${a}`);
}
else if (a < b && b > c && a > c) {
    console.log(`Max là ${b}`);
    console.log(`Min là ${c}`);
}
else if (a < b && b > c && a < c) {
    console.log(`Max là ${b}`);
    console.log(`Min là ${a}`);
}
else if (a < b && b == c) {
    console.log(`Max là ${b}`);
    console.log(`Min là ${a}`);
}
else if (a == b && b > c) {
    console.log(`Max là ${b}`);
    console.log(`Min là ${c}`);
}
else if (a == b && b < c) {
    console.log(`Max là ${c}`);
    console.log(`Min là ${a}`);
}
else if (a == b && b == c) {
    console.log(`Max = Min = ${a}`);
}
alert(a);