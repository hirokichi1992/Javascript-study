'use strict'; {
    const str = 'hello world';

    // 文字サイズ取得
    console.log(str.length);

    // 文字の一部分取得
    console.log(str.substr(2, 4)); // llo
    console.log(str.substring(2, 4)); // ll

    // 配列のようにもアクセス可能
    console.log(str[1]);

    // これは不可
    str[1] = 'j'; // エラー
    console.log(str[1]);
}