var Item__Manager__List = document.querySelectorAll('.Item__Manager__List')
Item__Manager__List.forEach(e => {
    e.addEventListener('mouseover', function () {
        this.firstElementChild.style.color = '#fff'
    })
    e.addEventListener('mouseout', function () {
        this.firstElementChild.style.color = '#343434'
    })
});
// -----------------------------------------------------------------------
var user_name_name = document.querySelector('.user_name-name')
var user_name_dropdown= document.querySelector('.user_name_dropdown')
user_name_name.addEventListener('click',function(){
    user_name_dropdown.classList.toggle('move_up')
})
//--------------------------------------------------------------------------
var notification = document.querySelector('.notification')
var notification_list = document.querySelector('.notification_list')
var notification_number =document.querySelector('.notification_number')
notification.addEventListener('click',function(){
    notification_list.classList.toggle('open');
    notification_number.innerText = '0';
})
// ----------------------------------------------------------------------------
var Edits = document.querySelectorAll('.Edit')
Edits.forEach(e => {
    e.addEventListener('click',function(){
        e.lastElementChild.classList.toggle('open')
    })
});
// -----------------------------------------------------------------------
var item_header_check = document.querySelector('.item_header .item_checkbox input' )
var item_check_list = document.querySelectorAll('.item input')
function check_value_ip(input){
    if(input.value==0){
        input.value=1;
        item_check_list.forEach(element => {
            element.setAttribute('checked','0')
        });
    }
    else{
        input.value=0;
        item_check_list.forEach(element => {
            element.removeAttribute('checked')
        });
    }
}
item_header_check.addEventListener('click',function(){
    check_value_ip(this);
    console.log(this.value);
})
//---------------------------------------------------------------
//remove item
var remove_item = document.querySelectorAll('.remove')
var items = document.querySelectorAll('.item');
for(let i = 0;i<remove_item.length;i++){
    remove_item[i].addEventListener('click',function(){
        items[(i+1)].remove();
        console.log(i)
    })
}
// ------------------------------------------------------------------
// Open_sidebar
var Open_sidebar = document.querySelector('.open_sidebar i')
var sidebar = document.querySelector('.sidebar')
var overlay = document.querySelector('.overlay')
Open_sidebar.addEventListener('click',function(){
    sidebar.classList.add('open')
    overlay.classList.add('open')
})
overlay.addEventListener('click',function(){
    sidebar.classList.remove('open')
    this.classList.remove('open')
})