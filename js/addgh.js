var a = ["./ads3.png"]

function thongbao(){
    alert("Đã thêm vào giỏ hàng của bạn")
}
function addsp(){
        var giohang = document.createElement("img");
        giohang.src = "ads3.png"
        document.getElementById("dsgh").appendChild(giohang);         
}

