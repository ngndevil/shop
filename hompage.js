var stt = false;
var id = ["rf","pt","mg","smg","sr","rk","gn","am","asr"];
function showhidelist(){
    if(stt == false){
        for(let i = 0;i < id.length;i++){
            var nameid = id[i]
            document.getElementById(nameid).style.display = "block";
        }
        stt = true;
    }else{
        for(let i = 0;i < id.length;i++){
            var nameid = id[i]
            document.getElementById(nameid).style.display = "none";
        }
       stt = false;}}
 function logout(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/login.html";
    link.click();}
 function rf(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/rf.html";
    link.click();}
 function mg(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/mg.html";
    link.click();}
 function pt(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/pt.html";
    link.click();}
 function smg(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/smg.html";
    link.click();}
 function sr(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/sr.html";
    ink.click();}
 function rk(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/rk.html";
    ink.click();}
 function gn(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/gn.html";
    ink.click();}
 function am(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/am.html";
    ink.click();}
 function asr(){
    var link = document.createElement('a');
    link.href = "http://127.0.0.1:5500/asr.html";
    ink.click();}


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
 
