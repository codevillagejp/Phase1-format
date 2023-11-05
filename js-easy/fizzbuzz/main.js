// // 値の初期化
// let v = 0;
// // rewriteNum変数にrewriteNumIDの要素を取得
// const rewriteNum = document.getElementById('rewriteNum');
// // HTMLのrewriteNumをvに書き換える
// rewriteNum.innerHTML = v;
    
// // 一連の処理をrewriteCntUp関数でまとめる?構文の意味が不明　変数?関数?
// const rewriteCntUp = function() {
// // function()　定義の（）　
// // 定数　定義されてる　変わらない数 一連の処理など変わってもらっては困るもの
// // 変数　変わる数　　let answer = 1 + 2 + 5

//     // 1ずつ値を増やす 
//     v += 1;
//     //  3と5の公倍数の場合
//     if ( v % 3 === 0 && v % 5 === 0) {
//         // さっきvに変更したHTMLのrewriteNumを'fizzbuzz'に変更する
//         rewriteNum.innerHTML = 'fizzbuzz';
//     //  3の倍数の場合
//     } else if (v % 3 === 0) {
//         // さっきvに変更したHTMLのrewriteNumを'fizz'に変更する
//         rewriteNum.innerHTML = 'fizz';
//     //  5の倍数の場合
//     } else if (v % 5 === 0) {
//         // さっきvに変更したHTMLのrewriteNumを'buzz'に変更する
//         rewriteNum.innerHTML = 'buzz';
//     //  その他の場合
//     } else {
//         // さっきvに変更したHTMLのrewriteNumをvに変更する
//         rewriteNum.innerHTML = v;
//     }
// }


// 追加チャレンジ問題


// // 値の初期化
let i = 0

// // showNum変数にshowNumIDのHTMLを取得
const showNum = document.getElementById('showNum');
// // showNumのHTMLをiに変更
showNum.innerHTML = i;


// fizzbtnの処理

// fizzbtn定数に関数を代入
const fizzBtn = function() {
    // iに1を足す
    i += 1;
    // 3で割れるとき
    if (i % 3 === 0) {
    // showNumのHTMLをfizzに変更
        showNum.innerHTML = 'fizz';
    }
    // それ以外はぶっぶー表示し現在ページをリロードして初めから
    else{
        alert('ぶっぶーですわ');
        location.reload()
    }
};

// buzzBtnの処理

const buzzBtn = function() {
    i += 1;
    if (i % 5 === 0) {
      showNum.innerHTML = 'buzz';
    } else {
      alert('ぶっぶーですわ');
      location.reload();
    }
  };

  // fizzbuzzBtnの処理

  const fizzbuzzBtn = function() {
    i += 1;
    if ((i % 3 === 0) & (i % 5 === 0)) {
      showNum.innerHTML = 'fizzbuzz';
    } else {
      alert('ぶっぶーですわ');
      location.reload();
    }
  };

    // numBtnの処理 3の倍数でも5の倍数でもないもののみiを表示させる

  const numBtn = function() {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
      alert('ぶっぶーですわ');
      location.reload();
    }
    showNum.innerHTML = i;
  };


