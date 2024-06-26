/*
ローディングから画面遷移
================================================== */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン） 
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden'
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（グリーンスクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh'],
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8, // 0.8秒後に開始
      },
      {
        opacity: 0,
        offset: 1, // 1秒後に終了
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
画像ギャラリー
================================================== */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// for (let i = 0; i < thumbImages.length; i++) {
  // thumbImages[i].addEventListener('mouseover', (event) => {
    // mainImage.src = event.target.src;
    // mainImage.animate({opacity: [0, 1]}, 500);
  // });
// }
thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});


// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target);
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// /fadeinを監視するように指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

