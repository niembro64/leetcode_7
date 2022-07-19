function reverse(x: number): number {
    if (x < -1 * Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
        return 0;
    }

    let pos: boolean = true;
    if (x < 0) {
        x *= -1;
        pos = false;
    }

    let e: number = 0;
    while (Math.pow(10, e) - 1 < x) {
        e++;
    }
    e--;
    // console.log("x", x, "e", e);
    let temp: number = 0;
    let sum: number = 0;
    for (let i = 0; i <= e; i++) {
        temp = Math.floor(x / Math.pow(10, e - i));
        x -= Math.pow(10, e - i) * temp;
        sum += Math.pow(10, i) * temp;
        // console.log("x", x, "e", e, "i", i, "temp", temp, "sum", sum);
    }

    return pos ? sum : sum * -1;
}
// 1534236469
// 9646324351

var a: number[] = [123, -123, 120, 10, 1000, 7999, 99989, 1534236469];

for (let i = 0; i < a.length; i++) {
    console.log(reverse(a[i]));
    console.log("_____________");
}

console.log(Math.pow(2, 31) - 1);
console.log(1534236469);
