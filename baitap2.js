function tinhTongLuyThua(){
    var x = +document.getElementById("x").value;
    var n = +document.getElementById("n").value;

    tong = 0;
    for (i=1; i <= n; i++){
        tong += Math.pow(x, i);
    }
    document.getElementById("cardFooter").innerHTML= "Kết quả là: "+ tong;
}