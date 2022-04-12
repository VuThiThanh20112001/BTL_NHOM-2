var header__nav__container = document.querySelector('#header__nav__container')
var open_menu = document.querySelector('.header__nav__container-search .open-menu')
var scroll_top = document.querySelector('.scroll-top')
window.addEventListener('scroll',function(){
    console.log(window.scrollY)
    let a = window.scrollY;
    if(a>1){
        header__nav__container.classList.remove('header__nav__container')
        header__nav__container.classList.add('header__nav__container__scroll')
        open_menu.style.left='75%';
        open_menu.style.top='5px';
        scroll_top.style.display="block";
    }
    else{
        header__nav__container.classList.remove('header__nav__container__scroll')
        header__nav__container.classList.add('header__nav__container')
        open_menu.style.left='95%';
        open_menu.style.top='-5px';
        scroll_top.style.display="none";
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
