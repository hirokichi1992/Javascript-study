'use strict'; {
    // 定数
    const score = 4;

    // switch
    switch (score) {
        case 100:
            console.log('good');
            break;
        case 90:
            console.log('bad');
            break;
        case 50:
            console.log('oh my gosh');
            break;
        default:
            console.log('hahaha');
    }


    // for
    for (let i = 0; i < 10; i++) {
        console.log(`hello ${i}`);
    }


    // do while
    let num = -90;
    do {
        console.log(`${num} number!`);
        num -= 10;
    } while (num > 0);


    // break, continue
    for (let i = 0; i < 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(`${i}`);
    }


    // funstion
    function showAd(message = "hello world") { // 仮引数
        console.log(`------${message}------`);
    }

    showAd('Hello Javascript'); // 実引数


    // return
    function sum(a, b, c) {
        return a + b + c;
    }

    const Sum = sum(1, 2, 3) + sum(22, 35, 66);
    console.log(Sum);


    // 関数式
    const Diff = function(a, b) {
        return a - b;
    };

    console.log(Diff(10, 5));


    // 以下の3つは同じ意味

    // 関数宣言
    // function double(a) {
    //     return a * 2;
    // }

    // 関数式
    // const double = function(a) {
    //     return a * 2;
    // };

    // アロー関数
    // 省略可能((), function, return)
    const double = a => a * 2;
    console.log(double(6));


    // スコープ
    const x = 1000;

    function test() { // 関数内ではローカルスコープ優先される
        const x = 100;
        return x;
    }

    console.log(test()); // ローカル
    console.log(x); // グローバル
}