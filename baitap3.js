function tinhGiaiThua(){
    var n = parseInt(document.getElementById("n_").value);
    if (n<=0){
        var loi = document.getElementById("cardFooter2");
        loi.innerHTML= "*Vui lòng nhập số nguyên dương";
        loi.style.color = "red";
        
    }else{
    var tich = 1;
    for (var i=1; i<=n; i++){
        tich = tich * i;
    }
    document.getElementById("cardFooter2").innerHTML= "Kết quả n! là: "+ tich;
    }
}