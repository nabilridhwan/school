// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

function hexStringToRGB(hexString) {
    const h = hexString.split("").slice(1);

    let cols = ["r", "g", "b"];
    let a = [];
    let o = {};
    for (let i = 0; i < h.length; i += 2) {
        a.push(`${h[i]}${h[i + 1]}`);
    }

    a.forEach((h, i) => {
        o[cols[i]] = parseInt(h, 16);
    });

    return o;
}

console.log(hexStringToRGB("#ff9933"));
