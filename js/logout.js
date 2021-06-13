function logout(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/login.html";
    link.click();
 }
document.getElementById("logout").onclick = function() {logout()};