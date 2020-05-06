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


    // テキストエリアの値を取得
    const text = document.querySelector('textarea');

    // フォーカスを当てた時
    text.addEventListener('focus', () => {
        console.log('テキストエリアをフォーカスしました！');
    });

    // フォーカスを外した時
    text.addEventListener('blur', () => {
        console.log('テキストエリアからフォーカスを外しました！');
    });

    // 入力した時
    text.addEventListener('input', () => {
        console.log('テキストエリアに入力しました！');
    });

    // 入力が確定した時（フォーカスが外れた時）
    text.addEventListener('change', () => {
        console.log('テキストエリアへの入力が確定しました！');
    });

}