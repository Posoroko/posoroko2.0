const topTitle_h1 =  document.getElementById('topTitle');
const topTitleBox_div = document.getElementById('topTitleBox');
const moto_p = document.querySelector('.moto');
const menuText_p = document.getElementById('menuText');
const menuPanel_div = document.getElementById('menuPanel');
const bigLogoBox_div = document.getElementById('bigLogoBox');



function hauteurRedimentionnable(minSize,cible, parent, largeur, direction){

    let = fontSizeCount = minSize;

function rechercheHauteur(cible, parent, largeur) {
        console.log('hauteur');
        cible.style.fontSize = fontSizeCount + 'px';
        if(cible.offsetHeight < parent.offsetHeight * largeur) {
            fontSizeCount ++;
            rechercheHauteur(cible, parent, largeur);
        }else {
            fontSizeCount = minSize;
        }
    }
    rechercheHauteur(cible, parent, largeur);
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
            easing: 'cubic-bezier(0,.87,1,.24)'
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



/* EVENT LISTENERS */
window.addEventListener('resize', function(){
    largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);
});
window.addEventListener('click', handleClick);
window.addEventListener('scroll', handleScroll);

hauteurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);




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

moto_p.innerHTML = texts.moto.fr;
subtitle.innerHTML = texts.subtitle.fr;