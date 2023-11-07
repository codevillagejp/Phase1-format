// // - 片方のボタンを何回か押した時の回数カウント

// // cntPerson変数を初期化
// let cntPerson = 0;
// // cntUp関数を実行ごとに+1
//  const cntUp = function() {
//     cntPerson += 1;
//     // cntPerson変数の中身を表示
//     console.log(cntPerson)
//  };

// // - ボタンに応じた回数によって返す言葉の数を決める
// const reply = function() {
//     const str = "どうぞどうぞ";
//     const action = str.repeat(cntPerson);
//     alert(action);
//     cntPerson = 0;
// };


// // IE対応

// // - 片方のボタンを何回か押した時の回数カウント

// // cntPerson変数を初期化
// let cntPerson = 0;
// // cntUp関数を実行ごとに+1
//  const cntUp = function() {
//     cntPerson += 1;
//     // cntPerson変数の中身を表示
//     console.log(cntPerson)
//  };

// // - ボタンに応じた回数によって返す言葉の数を決める

// // strにコメントを代入
// const str = "どうぞどうぞ";

// // reply関数作成
// function reply(){
//     // result変数を初期化
//     let result = "";
//         // 繰り返し処理　iを初期化しcntPersonを超えるまで1ずつ増やしながらループ
//         for(let i=0;i<=cntPerson;i++){
//             // resultにstrの文字列を追加
//             result += str;
//         };
//     alert(result);
//     cntPerson = 0;
//   }


//   追加チャレンジ問題

// cntPerson変数を初期化
let cntPerson = 0;
// cntUp関数を実行ごとに+1
 const cntUp = function() {
    cntPerson += 1;
    // cntPerson変数の中身を表示
    console.log(cntPerson)
 };

// cntDown関数を実行ごとに-1
 const cntDown = function() {
    cntPerson -= 1;
    // cntPerson変数の中身を表示
    console.log(cntPerson)
    if(cntPerson < 0) {
        alert("もう誰もいない、、、");
        cntPerson = 0;
    }
 };


// - ボタンに応じた回数によって返す言葉の数を決める
const reply = function() {
    const str = "どうぞどうぞ";
    const action = str.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
};

// だちょー