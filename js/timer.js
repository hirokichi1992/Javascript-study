'use strict'; {
    // アラート
    // alert('yahoo');

    // 削除する時の確認時に使用する
    // const answer = confirm('削除しますか？');
    // answer === true ? console.log('削除しました') : console.log('キャンセルしました');

    // カウンタ
    let i = 0;

    // 時間を表示する関数
    function showTime() {
        console.log(new Date);
        i++;
        if (i > 2) {
            // clearInterval: setIntervalを取り消す
            clearInterval(IntervalId);
        }
    }

    // setInterval(): showTime関数を1000ms毎に繰り返す
    const IntervalId = setInterval(showTime, 1000);

}