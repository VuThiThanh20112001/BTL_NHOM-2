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