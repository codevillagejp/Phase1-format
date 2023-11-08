// // - スタートボタンを押す　×

// // iの初期化　〇
// let intervalId = 0
// let i = 0;
// // startTimer変数にsetIntervalを定義　△
// // setInterval内には処理を無名関数にまとめて記述　△
// const startTimer = setInterval((intervalId) => {
//     // - 1秒ごとに1を足す
//     i++;
//     // - スタートしてから40秒経ったら強制終了 〇
//     if (i >= 40) {
//     i = 0;
//     }
//     console.log(i);
// }, 1000);


// // - 確認ボタンを押す　×

// const confirmTime = clearInterval((startTimer) => {
// });
// // - 20秒以上21秒未満だったら成功ですとアラート　×
// if (i >= 20 && i < 21) {
//     alert("成功です");
// }
// // - 20秒未満or21秒以上の場合、その秒数をアラートして再スタート出来るようにする　×
// else {
//     alert(i)
//     i = 0;
// }

// インターバルIDの取得
let timer = 0;
// sec変数の初期化
let sec = 0;

// 要素の取得
const confirmTime = document.getElementById('confirmTime');
const startTimer = document.getElementById('startTimer');

// 確認ボタンを押したとき
confirmTime.addEventListener('click',function() {
    if (sec >= 20 && sec < 21) {
        alert("成功です");
    }
    else {
        alert(sec);       
    }
    clearInterval(timer);
    sec = 0;
});

// 文字カウントアクションをcountUp定数に代入
const countUp = () => {
    sec += 1;
    console.log(sec);
    if (sec === 40) {
      clearInterval(timer);
      alert('終了/また挑戦しろ');
      sec = 0;
    }
  };

// スタートボタンを押したとき
startTimer.addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval(countUp, 1000);
  });

// グローバルIDの意味
// https://qiita.com/kogache/items/b478295903fab6962af6
