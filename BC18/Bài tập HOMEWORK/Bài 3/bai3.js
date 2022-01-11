function tongcacso(){
    var numberEle1 = document.getElementById("number1").value * 1;
    var numberEle2 = document.getElementById("number2").value * 1;
    var numberEle3 = document.getElementById("number3").value * 1;
    var demEleeven=0;
    var demEleodd=0;
    if(numberEle1%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    if(numberEle2%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    if(numberEle3%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    console.log(demEleodd,demEleeven);
    document.getElementById("xuatso").innerHTML="Số số lẻ và chẵn lần lượt là: "+demEleodd+","+demEleeven;
}
function thongbao(){
    var numberEle1 = document.getElementById("number1").value * 1;
    var numberEle2 = document.getElementById("number2").value * 1;
    var numberEle3 = document.getElementById("number3").value * 1;
    var demEleeven=0;
    var demEleodd=0;
    if(numberEle1%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    if(numberEle2%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    if(numberEle3%2==0){
        demEleeven++;
    }
    else{
        demEleodd++;
    }
    alert("Số số lẻ và chẵn lần lượt là: "+demEleodd+","+demEleeven);
}