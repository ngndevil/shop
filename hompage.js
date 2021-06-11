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
       stt = false;
    }
}

document.getElementById("dssp").onclick = function() {showhidelist()};
