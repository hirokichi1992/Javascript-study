'use strict'; {
    const posts = [{
            name: 'ジャスミン',
            text: 'Javascriptのお勉強中',
            likeCount: 0,
        },
        {
            name: 'ハーブ',
            text: 'githubで草を生やすことの意味について',
            likeCount: 0,
        },
    ]

    function show(post) {
        console.log(`Name: ${post.name} post: ${post.text} ${post.likeCount}いいね`);
    }

    // show(posts[0]); // Name: ジャスミン post: Javascriptのお勉強中 0いいね
    // posts.forEach((post) => {
    //     show(post);
    // }); // Name: ジャスミン post: Javascriptのお勉強中 0いいね Name: ハーブ post: githubで草を生やすことの意味について 0いいね
}