// https://www.codewars.com/kata/533c46b140aafec05b000d31/train/javascript

function translate(sentence) {
    const vowels = ["a", "e", "i", "o", "u"];

    const _sentence = sentence.split(" ").map((word) => word.toLowerCase());

    const newSentence = [..._sentence];

    // Go through each word and check if the first letter is a vowel
    _sentence.forEach((word, index) => {
        const firstLetter = word.split("")[0];
        const lastLetter = word.split("")[word.length - 1];
        if (vowels.includes(firstLetter)) {
            // Its a vowel
            newSentence[index] += "way";
        } else {
            // Add "ay" at the back of each word
            const letters = word.split("");
            letters.shift();

            // Check if last letter is an alphabet or not
            if (lastLetter.match(/[a-z]/i)) {
                // Last letter is a letter
                letters.push(firstLetter);
                letters.push("ay");
            } else {
                // Pop the last letter
                letters.pop();
                letters.push(firstLetter);
                letters.push("ay");
                letters.push(lastLetter);
            }
            const joinedLetters = letters.join("");

            newSentence[index] = joinedLetters;
        }
    });

    if (newSentence.length > 1) {
        // Capitalize first letter in the first word
        const firstWord = newSentence[0].split("");

        newSentence[0] = `${firstWord[0].toUpperCase()}${firstWord
            .slice(1)
            .join("")}`;
    }

    return newSentence.join(" ");
}

console.log(translate("How are you?"));
