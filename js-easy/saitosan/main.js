// const setBtn = function() {
//     // console.log("ok");
//     let random = Math.random() * 10
//     console.log(random)
//     // 0から5未満の時
//     if(random < 5) {
//         alert ("ぺぺっぺー");
//     }
//     else {
//         alert ("斎藤さんだぞ？");
//     }
// };


// 三項演算子

// const setBtn = function() {
//     const random = Math.random() * 10;
//     // console.log(random)
//     random < 5 ? alert('ぺっぺぺー') : alert('斎藤さんだぞ!');
// }

// 追加チャレンジ問題

// コメントの定義
const word1 = 'ぺっぺっぺー';
const word2 = '斎藤さんだぞぉぉぉぉぉ';


// 関数定義
const setBtn2 = function() {
    // 1から10の数字をランダムに作成
    const random = Math.random() * 10;
    console.log(random)
    if(random < 5) {
        const result = window.confirm(word1);
        if (result) {
            //「true」の処理
            alert(word1);
        } 
        else {
            //「false」の処理
            alert(word2);
        }
    }
    else {
        const result = window.confirm(word2);
        if (result) {
            //「true」の処理
            alert(word2);
        }
        else {
            //「false」の処理
            alert(word1);
        }
    }
};
