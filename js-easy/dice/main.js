"use strict"
// HTMLのbtn要素を取得してstartBtn変数に代入
const startBtn = document.getElementById('diceBtn');
// HTMLのbody要素を取得してbody変数に代入
const body = document.querySelector('body');
// dice変数にimg要素を代入
const dice = document.createElement('img');
// dice変数の中に入っているimgタグのstyle属性を指定しており、js側から指定できる書き方
dice.style.width = '100px';
dice.style.height = '100px';

// 画像のパスを入れるdiceNum変数を作成
let diceNum = './img/saikoro1.png';
// <img src = diceNum>
dice.setAttribute('src', diceNum);
// bodyの子要素としてdice(<img src = diceNum></img>)を追加する
body.appendChild(dice);

const randomlyChangeTheImage = function() {
    console.log("test");
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute('src', diceNum);
};
// イベントclickが発生したときdiceBtn要素
diceBtn.addEventListener('click', () => {
let timer = setInterval("randomlyChangeTheImage", 100);
// let timer = setInterval("randomlyChangeTheImage", 100);←関数定義前に使用するときは引数を文字列で渡す、定義後はふつう
// timer関数の画像の切り替わりを解除する(clearInterval)処理を3秒後に1度だけ(setTimeout)行う
  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});
// randomlyChangeTheImage(); 定義エラー

// 関数の巻き上げも関数の先頭で宣言されたように扱われます。ただし、巻き上げられるのは宣言部分のみなので、この時点ではその中身の代入までは行われません。
// https://analogic.jp/hoisting/


