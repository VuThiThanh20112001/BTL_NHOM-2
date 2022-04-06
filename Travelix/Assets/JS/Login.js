
//Hàm hiển thị lỗi
var users = [
    {
        username: "admin@gmail.com",
        password: "123",
        permission: "admin"
    }
    ]
function Login() {
     event.preventDefault();
    var Username = form.Username.value;
    var Password = form.Password.value;
    console.log(Username);
    var val = check_user(Username, Password, users);
    if (val != false) {
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + val.username + ";expires=" + date;
        document.cookie = "permission=" + val.permission + ";expires=" + date;
        if (val.permission == "admin") {
            location.href = "../ADMIN/Dashboard.html";
        } else if (val.permission == "student") {
            location.href = "student.html";
        }
    } else {
        alert("Account does not exist");
    }
}
function check_user(Username, Password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == Username && user.password == Password) {
            return user;
        }
    }
    return false;
}
