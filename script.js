
function check(){
    var checkBox = document.getElementById("checkbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i=0; i < text1.length; i++){
        if(checkBox.checked == true){
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
        else if (checkBox.checked == false){
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }
}

check();

function check1(){
    var checkBox = document.getElementById("checkboxx");
    var text11 = document.getElementsByClassName("text11");
    var text22= document.getElementsByClassName("text22");

    for (var i=0; i < text11.length; i++){
        if(checkBox.checked == true){
            text11[i].style.display = "block";
            text22[i].style.display = "none";
        }
        else if (checkBox.checked == false){
            text11[i].style.display = "none";
            text22[i].style.display = "block";
        }
    }
}

check1();

function check11(){
    var checkBox = document.getElementById("checkboxxx");
    var text111 = document.getElementsByClassName("text111");
    var text222= document.getElementsByClassName("text222");

    for (var i=0; i < text111.length; i++){
        if(checkBox.checked == true){
            text111[i].style.display = "block";
            text222[i].style.display = "none";
        }
        else if (checkBox.checked == false){
            text111[i].style.display = "none";
            text222[i].style.display = "block";
        }
    }
}

check11();

function check111(){
    var checkBox = document.getElementById("checkboxxxx");
    var text1111 = document.getElementsByClassName("text1111");
    var text2222= document.getElementsByClassName("text2222");

    for (var i=0; i < text1111.length; i++){
        if(checkBox.checked == true){
            text1111[i].style.display = "block";
            text2222[i].style.display = "none";
        }
        else if (checkBox.checked == false){
            text1111[i].style.display = "none";
            text2222[i].style.display = "block";
        }
    }
}

check111();
