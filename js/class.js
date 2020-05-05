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

        like() {
            this.likeCount++;
            this.show();
        }

        // 静的メソッド→クラスから直接呼び出し可
        static showInfo() {
            console.log('静的メソッド内ではthisは使えない。理由はインスタンスからの呼び出しではない為。constructorで使用しているthisはインスタンス化されたオブジェクトのこと。');
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
    // posts[0].show();


    // 以下のように直接プロパティにアクセスできるが、プロパティ名の変更時等に修正が大変になるのでプロパティを操作するにはメソッド利用する→カプセル化
    // posts[0].likeCount++
    // posts[0].show();


    // 追加メソッド呼び出し
    posts[0].like();


    // 静的メソッドの呼び出し
    Post.showInfo();
}