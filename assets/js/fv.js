let stageW = 0; // 画面の幅
let stageH = 0; // 画面の高さ

// canvas要素の参照を取得
const canvas = document.querySelector("canvas");
// 2Dの描画命令群を取得
const context = canvas.getContext("2d");

noise.seed(Math.random());

resize();
tick();
window.addEventListener("resize", resize);

/** エンターフレームのタイミングです。 */
function tick() {
    requestAnimationFrame(tick);
    const time = Date.now() / 12000;
    draw(time);
}

/** 描画します。 */
function draw(time) {
    // 画面をリセット
    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 0.3;

    // ここから回転処理
    context.save();
    context.translate(stageW / 2, stageH / 2);
    context.rotate(160 * Math.PI / 180);
    context.translate(-stageW / 2, -stageH / 2);

    const amplitude = stageH / 8; // 振幅（縦幅)の大きさを抑える
    const lineNum = 100; // ラインの数
    const segmentNum = 1500; // 分割数

    [...new Array(lineNum).keys()].forEach((j) => {
        const coefficient = 50 + j;

        context.beginPath();
        context.strokeStyle = `#C7A575`;

        [...new Array(segmentNum).keys()].forEach((i) => {
            const x = (i / (segmentNum - 1)) * stageW;

            const px = i / coefficient;
            const py = j / 50 + time;
            const y = amplitude * noise.perlin2(px, py) + stageH / 2;

            if (i === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        });
        context.stroke();
    });

    // 回転解除
    context.restore();
}

/** リサイズ時のイベントです。 */
function resize() {
    stageW = innerWidth * devicePixelRatio;
    stageH = innerHeight * devicePixelRatio;

    canvas.width = stageW;
    canvas.height = stageH;
}

// cath要素の切り替え制御

document.addEventListener('DOMContentLoaded', () => {
    const cathElements = document.querySelectorAll('.main-canvas__cath');
    if (cathElements.length < 2) return; // 2つ以上なければ何もしない

    let current = 0;
    const interval = 4000; // 4秒ごとに切り替え

    // 初期状態
    cathElements.forEach((el, idx) => {
        if (idx === 0) {
            el.classList.add('main-canvas__cath--active');
            el.classList.remove('main-canvas__cath--hidden');
        } else {
            el.classList.add('main-canvas__cath--hidden');
            el.classList.remove('main-canvas__cath--active');
        }
    });

    setInterval(() => {
        const prev = current;
        current = (current + 1) % cathElements.length;

        if (cathElements[prev] && cathElements[current]) {
            cathElements[prev].classList.remove('main-canvas__cath--active');
            cathElements[prev].classList.add('main-canvas__cath--hidden');

            cathElements[current].classList.remove('main-canvas__cath--hidden');
            cathElements[current].classList.add('main-canvas__cath--active');
        }
    }, interval);
});