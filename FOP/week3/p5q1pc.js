let a1 = 2;
let a2 = 16;
let a3 = 0;

let out_a1 = ""
let out_a2 = ""
let out_a3 = ""

for(let a1 = 2; a1 <= 16; a1 += 2){
    out_a1 += " " + a1
}

for(let a2 = 16; a2 >= 1; a2 = a2 / 2){
    out_a2 += " " + a2
}

for(let a3 = 0; a3 >= -9; a3--){
    out_a3 += " " + a3
}

console.log(out_a1)
console.log(out_a2)
console.log(out_a3)