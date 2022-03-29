var open_menu = document.getElementById('open__menu')
var menu__mobile__list = document.getElementById('a1')
var close_menu = document.getElementById('a2')
open_menu.onclick=function()
{
    menu__mobile__list.style.transform='translateX(0%)'
}
close_menu.onclick=function()
{
    menu__mobile__list.style.transform='translateX(50%)'
}
function onclick(){
    if(menu__mobile__list.style.transform.endsWith('translateX(0%)'))
    {
        menu__mobile__list.style.transform='translateX(50%)'
    }
    else{
        menu__mobile__list.style.transform='translateX(50%)'
    }
}