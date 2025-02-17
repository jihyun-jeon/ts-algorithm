// 잘 이해가 안됨
/**
 * 25.02.17
 * [Lv2] 모음사전 - 완전탐색,백트래킹
 * https://school.programmers.co.kr/learn/courses/30/lessons/84512
 */

function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const words = [];

  function backtrack(currentWord) {
    if (currentWord.length > 5) return;
    words.push(currentWord);

    for (let vowel of vowels) {
      backtrack(currentWord + vowel);
    }
  }

  backtrack("");

  return words.indexOf(word);
}

console.log(solution("EIO")); // 118

/*
 [
  '',      'A',     'AA',    'AAA',   'AAAA',  'AAAAA', 'AAAAE',
  'AAAAI', 'AAAAO', 'AAAAU', 'AAAE',  'AAAEA', 'AAAEE', 'AAAEI',
  'AAAEO', 'AAAEU', 'AAAI',  'AAAIA', 'AAAIE', 'AAAII', 'AAAIO',
  'AAAIU', 'AAAO',  'AAAOA', 'AAAOE', 'AAAOI', 'AAAOO', 'AAAOU',
  'AAAU',  'AAAUA', 'AAAUE', 'AAAUI', 'AAAUO', 'AAAUU', 'AAE',
  'AAEA',  'AAEAA', 'AAEAE', 'AAEAI', 'AAEAO', 'AAEAU', 'AAEE',
  'AAEEA', 'AAEEE', 'AAEEI', 'AAEEO', 'AAEEU', 'AAEI',  'AAEIA',
  'AAEIE', 'AAEII', 'AAEIO', 'AAEIU', 'AAEO',  'AAEOA', 'AAEOE',
  'AAEOI', 'AAEOO', 'AAEOU', 'AAEU',  'AAEUA', 'AAEUE', 'AAEUI',
  'AAEUO', 'AAEUU', 'AAI',   'AAIA',  'AAIAA', 'AAIAE', 'AAIAI',
  'AAIAO', 'AAIAU', 'AAIE',  'AAIEA', 'AAIEE', 'AAIEI', 'AAIEO',
  'AAIEU', 'AAII',  'AAIIA', 'AAIIE', 'AAIII', 'AAIIO', 'AAIIU',
  'AAIO',  'AAIOA', 'AAIOE', 'AAIOI', 'AAIOO', 'AAIOU', 'AAIU',
  'AAIUA', 'AAIUE', 'AAIUI', 'AAIUO', 'AAIUU', 'AAO',   'AAOA',
  'AAOAA', 'AAOAE',
  ... 3806 more items
] 1189

        ""
      /  |   |   |   \
     A   E   I   O   U
    /|\  |\  |\  |\  |\
   AA AE AI AO AU EA EE EI EO EU IA IE II IO IU OA OE OI OO OU UA UE UI UO UU
  /| | | | |  
 AAA AAE AAI AAO AAU
 /| | | |  
AAAA AAAE AAAI AAAO AAAU  

*/
