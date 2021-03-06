'use strict'; {
    // function change() {
    //     // document.querySelector('h1').textContent = 'changed word';
    //     // document.querySelector('#target').textContent = 'changed word';
    //     // document.getElementById('target').textContent = 'changed word';

    // 　 　// p用をの1番目しか変更されない
    //     // document.querySelector('p').textContent = 'changed word';

    //     // 全て取得可能→配列のようにアクセス可能
    //     // document.querySelectorAll('p')[2].textContent = 'changed word';

    //     // forEachで全取得したp要素のテキストを順番に変更する
    //     document.querySelectorAll('p').forEach((p, num) => {
    //         p.textContent = `${num}番目のp要素です`;
    //     })
    // }


    // ボタンを押したら何らかの処理を実行する
    document.querySelector('button').addEventListener('click', () => {
        // 操作したいノードを取得
        const targetNode = document.getElementById('target');

        // textの変更
        // targetNode.textContent = 'changed word';

        // titleの変更
        //targetNode.title = 'this is changed title from javascript';

        // css colorの変更（非推奨-CSSとの役割が曖昧になるのでクラスのつけ外しによって制御する方法が推奨）
        // targetNode.style.color = "red";

        // css backgroundの変更（非推奨-CSSとの役割が曖昧になるのでクラスのつけ外しによって制御する方法が推奨）
        // targetNode.style.background = "blue";


        // 元から指定ノードにクラスがついている場合、元のクラスは消えてしまう
        // targetNode.className = "mycolor";

        // 元から付加されているクラスを消さないためには、両方指定する必要がある
        // targetNode.className = "mycolor myborder";


        // classList.addを使ってクラスを追加する
        // targetNode.classList.add("mycolor");

        // classList.containを使ってクラスが含まれているか確認する→条件分岐に使う
        // if (targetNode.classList.contains('mycolor') === true) {
        // classList.removeでクラスを外す
        //     targetNode.classList.remove('mycolor');
        // } else {
        //　classList.addでクラスを追加する
        //     targetNode.classList.add('mycolor');
        // }

        // classList.toggleを使ってクラスのつけ外しを実行する
        // targetNode.classList.toggle('mycolor');


        // カスタムデータ属性（data-translation）で指定した値に置き換える → targetNode.dataset.translationと取り出すところに注意
        // targetNode.textContent = targetNode.dataset.translation;


        // // li要素を新規追加する

        // // createElementで要素を作成
        // const item2 = document.createElement('li');

        // // 作成した要素のテキストを設定
        // item2.textContent = 'item2';

        // // 追加したい親要素ulを取得
        // const ul = document.querySelector('ul');

        // // ul要素の末尾に追加したい要素item2を追加する
        // ul.appendChild(item2);


        // // 既に存在している要素を複製、挿入する

        // // コピーするアイテムを取得
        // const item0 = document.querySelectorAll('li')[0];

        // // item0をコピーしてcopyに代入
        // const copy = item0.cloneNode(true);

        // // コピー先の親ノードを取得
        // const ul = document.querySelector('ul');

        // // コピーしたい場所の後ろの要素を取得
        // const item2 = document.querySelectorAll('li')[2];

        // // ul要素内のitem2の前にcopy要素を追加する
        // ul.insertBefore(copy, item2);


        // // 要素を削除する

        // // 削除するli要素を取得
        // const item1 = document.querySelectorAll('li')[1];

        // // IEでは非対応
        // // item1.remove();

        // // 代わりにこっちを使う
        // // 親ノード.removeChild('削除するノード');
        // document.querySelector('ul').removeChild(item1);


        // // input入力された値をli要素に追加する

        // // liを作成
        // const li = document.createElement('li');

        // // input要素を取得
        // const input = document.querySelector('input');

        // // input要素のテキストを入力値に設定
        // li.textContent = input.value;

        // // 親ノードを取得
        // const ul = document.querySelector('ul');

        // // li要素をul要素の最後に追加
        // ul.appendChild(li);

        // // input要素の入力値を消す
        // input.value = '';

        // // inputm要素にFocusさせる
        // input.focus();


        // select要素で選択した要素をul要素内にli要素として追加
        // const li = document.createElement('li');
        // const select = document.querySelector('select');
        // li.textContent = `${select.value}`;

        // document.querySelector('ul').appendChild(li);


        // // ラジオボタンで選択した要素をul要素内にli要素として追加
        // const colors = document.querySelectorAll('input');
        // let selectedColor;

        // // ラジオボタンがチェックされている場合に変数にラジオボタンのvalueを代入する
        // colors.forEach((color => {
        //     if (color.checked === true) {
        //         selectedColor = color.value;
        //     }
        // }));

        // const li = document.createElement('li');
        // li.textContent = selectedColor;
        // document.querySelector('ul').appendChild(li);


        // チェックボックスで選択した要素をul要素内にli要素として追加
        const colors = document.querySelectorAll('input');
        const selectedColor = [];

        colors.forEach((color => {
            if (color.checked === true) {
                // pushで配列へ追加
                selectedColor.push(color.value)
            }
        }));

        const li = document.createElement('li');
        // 複数配列が文字列へ変換される時、デフォルトでは「,」区切りで追加される
        // li.textContent = selectedColor;
        li.textContent = selectedColor.join(' & ');
        document.querySelector('ul').appendChild(li);
    })

}