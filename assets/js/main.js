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

// ドロップダウンメニューの制御
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.nav__dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const parent = toggle.closest('.nav__item--has-child');
            const isActive = parent.classList.contains('is-active');

            // 他のドロップダウンを閉じる
            document.querySelectorAll('.nav__item--has-child').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('is-active');
                }
            });

            // クリックされたドロップダウンの状態を切り替え
            parent.classList.toggle('is-active');
        });
    });

    // ドロップダウン外のクリックで閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__item--has-child')) {
            document.querySelectorAll('.nav__item--has-child').forEach(item => {
                item.classList.remove('is-active');
            });
        }
    });
});

// // swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    // speed: 2000,
    slidesPerView: 2.2,
    // slidesPerGroup: 2.2,
    spaceBetween: 30,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.7,

            spaceBetween: 30,
        }
    }
});

// =============================
// main-canvas__cath01→cath02 順次ふわっと表示
// =============================
// document.addEventListener('DOMContentLoaded', () => {
//     const cath01 = document.querySelector('.main-canvas__cath01');
//     const cath02 = document.querySelector('.main-canvas__cath02');
//     if (!('IntersectionObserver' in window) || !cath01 || !cath02) return;
//
//     let timer = null;
//
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.target === cath01) {
//                 if (entry.isIntersecting) {
//                     cath01.classList.add('main-canvas__cath--active');
//                     // 700ms後にcath02を表示
//                     timer = setTimeout(() => {
//                         cath02.classList.add('main-canvas__cath--active');
//                     }, 700);
//                 } else {
//                     cath01.classList.remove('main-canvas__cath--active');
//                     cath02.classList.remove('main-canvas__cath--active');
//                     if (timer) clearTimeout(timer);
//                 }
//             }
//         });
//     }, {
//         threshold: 0.2
//     });
//
//     observer.observe(cath01);
// });
