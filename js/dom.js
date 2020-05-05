'use strict'; {
    function change() {
        // document.querySelector('h1').textContent = 'changed word';
        // document.querySelector('#target').textContent = 'changed word';
        document.getElementById('target').textContent = 'changed word';
    }

    // 1000ms後に呼び出し
    setTimeout(change, 1000);
}