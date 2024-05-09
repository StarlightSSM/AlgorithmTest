const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = parseInt(input[0]);
const sentences = input.slice(1, n + 1);

const reversedList = sentences.map(sentence => {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
});

reversedList.forEach(reversedSentence => {
    console.log(reversedSentence);
});
