const topTitle_h1 =  document.getElementById('topTitle');
const topTitleBox_div = document.getElementById('topTitleBox');

const moto_p = document.querySelector('.moto');
const subtitle_p = document.getElementById('subtitle');

const menuText_p = document.getElementById('menuText');
const menuPanel_div = document.getElementById('menuPanel');

const bigLogoBox_div = document.getElementById('bigLogoBox');

const logoTradBox_div = document.getElementById('logoTradBox')

const photoEric_img = document.getElementById('photoEric');

const texts = {
    moto: {
        fr: `Définir vos besoin, votre image et vos objectifs.<br>
            Créer le site web qui représente votre réalité.<br>
            Construire des outils ergonomiques qui  <br>
            servent vos utilisateurs.`,
        eng: `Define your needs, your brand and your objectives. <br>
            Create the website that represents your reality. <br>
            Build ergonomic tools that serve your users.`
    },
    subtitle: {
        fr: `Studio de <br> développement web <br> et de design`,
        eng: `Web development <br> and design <br> studio`
    }
}






function largeurRedimentionnable(minSize,cible, parent, largeur){

    let = fontSizeCount = minSize;

function rechercheLargeur(cible, parent, largeur) {
    console.log('largeur');
        cible.style.fontSize = fontSizeCount + 'px';
        if(cible.offsetWidth < parent.offsetWidth * largeur) {
            fontSizeCount ++;
            rechercheLargeur(cible, parent, largeur);
        }else {
            fontSizeCount = minSize;
        }
    }
    rechercheLargeur(cible, parent, largeur);
}


//filtre les actions 'click' sur l'object window
function handleClick(e) {
    if(e.target.classList.contains('trad')) {
        traduire(e.target);
    }
}
// effet paralax
function handleScroll() {
    let gap = window.scrollY * 0.5;
    bigLogoBox_div.style.marginTop = gap + 'px';
}

//traduit n'importequelle cible ayant la classs 'trad'
function traduire(targ) {
    console.log(targ);
    targ.animate(
        [
            {filter: 'blur(0px)'},
            {filter: 'blur(50px)'},
            {filter: 'blur(0px)'}
        ], {
            duration: 600,
            fill: 'forwards',
            easing: 'cubic-bezier(.84,-0.01,.14,.99)'
        }
    )
    setTimeout(() => {
        if(targ.classList.contains('fr')){
            targ.innerHTML = texts[targ.id].eng;
            targ.classList.replace('fr', 'eng');
        } else if(targ.classList.contains('eng')){
            targ.innerHTML = texts[targ.id].fr;
            targ.classList.replace('eng', 'fr');
        }
    }, 300);
}

function tradFollow(e) {
    logoTradBox_div.style.top = e.clientY + 'px';
    logoTradBox_div.style.left = e.clientX + 'px';
}


function showTradLogo(e) {
   logoTradBox_div.style.display = 'flex';
}
function hideTradLogo(e) {
    logoTradBox_div.style.display = 'none';
 }
function rollJobs() {
    
}


/* EVENT LISTENERS */
window.addEventListener('resize', function(){
    largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);
});
window.addEventListener('click', handleClick);
window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', tradFollow);
photoEric_img.addEventListener('click', rollJobs);
  





window.onload = () => {
    moto_p.innerHTML = texts.moto.fr;
    subtitle_p.innerHTML = texts.subtitle.fr;
    
document.querySelectorAll('.trad').forEach(item => {
    item.addEventListener('mouseenter', showTradLogo);
    item.addEventListener('mouseleave', hideTradLogo);
  })
}

