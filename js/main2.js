'use strict'; {
    const scores = [90, 80, 100];
    // console.log(scores[0]);

    // constで定義した配列でも配列内要素に対しての変更は可能
    // scoresそのものに対しての上書きは不可
    // scores[2] = 70;
    // console.log(scores);

    // 末尾に追加
    // scores.push(40, 60);
    // 先頭から削除
    // scores.shift();
    // 80, 100, 40, 60


    // 配列の途中に要素を追加または削除する→splice('開始位置','削除する個数','追加する要素');
    scores.splice(1, 1, 30, 59);

    // 配列の要素数は'length'で取得→配列の増減に対応できる
    for (let i = 0; i < scores.length; i++) {
        console.log(`Scores${i} : ${scores[i]}`);
    }

}