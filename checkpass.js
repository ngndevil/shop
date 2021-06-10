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
       document.getElementById("wrong").innerHTML = "Sai username hoặc passwword! Mời nhập lại";
    }
    else
        document.getElementById("wrong").innerHTML = "";
}

document.getElementById("login").onclick = function() {checkpass()};