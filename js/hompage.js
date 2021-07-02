var stt = false;
var id = ["rf","pt","mg","smg","sr","rk","gn","am","asr"];
function sleep(ms) {//function thời gian nghỉ
   return new Promise(resolve => setTimeout(resolve, ms));}  
function showhidelist(){
    if(stt == false){
        for(let i = 0;i < id.length;i++){
            var nameid = id[i]
            document.getElementById(nameid).style.display = "block";
            document.getElementById("spnb").style.display = "none";
            document.getElementById("namespnb").style.display = "none";
            function showspnb() {
               document.getElementById("spnb").style.display = "block";
               document.getElementById("namespnb").style.display = "block";
              }
              setTimeout(showspnb, 350);
            document.getElementById(nameid).style.animation = "move 0.35s";
            document.getElementById("namespnb").style.marginTop = "0%";
        }
        stt = true;
    }else{
        for(let i = 0;i < id.length;i++){
            var nameid = id[i]
            document.getElementById(nameid).style.display = "none";
            document.getElementById("namespnb").style.marginTop = "83.7vh";
        }
       stt = false;}}
 function logout(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/login.html";
    link.click();}
 function rf(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/rife.html";
    link.click();}
 function mg(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/machinegun.html";
    link.click();}
 function pt(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/piston.html";
    link.click();}
 function smg(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/smg.html";
    link.click();}
 function sr(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/sniperife.html";
    link.click();}
 function rk(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/rocket.html";
    link.click();}
 function gn(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/grenade.html";
    link.click();}
 function am(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/armor.html";
    link.click();}
 function asr(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/accessories.html";
    link.click();}


 document.getElementById("dssp").onclick = function() {showhidelist()};
 document.getElementById("logout").onclick = function() {logout()};
 document.getElementById("rf").onclick = function() {rf()};
 document.getElementById("mg").onclick = function() {mg()};
 document.getElementById("pt").onclick = function() {pt()};
 document.getElementById("smg").onclick = function() {smg()};
 document.getElementById("sr").onclick = function() {sr()};
 document.getElementById("rk").onclick = function() {rk()};
 document.getElementById("gn").onclick = function() {gn()};
 document.getElementById("am").onclick = function() {am()};
 document.getElementById("asr").onclick = function() {asr()};
 
