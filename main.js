const topTitle_h1 =  document.getElementById('topTitle');
const topTitleBox_div = document.getElementById('topTitleBox');

const moto_p = document.querySelector('.moto');
const subtitle_p = document.getElementById('subtitle');
const informations_p = document.getElementById('informations');

const menuText_p = document.getElementById('menuText');
const menuPanel_div = document.getElementById('menuPanel');

const bigLogoBox_div = document.getElementById('bigLogoBox');

const logoTradBox_div = document.getElementById('logoTradBox')

const photoEric_img = document.getElementById('photoEric');


const funkyPath_path = document.getElementById('funkyPath');
funkyPath_path.style.strokeDasharray = funkyPath_path.getTotalLength();
funkyPath_path.style.strokeDashoffset = funkyPath_path.getTotalLength();
const body = document.getElementsByTagName('body');
const bodyHeight = body[0].clientHeight;
let ratio = 0;







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
        fr: `Développement web <br> et design`,
        eng: `Web development <br> and design`
    },
    informations: {
       fr: `Je suis basé à Carhaix-Plouguer et suis disponible pour travailler à distance 
            ou en personne pour vos projets de site web ou d'infographie.  Que vous ayez 
            besoin d'un site web sur mesure ou créé à l'aide d'un système de gestion de contenu 
            (wordpress, Webflow, ... ) nous élaborerons ensemble un projet à la hauteur de vos ambitions.`,
        eng: `I am based in Carhaix-Plouguer and I'm available to work remotly or in person on your website or graphic design 
        projects. Wether you need a website built custom for you or one made with a content managment system (wordpress, Webflow, ...), 
        we will elaborate together a project that fits your ambitions.`

    }
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
    /* annimation du funkyPath */
    ratio = funkyPath_path.getTotalLength() * window.scrollY / bodyHeight;
    funkyPath_path.style.strokeDashoffset = funkyPath_path.getTotalLength() - ratio * 1.15 ;
}

//traduit n'importequelle cible ayant la classs 'trad'
function traduire(targ) {
    targ.animate(
        [
            {filter: 'blur(0px)'},
            {filter: 'blur(50px)'},
            {filter: 'blur(0px)'}
        ], {
            duration: 1500,
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
    }, 750);
}



/*logo de traduction qui suit la souris */
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



/* EVENT LISTENERS */

window.addEventListener('click', handleClick);
window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', tradFollow);

  





window.onload = () => {
    moto_p.innerHTML = texts.moto.fr;
    subtitle_p.innerHTML = texts.subtitle.fr;
    informations_p.innerHTML = texts.informations.fr;
    
document.querySelectorAll('.trad').forEach(item => {
    item.addEventListener('mouseenter', showTradLogo);
    item.addEventListener('mouseleave', hideTradLogo);
  })
}

