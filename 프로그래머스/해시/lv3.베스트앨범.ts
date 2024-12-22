/**
 * 24.12.22
 * [lv3] 베스트앨범 - 해시
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */

// <개선코드> - 코테합 책 참조
function solution(genres: string[], plays: number[]) {
  const result = [];
  const genresObj: Record<string, number[][]> = {};
  const playSums: Record<string, number> = {}; //  { jazz: 250, rap: 1000, hiphop: 550 }
  // genresObj
  // { jazz: [ [ 0, 100 ], [ 3, 100 ], [ 4, 50 ] ],
  //   rap: [ [ 1, 1000 ] ],
  //   hiphop: [ [ 2, 50 ], [ 5, 500 ] ]

  genres.forEach((g, i) => {
    if (!genresObj[g]) {
      genresObj[g] = [];
      playSums[g] = 0;
    }
    genresObj[g].push([i, plays[i]]);
    playSums[g] += plays[i];
  });

  const sortedGenres = Object.keys(playSums).sort(
    (a, b) => playSums[b] - playSums[a]
  ); // [ 'rap', 'hiphop', 'jazz' ]

  for (let genre of sortedGenres) {
    const ranks = genresObj[genre].sort((a, b) => b[1] - a[1]);

    result.push(...ranks.slice(0, 2).map((r) => r[0]));
  }

  return result;
}

// <기존 풀이>
function solution(genres: string[], plays: number[]) {
  const result = [];
  const genrePlay: Record<string, number[][]> = {};
  // { jazz: [ [ 0, 100 ], [ 3, 100 ], [ 4, 50 ] ],
  //   rap: [ [ 1, 1000 ] ],
  //   hiphop: [ [ 2, 50 ], [ 5, 500 ] ]

  genres.forEach((g, i) => {
    if (!genrePlay[g]) {
      genrePlay[g] = [];
    }
    genrePlay[g].push([i, plays[i]]);
  });

  const playSums = []; //  [ [ 1000, 'rap' ], [ 550, 'hiphop' ], [ 250, 'jazz' ] ]
  for (let genre in genrePlay) {
    const sum = genrePlay[genre].reduce((acc, cur) => acc + cur[1], 0);
    playSums.push([sum, genre]);
  }
  playSums.sort((a, b) => b[0] - a[0]);

  for (let [sum, genre] of playSums) {
    const ranks = genrePlay[genre].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 2; i++) {
      if (!ranks[i]) {
        break;
      }
      result.push(genrePlay[genre][i][0]);
    }
  }

  return result;
}

// console.log(
//   solution(
//     ["classic", "pop", "classic", "classic", "pop"],
//     [500, 600, 150, 800, 2500]
//   )
// ); // [4, 1, 3, 0]

console.log(
  solution(
    ["jazz", "rap", "hiphop", "jazz", "jazz", "hiphop"],
    [100, 1000, 50, 100, 50, 500]
  )
); //  [1, 5, 2, 0, 3]
