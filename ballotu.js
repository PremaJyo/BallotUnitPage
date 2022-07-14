var right=document.getElementById("right");
var pob=document.getElementById("powerbut");
var first=document.getElementById("fdiv");
var picd=document.getElementById("displaypic");
//var pic=document.getElementById("")
var congressv=0;
var bjpv=0;
var tdpv=0;
var ysrv=0;
var loksathav=0;
var cpmv=0;
var trsv=0;
var prpv=0;
var tcongressv=0;
var tbjpv=0;
var ttdpv=0;
var tysrv=0;
var tloksathav=0;
var tcpmv=0;
var ttrsv=0;
var tprpv=0;
function select(){
    if(congressv==1){
        tcongressv=tcongressv+1;
        congressv=0;
        document.getElementById("butt1").style.visibility="visible";
    }
    else if(bjpv==1){
        tbjpv=tbjpv+1;
        bjpv=0;
        document.getElementById("but2").style.visibility="visible";
    }
    else if(tdpv==1){
        ttdpv=ttdpv+1;
        tdpv=0;
        document.getElementById("but3").style.visibility="visible";
    }
    else if(ysrv==1){
        tysrv=tysrv+1;
        ysrv=0;
        document.getElementById("but4").style.visibility="visible";
    }
    else if(loksathav==1){
        tloksathav=tloksathav+1;
        loksathav=0;
        document.getElementById("but5").style.visibility="visible";
    }
    else if(cpmv==1){
        tcpmv=tcpmv+1;
        cpmv=0;
        document.getElementById("but6").style.visibility="visible";
    }
    else if(trsv==1){
        ttrsv=ttrsv+1;
        trsv=0;
        document.getElementById("but7").style.visibility="visible";
    }
    else if(prpv==1){
        tprpv=tprpv+1;
        prpv=0;
        document.getElementById("but8").style.visibility="visible";
    }
    console.log("submit")
}
function countDisplay(){
    document.getElementById("c1").textContent=" : "+tcongressv+" Votes";
    document.getElementById("c2").textContent=" : "+tbjpv+" Votes";
    document.getElementById("c3").textContent=" : "+ttdpv+" Votes";
    document.getElementById("c4").textContent=" : "+tysrv+" Votes";
    document.getElementById("c5").textContent=" : "+tloksathav+" Votes";
    document.getElementById("c6").textContent=" : "+tcpmv+" Votes";
    document.getElementById("c7").textContent=" : "+ttrsv+" Votes";
    document.getElementById("c8").textContent=" : "+tprpv+" Votes";
    console.log("count");
    document.getElementById("fdiv").style.display="none";
    //document.getElementById("sdiv").style.display="none";
    document.getElementById("countpage").style.display="block";
}
function reset(){
    tcongressv=0;
    tbjpv=0;
    ttdpv=0;
    tysrv=0;
    tloksathav=0;
    tcpmv=0;
    ttrsv=0;
    tprpv=0;
    console.log("Resetted")
}
function unsubmit(){
     congressv=0;
     bjpv=0;
     tdpv=0;
     ysrv=0;
     loksathav=0;
     cpmv=0;
     trsv=0;
     prpv=0;
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
     console.log("Unsubmit")

}
function removes2(){
    console.log("clicked")
    document.getElementById("but2").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","bjp.jpg");
    picd.style.display="inline";
    bjpv=1;
    
}
function removes1(){
    console.log("clicked")
    document.getElementById("butt1").style.visibility="hidden";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","Congresslogo.png");
    picd.style.display="inline";
    congressv=1;
    console.log(congressv);
}
function removes3(){
    console.log("clicked")
    document.getElementById("but3").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","tdp.jpg");
    picd.style.display="inline";
    tdpv=1;

}
function removes4(){
    console.log("clicked")
    document.getElementById("but4").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","ysr.jpg");
    picd.style.display="inline";
    ysrv=1;

}
function removes5(){
    console.log("clicked")
    document.getElementById("but5").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","loksatha.jpg");
    picd.style.display="inline";
    var loksathav=1;

}
function removes6(){
    console.log("clicked")
    document.getElementById("but6").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","cpm.jpg");
    picd.style.display="inline";
    cpmv=1;

}
function removes7(){
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but7").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but8").style.visibility="visible";
    picd.setAttribute("src","trs.png");
    picd.style.display="inline";
    trsv=1;

}
function removes8(){
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but8").style.visibility="hidden";
    document.getElementById("butt1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","prp.png");
    picd.style.display="inline";
    prpv=1;
}
function turnOff(){
    first.style.display="none";
    pob.style.backgroundColor="red";
    //pob.style.backgroundImage="radial-gradiant(white,red)";
    console.log("Turned Off");

}
function ballotdisplay(){
    document.getElementById("fdiv").style.display="block";
    document.getElementById("sdiv").style.display="block";
    document.getElementById("countpage").style.display="none";

}