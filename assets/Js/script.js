const membersName = document.querySelectorAll('.members-name');



function membersClick() {
  membersName.forEach(member => {
    member.addEventListener('click', () => {
      membersName.forEach(otherName => {
        otherName.classList.remove('members-click');
      });

      dataNameLeft  = member.getAttribute('data-left');
      dataNameRight  = member.getAttribute('data-right');
  
      member.classList.add('members-click');
  
      document.querySelector('.member-left').innerHTML = dataNameLeft;
      document.querySelector('.member-right').innerHTML = dataNameRight;
      document.querySelector('.member-name').innerHTML = `${dataNameRight} ${dataNameLeft}`;
    })
  })
}

membersClick();

window.addEventListener('scroll', function () {
  const leftName = document.querySelector('.member-left');
  const rightName = document.querySelector('.member-right');

  const leftDepth = parseFloat(leftName.getAttribute('data-depth'));
  const rightDepth = parseFloat(rightName.getAttribute('data-depth'));

  const leftTranslateX = -window.scrollY * leftDepth;
  const rightTranslateX = window.scrollY * rightDepth;

  leftName.style.transform = `translateX(${leftTranslateX}px)`;
  rightName.style.transform = `translateX(${rightTranslateX}px)`;
});




//play music
const overlay = document.querySelector('.cabecalho img');
const videoIframe = document.querySelector('.biografy iframe');

overlay.addEventListener('click', function () {
    videoIframe.src = videoIframe.src + '&autoplay=1';
    overlay.style.opacity = '0.8';
    overlay.style.backgroundImage = 'none';
});



//language

let languageEng = localStorage.getItem('languageEng') === 'true';

if(languageEng) {
  document.querySelector('.language-eng').style.backgroundColor = 'yellow';
}else {
  document.querySelector('.language-br').style.backgroundColor = 'yellow';
  document.querySelector('.cab-home').innerHTML = 'Inicio';
  document.querySelector('.cab-home').title = 'INICIO';

  document.querySelector('.cab-mem').innerHTML = 'Membros';
  document.querySelector('.cab-mem').title = 'MEMBROS';

  document.querySelector('.cab-bio').innerHTML = 'Biografia';
  document.querySelector('.cab-bio').title = 'BIOGRAFIA';

  document.querySelector('.member h1').innerHTML = 'Membros';

  document.querySelector('.member-biografy').innerHTML = "James Hetfield é um renomado músico, compositor e vocalista da icônica banda de heavy metal Metallica. Nascido em 3 de agosto de 1963, na Califórnia, EUA, Hetfield é conhecido por seu talento musical excepcional e contribuições significativas para o mundo do rock e do metal. A história de James Hetfield é uma jornada de resiliência, paixão e determinação. Crescendo em uma família tumultuada e lidando com tragédias pessoais, Hetfield encontrou consolo na música desde muito jovem. Ele aprendeu a tocar violão e logo começou a escrever suas próprias músicas. Em 1981, ao lado de seu amigo de infância e baterista Lars Ulrich, Hetfield co-fundou o Metallica, que se tornaria uma das bandas de heavy metal mais influentes e bem-sucedidas de todos os tempos. Sua parceria com Ulrich serviu como a espinha dorsal criativa da banda, com Hetfield assumindo os papéis de vocalista, letrista principal e guitarrista principal. A carreira de James Hetfield com o Metallica foi marcada por uma série de álbuns lendários, incluindo 'Master of Puppets', 'Ride the Lightning' e o autointitulado 'Metallica' (também conhecido como 'The Black Album'). Suas letras frequentemente exploram temas de alienação, raiva e os altos e baixos da vida. Além de suas conquistas com o Metallica, Hetfield também enfrentou desafios pessoais, incluindo sua luta contra o vício e a subsequente jornada para a recuperação. Ele usou suas próprias experiências para ajudar e inspirar outras pessoas que passavam por batalhas semelhantes. James Hetfield é conhecido por sua voz poderosa e distinta, bem como por seu estilo de guitarra característico. Ele influenciou inúmeras gerações de músicos e continua a ser uma figura proeminente no mundo da música até hoje. Sua história é uma prova de como a música pode servir como meio de expressão e cura, e seu legado no Metallica e no cenário musical global é inegável. James Hetfield continua sendo uma das figuras mais icônicas e reverenciadas da história do rock e do metal.";

  document.querySelector('.album-back').innerHTML = 'VOLTAR';
  document.querySelector('.listen-desc').innerHTML = 'OUVIR';
  document.querySelector('.base-desc h4').innerHTML = 'GUITARRA, VOCAIS:';
  document.querySelector('.guitar-desc h4').innerHTML = 'GUITARRA:';
  document.querySelector('.drums-desc h4').innerHTML = 'BATERIA:';
  document.querySelector('.bass-desc h4').innerHTML = 'BAIXO:';
  document.querySelector('.music-title').innerHTML = 'MUSICAS';

  document.querySelector('footer h6').innerHTML = 'Feito por WEULER SILVA minhas redes sociais:';
};


document.querySelector('.language-eng').addEventListener('click', () => {
  if(languageEng === false) {
    languageEng = true;
    localStorage.setItem('languageEng', languageEng);
    location.reload();
  }
});

document.querySelector('.language-br').addEventListener('click', () => {
  if(languageEng === true) {
    languageEng = false;
    localStorage.setItem('languageEng', languageEng);
    location.reload();
  }
})


//menu mobile
document.querySelector('.menu-name').addEventListener('click', () => {
  let menu = document.querySelector('.menu-list');
   
  if(menu.classList.contains('none')) {
    document.querySelector('.menu-list').classList.add('flex');
    document.querySelector('.menu-list').classList.remove('none')
  }else {
    document.querySelector('.menu-list').classList.add('none');
    document.querySelector('.menu-list').classList.remove('flex');
  }
})