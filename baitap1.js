function timnNhoNhat(){
    var tong = 0;
    var n =1;
    while(n<10000){
        tong += n;
        if (tong>10000){
            // console.log("Số n nhỏ nhất cần tìm là: "+ n);
            document.getElementById("kq").innerHTML = "Số n nhỏ nhất cần tìm là: "+ n;
            break;
        }
        n+=1;
    }
}