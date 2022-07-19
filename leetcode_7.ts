function reverse(x: number): number {
    let pos: boolean = true;
    if (x < 0) {
        x *= -1;
        pos = false;
    }

    let sum: number = 0;
    while (x > 0) {
        sum = sum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (sum < -1 * Math.pow(2, 31) || sum > Math.pow(2, 31) - 1) {
        return 0;
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
