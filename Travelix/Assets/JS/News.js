var header__nav__container = document.querySelector('#header__nav__container')
var open_menu = document.querySelector('.header__nav__container-search .open-menu')
window.addEventListener('scroll',function(){
    let a = window.scrollY;
    if(a>1){
        header__nav__container.classList.remove('header__nav__container')
        header__nav__container.classList.add('header__nav__container__scroll')
        open_menu.style.left='75%';
        open_menu.style.top='5px';
    }
    else{
        header__nav__container.classList.remove('header__nav__container__scroll')
        header__nav__container.classList.add('header__nav__container')
        open_menu.style.left='80%';
        open_menu.style.top='-5px';
    }
})

$(window).scroll(function(){
    if($(this).scrollTop()>=300){
        $(`.scroll-top`).fadeIn();
    }
    else {
        $(`.scroll-top`).fadeOut();
    }
})
$(`.scroll-top`).click(function(){
    $(`html,body`).animate({scrollTop: 0},'slow')
})

