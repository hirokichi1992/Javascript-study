'use strict'; {
    // アラート
    // alert('yahoo');

    // 削除する時の確認時に使用する
    // const answer = confirm('削除しますか？');
    // answer === true ? console.log('削除しました') : console.log('キャンセルしました');

    // カウンタ
    let i = 0;

    // 時間を表示する関数
    // function showTime() {
    //     console.log(new Date);
    //     i++;
    //     if (i > 2) {
    //         // clearInterval: setIntervalを取り消す
    //         clearInterval(IntervalId);
    //     }
    // }

    // setInterval(): showTime関数を1000ms毎に繰り返す → 呼び出した処理が終わっていなくても実行される
    // const IntervalId = setInterval(showTime, 1000);


    // setTimeout(): 指定時間後に1回だけ実行する

    // function showTime() {
    //     console.log(new Date);
    // }

    // setTimeout(showTime, 1000);


    // setTimeoutを使った繰り返し処理方法 → 呼び出した処理が終わってから実行される
    function showTime() {
        console.log(new Date);
        // 1s後にshowTime()を実行
        const TimeoutId = setTimeout(showTime, 1000);
        // カウンタ増分
        i++;
        if (i > 2) {
            // TimeoutIdを取り消し
            clearTimeout(TimeoutId);
        }
    }

    // showTime();


    // 例外処理（toUpperCaseに数値が指定されていた場合）
    const name = 33;

    try {
        console.log(name.toUpperCase());
    } catch (e) {
        console.log(e); // TypeError: name.toUpperCase is not a function at timer.js:55
    } finally {
        console.log('最後に必ず実行されます');
    }
}