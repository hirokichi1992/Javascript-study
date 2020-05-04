'use strict'; {

    const otherProps = {
        r: 100,
        color: 'blue',
    };

    const point = {
        x: 100,
        y: 200,
        ...otherProps, // スプレッド構文:「...」を前につけることで配列に配列を追加できる
    };


    // 分割代入・レスト構文:：...othersにはpointの残りのオブジェクトが格納される
    const { x, r, ...others } = point;


    // オブジェクトの参照
    // console.log(point.x);
    // console.log(point['y']);


    // オブジェクト要素の変更
    // point.x = 120;
    // point['y'] = 900;
    // console.log(point);


    // オブジェクト要素の追加・削除
    // point.z = 80;
    // delete point.x;
    // console.log(point);


    // Object.Keys:オブジェクトの要素を配列として取得する→オブジェクトに対してforEachは使えないので一旦配列として取得する
    // const keys = Object.keys(point);
    // console.log(keys);


    // foreach:要素をひとつづつ取り出す
    // keys.forEach(key => {
    //     console.log(`Key: ${key}, Value: ${point[key]}`)
    // })


    // 配列内のオブジェクトへのアクセス方法
    const points = [
        { x: 10, y: 30, },
        { x: 20, y: 60, },
        { x: 30, y: 120, },
    ];
    // console.log(points[1].y);


    // 変数に代入した時と配列に代入した時の挙動の違い
    // 変数
    // let a = 1;
    // let b = 4;
    // b = a;
    // a = 7;
    // console.log(a); // 7
    // console.log(b); // 1


    // 配列
    // let a = [1, 2];
    // let b = [4, 6];
    // b = a;
    // a[0] = 7;
    // console.log(a); // [7, 2]
    // console.log(b); // [1, 2] にならず[7, 2]となる→複雑なデータ型（配列、オブジェクト）の場合、データはコピーされず参照される為このようか挙動になる


    // オブジェクト
    // let a = { q: 1, w: 2 };
    // let b = { e: 4, r: 6 };
    // b = a;
    // a.q = 7;
    // console.log(a); // {q:7, w:2}
    // console.log(b); // {q:1, w:2} にならず{q:7, w:2}となる→複雑なデータ型（配列、オブジェクト）の場合、データはコピーされず参照される為このようか挙動になる


    // スプレッド演算子を使用すると値をコピーできる(配列)
    // let a = [1, 2];
    // let b = [4, 6];
    // b = [...a]; // スプレッド演算子
    // a[0] = 7;
    // console.log(a); // [7, 2]
    // console.log(b); // [7, 2]


    // スプレッド演算子を使用すると値をコピーできる(オブジェクト)
    let a = { q: 1, w: 2 };
    let b = { e: 4, r: 6 };
    b = {...a }; // スプレッド演算子
    a.q = 7;
    console.log(a); // {q:7, w:2}
    console.log(b); // {q:7, w:2}
}