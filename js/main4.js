'use strict'; {
    const str = 'hello world';

    // 文字サイズ取得
    // console.log(str.length);

    // 文字の一部分取得
    // console.log(str.substr(2, 4)); // llo
    // console.log(str.substring(2, 4)); // ll

    // 配列のようにもアクセス可能
    // console.log(str[1]);

    // これは不可
    // str[1] = 'j'; // エラー
    // console.log(str[1]);


    // join:配列結合
    const d = [2020, 5, 4];
    console.log(d.join('/'));
    console.log(d.join(''));


    // split:文字列分割→配列化
    const t = '10:57:29';
    console.log(t.split(':'));


    // split×分割代入
    const [hour, minutes, second] = t.split(':');
    console.log(hour);
    console.log(minutes);
    console.log(second);

}