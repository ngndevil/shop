const togglePassword = document.querySelector('#togglePassword');// hide/show passwwork
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
}); 

function checkpass(){
    var pass = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if(pass != "admin" || email != "admin"){
       document.getElementById("wrong").innerHTML = "Sai username hoặc password! Mời nhập lại";
    }
    else{
        var link = document.createElement('a');
        link.href = "http://127.0.0.1:5500/homepage.html";
        link.click();
    }

}

document.getElementById("login").onclick = function() {checkpass()};