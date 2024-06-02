const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーが変更されたら、カラーコードを表示
// 無名関数を使っている
color.addEventListener('input', () => {
  text.textContent = `カラーコード：${color.value}`;
});
