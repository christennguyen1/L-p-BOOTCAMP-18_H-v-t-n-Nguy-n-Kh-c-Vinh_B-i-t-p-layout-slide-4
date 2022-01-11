function nextday() {
    var dayEle = document.getElementById("day").value * 1;
    var monthEle = document.getElementById("month").value * 1;
    var yearEle = document.getElementById("year").value * 1;
    var ngaytiep = 0;
    var ngaytruoc = 0;
    var thangngaytiep = 0;
    var thangngaytruoc = 0;
    var namngaytiep = 0;
    var namngaytruoc = 0;
    if (yearEle % 400 == 0 || yearEle % 4 == 0) {
        if (monthEle == 1) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = 12;
                namngaytruoc = yearEle - 1;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 2) {
            if (dayEle == 29) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 3) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 29;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 4) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 5) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 6) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 7) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 8) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 9) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep =monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc =monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 10) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 11) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 12) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = 1;
                namngaytiep = yearEle+1;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
    }
    else if(yearEle%100!=0 && yearEle%4!=0){
        if (monthEle == 1) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = 12;
                namngaytruoc = yearEle - 1;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 2) {
            if (dayEle == 28) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 3) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 28;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 4) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 5) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 6) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 7) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 8) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 9) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep =monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc =monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 10) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 11) {
            if (dayEle == 30) {
                ngaytiep = 1;
                thangngaytiep = monthEle  + 1;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 31;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
        else if (monthEle == 12) {
            if (dayEle == 31) {
                ngaytiep = 1;
                thangngaytiep = 1;
                namngaytiep = yearEle+1;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
            else if (dayEle == 1) {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = 30;
                thangngaytruoc = monthEle  - 1;
                namngaytruoc = yearEle;
            }
            else {
                ngaytiep = dayEle + 1;
                thangngaytiep = monthEle ;
                namngaytiep = yearEle;
                ngaytruoc = dayEle - 1;
                thangngaytruoc = monthEle ;
                namngaytruoc = yearEle;
            }
        }
    }
    console.log(ngaytiep,thangngaytiep,namngaytiep);
    console.log(ngaytruoc,thangngaytruoc,namngaytruoc);
    alert("Ngày tiếp theo: "+ ngaytiep+"-"+thangngaytiep+"-"+namngaytiep);
    alert("Ngày trước đó: "+ ngaytruoc+"-"+thangngaytruoc+"-"+namngaytruoc);
    document.getElementById("xuatngaytiep").innerHTML="Ngày tiếp theo: "+ ngaytiep+"-"+thangngaytiep+"-"+namngaytiep;
    document.getElementById("xuatngaytruoc").innerHTML="Ngày trước đó: "+ ngaytruoc+"-"+thangngaytruoc+"-"+namngaytruoc;
}