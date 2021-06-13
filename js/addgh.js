var a = ["./ads3.png"]

function thongbao(){
    alert("Đã thêm vào giỏ hàng của bạn")
}
function addsp(){
        var giohang = document.createElement("img");
        giohang.src = "ads3.png"
        document.getElementById("dsgh").appendChild(giohang);         
}

document.getElementById("add").onclick = function() {thongbao();addsp();};
document.getElementById("add1").onclick = function() {thongbao();addsp();};
document.getElementById("add2").onclick = function() {thongbao();addsp();};
document.getElementById("add3").onclick = function() {thongbao();addsp();};