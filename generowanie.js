var startReg = 'Windows Registry Editor Version 5.00</br></br>[HKEY_LOCAL_MACHINE\\\SOFTWARE\\\SYSTEM-1]</br></br>[HKEY_LOCAL_MACHINE\\\SOFTWARE\\\SYSTEM-1\\\Aliasy]<br/>"DefaultAlias"=""</br>"AutoDefaultAlias"=dword:00000000';
var export32 = "";
var export64 = "";
var lista = "";

var bazy = new Array();
bazy[0] = "AUDYK";
bazy[1] = "ALD";
bazy[2] = "AGILE";
bazy[3] = "AIRJU";
bazy[4] = "BUD";
bazy[5] = "DIALO";
bazy[6] = "EUROE";
bazy[7] = "GGAUD";
bazy[8] = "GRUGU";
bazy[9] = "GGKAN";
bazy[10] = "GGCOR";
bazy[11] = "GLOBA";
bazy[12] = "LARXX";
bazy[13] = "MONTV";
bazy[14] = "ORION";
bazy[15] = "OGLFO";
bazy[16] = "OGLSE";
bazy[17] = "PENZI";
bazy[18] = "STLXX";
bazy[19] = "REBAU";
bazy[20] = "GRX";
bazy[21] = "RUTRO";
bazy[22] = "ROLFE";
bazy[23] = "WHEEL";
bazy[24] = "TJH2B";
bazy[25] = "TUMBL";
bazy[26] = "WRJSE";
bazy[27] = "test";
bazy[28] = "test";
bazy[29] = "test";

var ilosc = bazy.length - 1;

function genList(){
    for(i=0; i<=ilosc; i++){
        lista = lista + '<input id="'+bazy[i]+'" type="checkbox">'+bazy[i]+' </br>  '
    }
    document.getElementById("lista").innerHTML = lista;
}

function exportList32(){
    export32 = startReg;
    for(i=0; i<=ilosc; i++){
        
     }


    document.getElementById("wygenerowane").innerHTML = export32;
}

function exportList64(){
    export64 = startReg;
    for(i=0; i<=ilosc; i++){
       var check = document.getElementById(bazy[i]).checked;
    }
}







