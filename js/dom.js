'use strict'; {
    function change() {
        // document.querySelector('h1').textContent = 'changed word';
        // document.querySelector('#target').textContent = 'changed word';
        // document.getElementById('target').textContent = 'changed word';
        // document.querySelector('p').textContent = 'changed word'; // 1番目しか変更されない
        // document.querySelectorAll('p')[2].textContent = 'changed word'; // 全て取得可能→配列のようにアクセス可能
        // forEachで全取得したp要素のテキストを順番に変更する
        document.querySelectorAll('p').forEach((p, num) => {
            p.textContent = `${num}番目のp要素です`;
        })

    }

    // 1000ms後に呼び出し
    setTimeout(change, 1000);
}