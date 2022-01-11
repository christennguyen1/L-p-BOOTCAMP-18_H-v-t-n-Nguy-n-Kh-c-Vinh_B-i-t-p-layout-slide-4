function luachonchao() {
    var luachonEle = document.getElementById("luachon").value;
    var xuatEle = document.getElementById("xuatchao");
    switch (luachonEle) {
        case "B":
            console.log("Chào Bố");
            xuatEle.innerHTML = "Chào Bố";
            break
        case "M":
            console.log("Chào Mẹ");
            xuatEle.innerHTML = "Chào Mẹ";
            break
        case "A":
            console.log("Chào Anh Trai");
            xuatEle.innerHTML = "Chào Anh Trai";
            break
        case "E":
            console.log("Chào Em Gái");
            xuatEle.innerHTML = "Chào Em Gái";
            break
    }
}
function xuatloichao() {
    var luachonEle = document.getElementById("luachon").value;
    switch (luachonEle) {
        case "B":
            alert("Chào Bố");
            break
        case "M":
            alert("Chào Mẹ");
            break
        case "A":
            alert("Chào Anh Trai");
            break
        case "E":
            alert("Chào Em Gái");
            break
    }
}