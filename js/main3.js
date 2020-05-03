'use strict'; {
    const point = {
        x: 100,
        y: 200,
    };

    // オブジェクトの参照
    // console.log(point.x);
    // console.log(point['y']);

    // オブジェクト要素の変更
    // point.x = 120;
    // point['y'] = 900;
    // console.log(point);

    // オブジェクト要素の追加・削除
    point.z = 80;
    delete point.x;
    console.log(point);
}