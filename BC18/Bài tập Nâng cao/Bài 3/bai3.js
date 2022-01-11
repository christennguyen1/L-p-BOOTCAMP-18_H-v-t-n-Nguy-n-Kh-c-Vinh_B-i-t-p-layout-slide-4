function cachdoc() {
    var numberEle = document.getElementById("number").value * 1;
    var sohangdonvi = numberEle % 10;
    numberEle = numberEle / 10;
    var sohangchuc = numberEle % 10;
    sohangchucEle = Math.floor(sohangchuc);
    numberEle = numberEle / 10;
    var sohangtram = numberEle % 10;
    sohangtramEle = Math.floor(sohangtram);
    var cachdocdonvi;
    var cachdocchuc;
    var cachdoctram;
    switch (sohangdonvi) {
        case 0:
            cachdocdonvi = "không";
            break;
        case 1:
            cachdocdonvi = "một";
            break;
        case 2:
            cachdocdonvi = "hai";
            break;
        case 0:
            cachdocdonvi = "không";
            break;
        case 3:
            cachdocdonvi = "ba";
            break;
        case 4:
            cachdocdonvi = "bốn";
            break;
        case 5:
            cachdocdonvi = "năm";
            break;
        case 6:
            cachdocdonvi = "sáu";
            break;
        case 7:
            cachdocdonvi = "bảy";
            break;
        case 8:
            cachdocdonvi = "tám";
            break;
        case 9:
            cachdocdonvi = "chín";
            break;
    }
    switch (sohangchucEle) {
        case 0:
            cachdocchuc = "không";
            break;
        case 1:
            cachdocchuc = "một";
            break;
        case 2:
            cachdocchuc = "hai";
            break;
        case 0:
            cachdocchuc = "không";
            break;
        case 3:
            cachdocchuc = "ba";
            break;
        case 4:
            cachdocchuc = "bốn";
            break;
        case 5:
            cachdocchuc = "năm";
            break;
        case 6:
            cachdocchuc = "sáu";
            break;
        case 7:
            cachdocchuc = "bảy";
            break;
        case 8:
            cachdocchuc = "tám";
            break;
        case 9:
            cachdocchuc = "chín";
            break;
    }
    switch (sohangtramEle) {
        case 1:
            cachdoctram = "một";
            break;
        case 2:
            cachdoctram = "hai";
            break;
        case 0:
            cachdoctram = "không";
            break;
        case 3:
            cachdoctram = "ba";
            break;
        case 4:
            cachdoctram = "bốn";
            break;
        case 5:
            cachdoctram = "năm";
            break;
        case 6:
            cachdoctram = "sáu";
            break;
        case 7:
            cachdoctram = "bảy";
            break;
        case 8:
            cachdoctram = "tám";
            break;
        case 9:
            cachdoctram = "chín";
            break;
    }
    console.log(cachdoctram,"trăm", cachdocchuc,"mươi", cachdocdonvi);
}