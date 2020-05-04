'use strict'; {
    // const d = new Date();

    // console.log(d);

    // 日時の取得(年月日)
    // console.log(`${d.getFullYear()}年${d.getMonth() +1}月${d.getDate()}日`);


    // 日時の指定
    const d = new Date(2020, 4); // 2020/05/01 00:00:00
    // 時間指定
    d.setHours(12, 30, 30); // 2020/05/01 12:30:30
    // 日付指定
    d.setDate(4); // 2020/05/04 12:30:30
    // 3日後
    d.setDate(d.getDate() + 3); // 2020/05/07 12:30:30

    console.log(d);
}