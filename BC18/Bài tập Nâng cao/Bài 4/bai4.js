function khoangcach(){
    var tdx1Ele=document.getElementById("tdx1").value*1;
    var tdy1Ele=document.getElementById("tdy1").value*1;
    var tdx2Ele=document.getElementById("tdx2").value*1;
    var tdy2Ele=document.getElementById("tdy2").value*1;
    var tdx3Ele=document.getElementById("tdx3").value*1;
    var tdy3Ele=document.getElementById("tdy3").value*1;
    var tdxtEle=document.getElementById("tdxt").value*1;
    var tdytEle=document.getElementById("tdyt").value*1;
    var toadosinhvienthu1Ele=Math.sqrt(Math.sqrt(Math.pow((tdx1Ele-tdxtEle),2)+Math.pow((tdy1Ele-tdytEle),2)));
    var toadosinhvienthu2Ele=Math.sqrt(Math.sqrt(Math.pow((tdx2Ele-tdxtEle),2)+Math.pow((tdy2Ele-tdytEle),2)));
    var toadosinhvienthu3Ele=Math.sqrt(Math.sqrt(Math.pow((tdx3Ele-tdxtEle),2)+Math.pow((tdy3Ele-tdytEle),2)));
    if(toadosinhvienthu1Ele >=toadosinhvienthu2Ele){
        if(toadosinhvienthu1Ele >=toadosinhvienthu3Ele){
            console.log(toadosinhvienthu1Ele);
            alert("Sinh viên thứ nhất xa nhất." );
            document.getElementById("khoangcach").innerHTML="Sinh viên thứ nhất xa nhất."
        }
        else{
            console.log(toadosinhvienthu3Ele);
            alert("Sinh viên thứ nhất xa ba." );
            document.getElementById("khoangcach").innerHTML="Sinh viên thứ nhất xa ba."
        }
        else{
            if(toadosinhvienthu2Ele >=toadosinhvienthu3Ele){
                console.log(toadosinhvienthu2Ele);
                alert("Sinh viên thứ nhất xa hai." );
                document.getElementById("khoangcach").innerHTML="Sinh viên thứ nhất xa hai."
            }
            else{
                console.log(toadosinhvienthu3Ele);
                alert("Sinh viên thứ nhất xa ba." );
                document.getElementById("khoangcach").innerHTML="Sinh viên thứ nhất xa ba."
            }
        }
    }
}