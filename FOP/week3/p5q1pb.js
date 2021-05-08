let a1 = 2;
let a2 = 16;
let a3 = 0;

let out_a1 = ""
let out_a2 = ""
let out_a3 = ""

do {
    out_a1 += " " + a1
    a1 += 2
} while (a1 <= 16);

do {
    out_a2 += " " + a2
    a2 = a2 / 2
} while (a2 >= 1);

do {
    out_a3 += " " + a3
    a3--
} while (a3 >= -9);

console.log(out_a1)
console.log(out_a2)
console.log(out_a3)