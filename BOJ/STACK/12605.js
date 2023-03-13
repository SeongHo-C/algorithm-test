// 단어순서 뒤집기

const [N, ...testCases] = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

function solution(testCases) {   
    // 테스트 케이스 인덱스를 따로 관리
    let caseIndex = 1;

    for(let testCase of testCases) {
        let answer = `Case #${caseIndex}:`
        const arr = testCase.split(' ');

        const len = arr.length;
        for(let j = 0; j < len; j++) {
            answer += ` ${arr.pop()}`;
        }

        console.log(answer);
        caseIndex++;
    }
}

solution(testCases);