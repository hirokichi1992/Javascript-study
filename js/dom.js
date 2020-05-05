'use strict'; {
    // function change() {
    //     // document.querySelector('h1').textContent = 'changed word';
    //     // document.querySelector('#target').textContent = 'changed word';
    //     // document.getElementById('target').textContent = 'changed word';
    //     // document.querySelector('p').textContent = 'changed word'; // 1番目しか変更されない
    //     // document.querySelectorAll('p')[2].textContent = 'changed word'; // 全て取得可能→配列のようにアクセス可能
    //     // forEachで全取得したp要素のテキストを順番に変更する
    //     document.querySelectorAll('p').forEach((p, num) => {
    //         p.textContent = `${num}番目のp要素です`;
    //     })
    // }


    // ボタンを押したら何らかの処理を実行する
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        targetNode.textContent = 'changed word'; // textの変更
        targetNode.title = 'this is changed title from javascript'; // titleの変更
        targetNode.style.color = "red"; // css colorの変更（非推奨-CSSとの役割が曖昧になるのでクラスのつけ外しによって制御する方法が推奨）
        targetNode.style.background = "blue"; // css backgroundの変更（非推奨-CSSとの役割が曖昧になるのでクラスのつけ外しによって制御する方法が推奨）
    })

}