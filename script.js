const dino = document.querySelector('.dino');
const dino1 = document.querySelector('.dino1');
const cactus = document.querySelector('.cactus');
const start = document.querySelector('.start');
const res = document.querySelector('.restart');
const score = document.querySelector('.score');
const end = document.querySelector('.end');

let count = 0;

// Start

start.addEventListener('click', () => {
    cactus.classList.add('cactus-move');
    start.style.display = `none`;
    dino1.style.display = `none`;
    dino.style.display = `block`;

});

res.addEventListener('click', () => {
    end.style.display = 'none';
    res.style.display = 'none';
    dino.style.display = 'block';
    dino1.style.display = 'none';
    cactus.classList.add('cactus-move');

    count = 0;
    score.style.display = 'block';
});

window.addEventListener('click', () => {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        // count = ( count + 10)
    }
    setTimeout(() => dino.classList.remove('jump'), 700);

    const isAlive = () => {
        const dinoTop = parseInt(window.getComputedStyle(dino).top);
        const cactusLeft = parseInt(window.getComputedStyle(cactus).left);

        if (cactusLeft < 50 && dinoTop >= 130) {
            cactus.classList.remove('cactus-move');
            end.style.display = 'block';
            res.style.display = 'block';
            score.style.display = 'none';
            dino.style.display = 'none';
            dino1.style.display = 'block';
        } else {
            count++;
            score.innerHTML = count;
        }
    };
    setInterval(isAlive, 10);
    
});