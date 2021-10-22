/*
    P2007421
    Nabil Ridhwanshah
    DIT/FT/1B/05
*/

function commonCharacters(word1, word2){
    let commonLetters = [];

    word1.split("").forEach(w1Letter => {

        word2.split("").forEach(w2Letter => {

            if(w1Letter == w2Letter){
                if(commonLetters.includes(w1Letter) == false){
                    commonLetters.push(w1Letter)
                }
                
            }
        })
        
    })

    return commonLetters;
}

console.log(commonCharacters("john", "ron"))
console.log(commonCharacters("abc", "bnc"))
console.log(commonCharacters("intestines", "gallbladder"))