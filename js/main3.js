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

    console.log(point);
    console.log(x);
    console.log(r);
    console.log(others);
}