'use strict'; {

    // 文字操作


    // const str = 'hello world';


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
    // const d = [2020, 5, 4];
    // console.log(d.join('/'));
    // console.log(d.join(''));


    // split:文字列分割→配列化
    // const t = '10:57:29';
    // console.log(t.split(':'));


    // split×分割代入
    // const [hour, minutes, second] = t.split(':');
    // console.log(hour);
    // console.log(minutes);
    // console.log(second);






    // 数値操作

    const scores = [9, 80, 50];

    let sum = 0;

    // 配列からひとつずつ取り出して合計する
    scores.forEach(score => {
        sum += score;
    })

    // 上記で取り出した合計値を配列数で割り、平均を算出する
    const avg = sum / scores.length;

    console.log(sum);
    console.log(avg);

    console.log(Math.floor(avg)); // 切り捨て
    console.log(Math.ceil(avg)); // 切り上げ
    console.log(Math.round(avg)); // 四捨五入
    console.log(avg.toFixed(3)); // 小数点以下3桁表示

    // 乱数生成
    console.log(Math.random());



}