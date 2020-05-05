'use strict'; {
    const posts = [{
            name: 'ジャスミン',
            text: 'Javascriptのお勉強中',
            likeCount: 0,
            show() {
                console.log(`Name: ${this.name} post: ${this.text} ${this.likeCount}いいね`);
            },
        },
        {
            name: 'ハーブ',
            text: 'githubで草を生やすことの意味について',
            likeCount: 0,
            show() {
                console.log(`Name: ${this.name} post: ${this.text} ${this.likeCount}いいね`);
            },
        },
    ]

    // show(posts[0]); // Name: ジャスミン post: Javascriptのお勉強中 0いいね
    // posts.forEach((post) => {
    //     show(post);
    // }); // Name: ジャスミン post: Javascriptのお勉強中 0いいね Name: ハーブ post: githubで草を生やすことの意味について 0いいね

    // メソッド呼び出し
    posts[0].show();
}