//open_input
var header_input = document.querySelector('.header__search>input')
var header_btn = document.querySelector('.header__search button')
header_btn.addEventListener('click', function () {
    header_input.classList.toggle('open__input')
})
header_input.addEventListener('focus', function () {
    header_btn.style.backgroundColor = 'red'
    header_input.addEventListener('keydown', function (e) {
        if (e.code == 'Enter') {
            header_input.classList.remove('open__input')
            header_input.value = '';
            header_btn.style.backgroundColor = '#00d9ff'
        }
    })
})
header_input.addEventListener('blur', function () {
    header_btn.style.backgroundColor = '#00d9ff'
})
// ---------------------------------------------------------
// open notification
var notification__content = document.querySelector('.notification__content')
var notification = document.querySelector('.notification')
var notification_number = document.getElementById('notification_number')
notification.addEventListener('click',function(){
    notification__content.classList.toggle('notification__content_open')
    notification_number.innerText='0';
})

//-----------------------------
//hover
var Item__Manager__List = document.querySelectorAll('.Item__Manager__List')
Item__Manager__List.forEach(e => {
    e.addEventListener('mouseover', function () {
        this.firstElementChild.style.color = '#fff'
    })
    e.addEventListener('mouseout', function () {
        this.firstElementChild.style.color = '#343434'
    })
});
var a = document.getElementById('ji')
//-------------------------------------------------------------
// user_name_menu_dropdown
var user__name = document.querySelector('.user__name')
var user__name_menu_dropdown = document.querySelector('.user__name--menu_dropdown')
user__name.addEventListener('click', function () {
    user__name_menu_dropdown.classList.toggle('menu_dropdown_click')
})


// -----------------------------------------------------------------------------------------
//chart.js thư viện
const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Number of unique visits last 7 days',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [100, 720, 500, 250, 270, 1000, 156,860],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
// --------------------------------------------------------------
var open_sidebar = document.querySelector('.open_sidebar')
var sidebar = document.querySelector('.sidebar')
var coating = document.querySelector('.coating')
open_sidebar.addEventListener('click',function(){
    sidebar.classList.add('open')
    coating.classList.add('presently')
})
coating.addEventListener('click',function(){
    sidebar.classList.remove('open');
    this.classList.remove('presently')
})