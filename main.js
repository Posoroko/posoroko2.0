const topTitle_h1 =  document.getElementById('topTitle');
const topTitleBox_div = document.getElementById('topTitleBox');






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




window.addEventListener('resize', function(){
    largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);
});
largeurRedimentionnable(20, topTitle_h1, topTitleBox_div, 1);