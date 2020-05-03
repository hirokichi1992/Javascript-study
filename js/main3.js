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

    const points = [
        { x: 10, y: 30, },
        { x: 20, y: 60, },
        { x: 30, y: 120, },
    ];

    // 配列内のオブジェクトへのアクセス方法
    console.log(points[1].y);
}