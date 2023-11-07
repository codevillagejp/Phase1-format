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
// イベントclickが発生したときdiceBtn要素
diceBtn.addEventListener('click', function() {
let timer = setInterval(randomlyChangeTheImage, 100);
// timer関数の画像の切り替わりを解除する(clearInterval)処理を3秒後に1度だけ(setTimeout)行う
  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});
// randomlyChangeTheImage(); 定義エラー

const randomlyChangeTheImage = function() {
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute('src', diceNum);
};