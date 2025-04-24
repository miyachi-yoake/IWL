// ハンバーガー
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
// const body = document.querySelector('body');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        // body.classList.toggle('is-active');
    });

    // メニュー内のaタグがクリックされたらis-activeを解除する
    const menuLinks = nav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('is-active');
            nav.classList.remove('is-active');
            // body.classList.remove('is-active');
        });
    });
}

// スムーススクロールの位置調整
document.addEventListener('DOMContentLoaded', () => {
    const headerHeight = 110; // ヘッダーの高さ

    // URLにハッシュが含まれている場合
    if (location.hash) {
        history.scrollRestoration = 'manual';

        setTimeout(() => {
            const target = document.querySelector(location.hash);
            if (target) {
                const rect = target.getBoundingClientRect();
                const scrollTop = window.scrollY;
                window.scrollTo(0, rect.top + scrollTop - headerHeight);
            }
        }, 100);
    }

    // ページ内リンクのクリック時
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const rect = target.getBoundingClientRect();
                const scrollTop = window.scrollY;
                window.scrollTo(0, rect.top + scrollTop - headerHeight);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const button = accordion.querySelector('.accordion__button');
        const content = accordion.querySelector('.accordion__content');

        if (button && content) {
            button.addEventListener('click', function () {
                accordion.classList.toggle('is-open');

                if (accordion.classList.contains('is-open')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        }
    });
});

// // swiper スライドある場合
// const swiper = new Swiper(".top-swiper", {
//     loop: true,
//     effect: "fade",
//     speed: 1000,
//     autoplay: {
//         disableOnInteraction: false,
//     },
// });