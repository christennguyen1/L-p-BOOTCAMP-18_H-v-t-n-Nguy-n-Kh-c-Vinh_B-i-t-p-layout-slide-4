// Bai 1  ///////////////////////////////////////////////////
function tongtien() {
    var numberEle1 = document.getElementById("number1").value * 1;
    var numberEle2 = document.getElementById("number2").value * 1;
    var numberEle3 = document.getElementById("number3").value * 1;
    if (numberEle1 <= numberEle2 && numberEle2 <= numberEle3) {
        console.log(numberEle1, ",", numberEle2, ",", numberEle3)
        document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle1 + "," + numberEle2 + "," + numberEle3;
    }
    else if (numberEle1 <= numberEle2 && numberEle2 >= numberEle3) {
        if (numberEle1 >= numberEle3) {
            console.log(numberEle3, ",", numberEle1, ",", numberEle2)
            document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle3 + "," + numberEle1 + "," + numberEle2;
        }
        else {
            console.log(numberEle1, ",", numberEle3, ",", numberEle2)
            document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle1 + "," + numberEle3 + "," + numberEle2;
        }
    }
    else if (numberEle1 >= numberEle2 && numberEle2 <= numberEle3) {
        if (numberEle1 >= numberEle3) {
            console.log(numberEle2, ",", numberEle3, ",", numberEle1)
            document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle2 + "," + numberEle3 + "," + numberEle1;
        }
        else {
            console.log(numberEle2, ",", numberEle1, ",", numberEle3)
            document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle2 + "," + numberEle1 + "," + numberEle3;
        }
    }
    else {
        console.log(numberEle3, ",", numberEle2, ",", numberEle1)
        document.getElementById("xuattong").innerHTML = "Thứ tự các số là: " + numberEle3 + "," + numberEle2 + "," + numberEle1;
    }
}
function thongbao() {
    var numberEle1 = document.getElementById("number1").value * 1;
    var numberEle2 = document.getElementById("number2").value * 1;
    var numberEle3 = document.getElementById("number3").value * 1;
    if (numberEle1 <= numberEle2 && numberEle2 <= numberEle3) {
        alert(numberEle1+ ","+ numberEle2+ ","+ numberEle3)
    }
    else if (numberEle1 <= numberEle2 && numberEle2 >= numberEle3) {
        if (numberEle1 >= numberEle3) {
            alert(numberEle3+ ","+ numberEle1+ ","+ numberEle2)
        }
        else {
            alert(numberEle1+ ","+ numberEle3+ ","+ numberEle2)
        }
    }
    else if (numberEle1 >= numberEle2 && numberEle2 <= numberEle3) {
        if (numberEle1 >= numberEle3) {
            alert(numberEle2+ ","+ numberEle3+ ","+ numberEle1)
        }
        else {
            alert(numberEle2+ ","+ numberEle1+ ","+ numberEle3)
        }
    }
    else {
        alert(numberEle3+ ","+ numberEle2+ ","+ numberEle1)
    }
}