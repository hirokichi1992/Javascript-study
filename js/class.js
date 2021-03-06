'use strict'; {

    // 親クラス
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
        // static showInfo() {
        //     console.log('静的メソッド内ではthisは使えない。理由はインスタンスからの呼び出しではない為。constructorで使用しているthisはインスタンス化されたオブジェクトのこと。');
        // }
    }

    // 子クラス
    class SponsoredPost extends Post {
        constructor(sponsor, text) {
            // this キーワードを使うには constructor() の最初で super() とする必要がある。→ 親クラスのコンストラクターが呼ばれる
            super(text);
            this.sponsor = sponsor
        }

        show() {
                // superに繋げて書けば親クラスのメソッド(show)を呼べる
                super.show();
                console.log(`sponsored by ${this.sponsor}`);
            }
            // 静的メソッド→クラスから直接呼び出し可
            // static showInfo() {
            //     console.log('静的メソッド内ではthisは使えない。理由はインスタンスからの呼び出しではない為。constructorで使用しているthisはインスタンス化されたオブジェクトのこと。');
            // }
    }

    // インスタンス化
    const posts = [
        new Post('aso', '今日も日本の財政を良くするぞ'),
        new Post('kono', '今日も日本の外交を良くするぞ'),
        new SponsoredPost('ひめりん', '今日も元気に姫路城'),
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
    // posts[0].like();


    // 静的メソッドの呼び出し
    // Post.showInfo();


    //　呼び出し
    // posts.forEach((post) => {
    //     post.like();
    // })

    // 上記の省略系
    posts.forEach((post) => post.like())

}