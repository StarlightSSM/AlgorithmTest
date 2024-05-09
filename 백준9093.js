const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// 입력할 문장 개수
const n = parseInt(input[0]);
// 입력할 문장(단어들)
const sentences = input.slice(1, n + 1);

// 각 문장 안에 들어 있는 단어들만 추출해서 거꾸로 뒤집은 다음에 다시 변경 내용을 저장한다.
// 이때 문장은 '\n' 단위로 끊어서 나눈다.(입력할 때 \n 줄바꿈(엔터)를 쳐서 입력해야 됨)
const reversedList = sentences.map(sentence => {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
});

// 변경된 문장들을 출력한다.
reversedList.forEach(reversedSentence => {
    console.log(reversedSentence);
});
