'use strict'; {
    class Post {
        constructor(name, text) {
            this.name = name,
                this.text = text,
                this.likeCount = 0
        }

        show() {
            console.log(`Name: ${this.name} post: ${this.text} ${this.likeCount}いいね`);
        }
    }
    const posts = [
        new Post('aso', '今日も日本の財政を良くするぞ'),
        new Post('kono', '今日も日本の外交を良くするぞ'),
    ]

    // show(posts[0]); // Name: ジャスミン post: Javascriptのお勉強中 0いいね
    // posts.forEach((post) => {
    //     show(post);
    // }); // Name: ジャスミン post: Javascriptのお勉強中 0いいね Name: ハーブ post: githubで草を生やすことの意味について 0いいね

    // メソッド呼び出し
    posts[0].show();
}