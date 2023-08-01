/*----------------------------------------------------------------------------------------------------------------*/
/*                                                 Menu Mobile                                                      */
/*----------------------------------------------------------------------------------------------------------------*/
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active')
    event.correntTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*----------------------------------------------------------------------------------------------------------------*/
/*                                                 Text Area Aumentar                                             */
/*----------------------------------------------------------------------------------------------------------------*/
function aumentarResize(){  
    textAraBox = document.getElementById('textAreaBox');
    while (textAraBox.scrollHeight > textAraBox.offsetHeight){
        textAraBox.rows +=1
    }
}

/*----------------------------------------------------------------------------------------------------------------*/
/*                                                 ?????????                                                      */
/*----------------------------------------------------------------------------------------------------------------*/