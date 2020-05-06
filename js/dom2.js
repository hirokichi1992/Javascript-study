'use strict'; {
    // ボタンをダブルクリックするとコンソールへ表示
    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('ダブルクリックしました！');
    })

    // ドキュメント上でマウスを動かすとコンソールへ表示
    // document.addEventListener('mousemove', () => {
    //     console.log('マウスを動かしました！');
    // })

    // ドキュメント上でマウスを動かすとコンソールへXY座標表示
    document.addEventListener('mousemove', e => {
        console.log(`X座標：${e.clientX}　Y座標：${e.clientY}`);
    })

    // ドキュメント上でキーボードを押すとコンソールへキー表示
    document.addEventListener('keydown', e => {
        console.log(e.key);
    })
}