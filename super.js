var ifa = 1;
var wn = 0;
var a = new Audio();
var P=0, M=0;
var tim = 0;
var bu = [0,0,0];
var bu0=0;
var tip = 0;
var kbu = [0,0,0];
var kbu0=0;
var ktip = 0;
var ifks = 0;
var ppk=0, pps=0;
var kps = 0;

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

function reg()
{
//vybir z-pomig dvox, dlqa bilqwoho twysla slid bude zminyty!
ifks=vyp( 0,(ppk+pps) );
if(ifks<ppk){ifks=0;}
else{ifks=1;}

var iend=0;
for(x=0;x<1000;x++)
{
	/*if(ifks==0){ if(ktip==ppk){ifks=1;}else{break;} }
	if(ifks==1){ if(tip==pps{ifks=0; continue;}else{break;} }*/
	if(ktip==ppk){ifks=1; iend++;}
	if(tip==pps){ifks=0; iend++;}
	if(iend==2){resf();}
	break;
}

$(".time").replaceWith("<p class='time'>"+(tim+1)+"/"+(tip+ktip+1)+"/"+(ppk+pps)+" "+P+"/"+M+"</p>");

if(ifks)
{
	document.getElementById("kan").style.display = "none";
	document.getElementById("slo").style.display = "";
	slodisp();
}
else
{
	document.getElementById("slo").style.display = "none";
	document.getElementById("kan").style.display = "";
	kandisp(); 
}

}

function resf()
{
	document.getElementById("bm").style.display = "none";
	document.getElementById("bp").style.display = "none";
	var res="<p class='resx'>";
	for(x=1;x<kss;x++)
	{
		if( (vp[x][1]) || (vp[x][2]) ){
		res+="<span class=''> ["+x+","+vp[x][1]+","+vp[x][2]+"], </span>";
		}
	}
	res+="</p><p class='resx'>";
	for(x=1;x<ks;x++)
	{
		if( (vpk[x][1]) || (vpk[x][2]) ){
		res+="<span class=''> ["+(kss+x)+","+vpk[x][1]+","+vpk[x][2]+"], </span>";
		}
	}res+="</p>";
	res+="<p class='resx'>+"+P+"/–"+M+"</p>";
	res+="<p class='resx'>ОМЕДЕТОО&#128516! — Вітаю!</p>";
	res+="<p class='resx'>Тобі — чомк&#128536, мені — скрін!</p>";
	var ae = new Audio();
	if(ifa){ ae.src="sound/omedetou.mp3"; ae.play(); }
	$(".main").replaceWith(res);
}

function show()
{

	document.getElementById("sh").style.display = "none";
	document.getElementById("bp").style.display = "";
	document.getElementById("bm").style.display = "";
	if(ifks){shows();}else{showk();}
}

function rpm(apm)
{
	if(ifks){rpms(apm);}else{rpmk(apm);}
	reg();
}

function souu()
{
	if(ifks){sou();}else{souk();}
}

var main = function() {
"use strict";

document.getElementById("ston").style.display = "none";

ppk = kkv+Kpv-1;
pps = kv+spp-1;
/*ppk=9;
pps=9;*/
kps = (spp)/pps;//koefitsijent povtorennqa sliv: zaboronqaje twaste povtorennqa slodisp()
reg();

$("button.bp").on("click", function(event){ rpm(1); });
$("button.bm").on("click", function(event){ rpm(-1); });
$("button.sh").on("click", function(event){ show(); });

$("button.spl").on( "click", function(event){ souu(); } );
$("button.stof").on("click", function(event){ ifa=0; a.pause(); a.currentTime = 0.0;
	document.getElementById("ston").style.display = "";
	document.getElementById("sbn").style.display = "none";
});
$("button.ston").on("click", function(event){ ifa=1; souu();
	document.getElementById("ston").style.display = "none";
	document.getElementById("sbn").style.display = "";
});

};
$(document).ready(main);