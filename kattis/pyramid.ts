// https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript

function pyramid(n: number): Array<Array<number>> {
    let rtnArr: Array<Array<number>> = [];
    for (let i = 1; i <= n; i++) {
        let a: Array<number> = [];
        for (let x = 0; x < i; x++) {
            a.push(1);
        }

        rtnArr.push(a);
    }

    return rtnArr;
}

console.log(pyramid(3));
