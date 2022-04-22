let min = 0;
let max = 2 ** 6;

for(let m = 0; m < max; m++){

    let b = m.toString(2);

    if(b.length < 6){
        b = "0".repeat(6 - b.length) + b;
    }

    console.log(b)
}