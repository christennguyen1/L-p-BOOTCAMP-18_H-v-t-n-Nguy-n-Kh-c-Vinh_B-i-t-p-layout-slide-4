function tamgiac() {
    var canhEle1 = document.getElementById("canh1").value * 1;
    var canhEle2 = document.getElementById("canh2").value * 1;
    var canhEle3 = document.getElementById("canh3").value * 1;
    var canhlonnhat = 0;
    var canhgoc1 = 0;
    var canhgoc2 = 0;
    if (canhEle1 > 0 && canhEle2 > 0 && canhEle3 > 0) {
        if (canhEle1 + canhEle2 > canhEle3 && canhEle1 + canhEle3 > canhEle2 && canhEle3 + canhEle2 > canhEle1) {
            if (canhEle1 >= canhEle2) {
                canhgoc1 = canhEle2;
                if (canhEle1 >= canhEle3) {
                    canhlonnhat = canhEle1;
                    canhgoc2 = canhEle3;
                }
                else {
                    canhlonnhat = canhEle3;
                    canhgoc2 = canhEle1;
                }
            }
            else {
                canhgoc1 = canhEle1;
                if (canhEle2 >= canhEle3) {
                    canhlonnhat = canhEle2;
                    canhgoc2 = canhEle3;
                }
                else {
                    canhlonnhat = canhEle3;
                    canhgoc2 = canhEle2;
                }
            }
            console.log(canhlonnhat, canhgoc1, canhgoc2);
            if (canhgoc1 != canhgoc2 && canhlonnhat!=canhgoc2 && canhlonnhat!=canhgoc1) {
                if (Math.sqrt(Math.pow(canhgoc1, 2) + Math.pow(canhgoc2, 2)) > canhlonnhat) {
                    console.log("Tam giác nhọn.");
                    alert("Tam giác nhọn.");
                    document.getElementById("xuatkieu").innerHTML = "Tam giác nhọn.";
                }
                else if (Math.sqrt(Math.pow(canhgoc1, 2) + Math.pow(canhgoc2, 2)) < canhlonnhat) {
                    console.log("Tam giác tù.");
                    alert("Tam giác tù.");
                    document.getElementById("xuatkieu").innerHTML = "Tam giác tù.";
                }
                else if (Math.sqrt(Math.pow(canhgoc1, 2) + Math.pow(canhgoc2, 2)) == canhlonnhat) {
                    console.log("Tam giác vuông.");
                    alert("Tam giác vuông.");
                    document.getElementById("xuatkieu").innerHTML = "Tam giác vuông.";
                }
            }
            else{
                if(canhlonnhat==canhgoc1 && canhlonnhat ==canhgoc2){
                    console.log("Tam giác đều.");
                    alert("Tam giác đều.");
                    document.getElementById("xuatkieu").innerHTML = "Tam giác đều.";
                }
                else{
                    console.log("Tam giác cân.");
                    alert("Tam giác cân.");
                    document.getElementById("xuatkieu").innerHTML = "Tam giác cân.";
                }
            }
        }
        else {
            console.log("Mời bạn nhập lại");
            document.getElementById("xuatkieu").innerHTML = "Mời bạn nhập lại";
        }
    }
    else {
        console.log("Mời bạn nhập lại");
        document.getElementById("xuatkieu").innerHTML = "Mời bạn nhập lại";
    }
}