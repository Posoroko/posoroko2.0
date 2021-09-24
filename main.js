const topTitle_h1 =  document.getElementById('topTitle');
const topTitleBox_div = document.getElementById('topTitleBox');
const moto_p = document.querySelector('.moto');



function largeurRedimentionnable(minSize,cible, parent, largeur){

    let = fontSizeCount = minSize;

function rechercheLargeur(cible, parent, largeur) {
        cible.style.fontSize = fontSizeCount + 'px';
        if(cible.offsetHeight < parent.offsetHeight * largeur)
        {
            fontSizeCount ++;
            rechercheLargeur(cible, parent, largeur);
        }
        else
        {
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
            fill: 'forwards'
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


window.addEventListener('resize', function(){
    largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);
});
window.addEventListener('click', handleClick);
largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);





const texts = {
    moto: {
        fr: `Définir vos besoin, votre image et vos objectifs.<br>
            Créer le site web qui représente votre réalité.<br>
            Construire des outils ergonomiques qui  <br>
            servent les besoins des utilisateurs.`,
        eng: `Define your needs, your brand and your objectives. <br>
            Create the website that represents your reality. <br>
            Build ergonomic tools that serve the user's needs.`
    },
    subtitle: {
        fr: `Studio de <br> développement web <br> et de design`,
        eng: `Web development <br> and design <br> studio`
    }
}