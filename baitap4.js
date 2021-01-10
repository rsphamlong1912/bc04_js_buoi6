function changeBackgroud(){
    var backgrounds = document.getElementsByClassName("bg");
    for (var i = 0; i < backgrounds.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            backgrounds[i].style.background = "red";
        }
        else { // Vị trí lẻ => màu xanh
            backgrounds[i].style.background = "blue";
        }
    }
}