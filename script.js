<!DOCTYPE html>
<html lang="sr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Uživo | Košarka</title>

<style>

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#eef4ff;
}

header{
    background:#003b8e;
    color:white;
    text-align:center;
    padding:25px;
    font-size:30px;
    font-weight:bold;
}

.container{
    max-width:700px;
    margin:30px auto;
    background:white;
    border-radius:20px;
    padding:25px;
    box-shadow:0 5px 15px #aaa;
    text-align:center;
}


.live{
    background:red;
    color:white;
    padding:12px;
    border-radius:10px;
    font-size:22px;
    font-weight:bold;
}


.timovi{
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:30px 0;
}


.tim{
    font-size:25px;
    font-weight:bold;
}


.rezultat{
    font-size:55px;
    color:#003b8e;
    font-weight:bold;
}


.vrijeme{
    font-size:35px;
    font-weight:bold;
    margin:20px;
}


button{
    padding:12px 18px;
    margin:5px;
    border:none;
    border-radius:10px;
    background:#0057d9;
    color:white;
    font-size:16px;
    cursor:pointer;
}


button:hover{
    background:#003b8e;
}


</style>

</head>


<body>


<header>
🏀 KOŠARKA UŽIVO
</header>



<div class="container">


<div class="live">
🔴 UŽIVO
</div>


<div class="timovi">

<div>
<div class="tim">Bjeliši</div>
<h1 id="skor1" class="rezultat">45</h1>

<button onclick="poeni1(1)">+1</button>
<button onclick="poeni1(2)">+2</button>
<button onclick="poeni1(3)">+3</button>

</div>



<div>

<div class="tim">Planinari</div>
<h1 id="skor2" class="rezultat">42</h1>

<button onclick="poeni2(1)">+1</button>
<button onclick="poeni2(2)">+2</button>
<button onclick="poeni2(3)">+3</button>

</div>

</div>



<div class="vrijeme" id="vrijeme">
1. četvrtina | 10:00
</div>


<button onclick="start()">▶ Start</button>
<button onclick="pauza()">⏸ Pauza</button>
<button onclick="reset()">🔄 Reset</button>


</div>





<script>

let vrijeme = 600; // 10 minuta
let cetvrtina = 1;

let timer;


let rezultat1 = 45;
let rezultat2 = 42;



function start(){

timer=setInterval(function(){

if(vrijeme>0){

vrijeme--;

prikaziVrijeme();

}
else{

cetvrtina++;

if(cetvrtina<=4){

vrijeme=600;

prikaziVrijeme();

}

else{

clearInterval(timer);
document.getElementById("vrijeme").innerHTML="🏁 KRAJ UTAKMICE";

}

}


},1000);

}



function pauza(){

clearInterval(timer);

}



function reset(){

clearInterval(timer);

vrijeme=600;
cetvrtina=1;

prikaziVrijeme();

}



function prikaziVrijeme(){

let min=Math.floor(vrijeme/60);
let sek=vrijeme%60;

if(sek<10){
sek="0"+sek;
}


document.getElementById("vrijeme").innerHTML=
cetvrtina+". četvrtina | "+min+":"+sek;

}



function poeni1(p){

rezultat1+=p;

document.getElementById("skor1").innerHTML=rezultat1;

}



function poeni2(p){

rezultat2+=p;

document.getElementById("skor2").innerHTML=rezultat2;

}


</script>


</body>
</html>
