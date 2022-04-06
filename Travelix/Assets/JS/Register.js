var Username = document.getElementById('Username')
var Email = document.getElementById('Email')
var Password = document.getElementById('Password')
var Confirm_Password = document.getElementById('Confirm_Password')
var form = document.getElementById('form')
//Hàm hiển thị lỗi
function ShowError(input, massge) {
    let a = input.parentElement;
    // console.log(a);
    let b = a.querySelector('small')
    b.innerText = massge;
}
//Hàm hiển thị không có lỗi
function ShowSucces(input, massge) {
    let a = input.parentElement;
    // console.log(a);
    let b = a.querySelector('small')
    b.innerText = '';
}
//Check ô trống
function check_empty_box(ListInput) {
    let a = false;
    ListInput.forEach(input => {
        input.value = input.value.trim();
        if (input.value == "") {
            ShowError(input,'Không được để trống');
            a = true;
        }
        else {
            ShowSucces(input);
            a = false
        }
    });
    return a;
}
//Check_Email
function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log(emailAdress.value.match(regexEmail));
    if (!emailAdress.value.match(regexEmail)) {
        ShowError(emailAdress,'Địa chỉ Email không hợp lệ');
        return true;
    } else {
        ShowSucces(emailAdress);
        return false;
    }
}
// check độ dài kí tự
function check_length(input,min,max)
{
    input.value=input.value.trim();
    if(input.value.length<min){
        ShowError(input,`Độ dài kí tự không nhỏ hơn ${min}`)
        return true;
    }
    else if(input.value.length>max){
        ShowError(input,`Độ dài kí tự không quá ${max}`)
        return true;
    }
    else{
        ShowSucces(input)
        return false
    }
}
// Check mật khẩu trùng khớp
function check_password_match(Pass,cfPass){
    Pass.value=Pass.value.trim();
    cfPass.value= cfPass.value.trim();
    if(Pass.value!==cfPass.value){
        ShowError(cfPass,'Mật khẩu không trùng khớp')
        return true;
    }
    else{
        ShowSucces(cfPass)
        return false;
    }
}
//----------
form.addEventListener('submit', function(e) {
    e.preventDefault();
    ListInputs = [Username, Email, Password, Confirm_Password];
    if(!check_empty_box(ListInputs))
    {
        validateEmail(Email);
        check_length(Username,3,10);
        check_length(Password,5,10);
        check_password_match(Password,Confirm_Password);
        if(!validateEmail(Email)||!check_length(Username,3,10)||!check_length(Password,5,10)||check_password_match(Password,Confirm_Password))
        {
            console.log('I love you');
        }
    }
    
})