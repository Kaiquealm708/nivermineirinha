/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealItems.forEach(element => {

  observer.observe(element);

});


/* =========================
   BOTÃO DA SURPRESA
========================= */

const surpriseBtn =
  document.getElementById('surpriseBtn');

const hiddenMessage =
  document.getElementById('hiddenMessage');


surpriseBtn.addEventListener('click', () => {

  hiddenMessage.classList.toggle('show');


  if (hiddenMessage.classList.contains('show')) {

    surpriseBtn.textContent =
      'Fechar mensagem ♡';

  } else {

    surpriseBtn.textContent =
      'Abrir minha mensagem ♡';

  }


  // Solta vários corações

  for (let i = 0; i < 18; i++) {

    setTimeout(createHeart, i * 80);

  }

});


/* =========================
   CORAÇÕES FLUTUANTES
========================= */

const hearts =
  document.getElementById('hearts');


function createHeart() {

  const heart =
    document.createElement('span');

  heart.className = 'heart';


  const symbols = [
    '♡',
    '♥',
    '✦'
  ];

  heart.textContent =
    symbols[
      Math.floor(
        Math.random() * symbols.length
      )
    ];


  heart.style.left =
    Math.random() * 100 + 'vw';

  heart.style.bottom =
    '-20px';

  heart.style.fontSize =
    (12 + Math.random() * 18) + 'px';

  heart.style.animationDuration =
    (3 + Math.random() * 3) + 's';


  hearts.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 6500);

}


/* Cria corações automaticamente */

setInterval(() => {

  if (Math.random() > .35) {

    createHeart();

  }

}, 1800);


/* =========================
   MÚSICA
========================= */

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');

let playing = false;

music.addEventListener('loadedmetadata', () => {
    music.currentTime = 25;
});

musicBtn.addEventListener('click', async () => {

    try {

        if (playing) {

            music.pause();

            musicBtn.textContent = '♫';

            playing = false;

        } else {

            await music.play();

            musicBtn.textContent = 'Ⅱ';

            playing = true;

        }

    } catch (error) {

        console.error('Erro ao tocar música:', error);

        alert('Não foi possível tocar a música.');

    }

});


/* =========================
   MENU
========================= */

document
  .querySelectorAll('nav a, .logo')
  .forEach(link => {

    link.addEventListener('click', () => {

      document
        .querySelectorAll('nav a')
        .forEach(a => {

          a.classList.remove('active');

        });


      if (
        link.parentElement.tagName === 'NAV'
      ) {

        link.classList.add('active');

      }

    });

  });