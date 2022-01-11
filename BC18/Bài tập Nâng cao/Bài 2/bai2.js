function nextday() {
    var monthEle = document.getElementById("month").value * 1;
    var yearEle = document.getElementById("year").value * 1;
    var ngaytrongthang = 0;
    if (yearEle % 400 == 0 || yearEle % 4 == 0) {
        switch (monthEle) {
            case 1:
                ngaytrongthang = 31;
                break;
            case 2:
                ngaytrongthang = 29;
                break;
            case 3:
                ngaytrongthang = 31;
                break;
            case 4:
                ngaytrongthang = 30;
                break;
            case 5:
                ngaytrongthang = 31;
                break;
            case 6:
                ngaytrongthang = 30;
                break;
            case 7:
                ngaytrongthang = 31;
                break;
            case 8:
                ngaytrongthang = 31;
                break;
            case 9:
                ngaytrongthang = 30;
                break;
            case 10:
                ngaytrongthang = 31;
                break;
            case 11:
                ngaytrongthang = 30;
                break;
            case 12:
                ngaytrongthang = 31;
                break;
        }
    }
    else if(yearEle%100!=0 && yearEle%4!=0){
        switch (monthEle) {
            case 1:
                ngaytrongthang = 31;
                break;
            case 2:
                ngaytrongthang = 29;
                break;
            case 3:
                ngaytrongthang = 31;
                break;
            case 4:
                ngaytrongthang = 30;
                break;
            case 5:
                ngaytrongthang = 31;
                break;
            case 6:
                ngaytrongthang = 30;
                break;
            case 7:
                ngaytrongthang = 31;
                break;
            case 8:
                ngaytrongthang = 31;
                break;
            case 9:
                ngaytrongthang = 30;
                break;
            case 10:
                ngaytrongthang = 31;
                break;
            case 11:
                ngaytrongthang = 30;
                break;
            case 12:
                ngaytrongthang = 31;
                break;
        }

    }
    console.log(ngaytrongthang);
    alert("Số ngày trong tháng "+monthEle+" là: "+ngaytrongthang);
    document.getElementById("xuatngaytrongthang").innerHTML="Số ngày trong tháng "+monthEle+" là: "+ngaytrongthang;
}