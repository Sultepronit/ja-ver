var pv = 0;
var bb0 = 0;

var wn = 0;
var tim = 0;
var bul = 0;
var ifa = 1;
var np = 0;
var a = new Audio();
var ax = new Audio();
var bu = [0,0,0];
var tip = 0;
var ki0 = 0;
var bu0=0;
var kanpys0=0;
var P=0, M=0;
var sp0=0;
var katrans = 0;

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

function vsika(ky=1)
{
var gr=0;
var e=0, res=mms[ky][0][e++];
if(mms[ky][0][e-1]==1){e--;}
if(mms[ky][0][0]=="["){gr=1; res="<span class='bl'>"; /*res+=mms[ky][0][e++];*/ }
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="]"){/*res+="]";*/ break;}
if(mms[ky][0][e]=="("){
	if(gr==1){res+="</span>";}else{gr=1;} res+="<span class='gr'>"; continue;}
if(mms[ky][0][e]=="1"){e++;
	res+="　";
	if(e==1){res='';}
	br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
		if(mms[ky][0][e][q]=="("){br0=1; res+="<span class='re'>"; continue;}
		if(mms[ky][0][e][q]==")" && br0==1){br0=0; res+="</span>"; continue;}
		if(mms[ky][0][e][q]=="["){br0=1; res+="<span class='ge'>"; continue;}
		if(mms[ky][0][e][q]=="]" && br0==1){br0=0; res+="</span>"; continue;}
		res+=mms[ky][0][e][q];
		//if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
	}
continue;	
}
if(e==1 && mms[ky][0][0]=="["){res+=mms[ky][0][e];}else{res+="　"+mms[ky][0][e];}
}e--;
if(gr==1){res+="</span>";}
return res;
}

function vypka(au0=0)
{var e=0, mas1=['',''], res="ura";
var if_=0;
for(x=0;mms[wn][0][x];x++,e++)
{
if(mms[wn][0][x]=="["){if_=1; e--;continue;}
if(mms[wn][0][x]=="("){break;}
if(mms[wn][0][x]=="]"){/*e--;*/ break;}
if(mms[wn][0][x]==1){ x++; //e--; continue;
var sl3='';
var br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
		if(mms[wn][0][x][q]=="("){br0=1; continue;}
		if(mms[wn][0][x][q]==")"){br0=0; continue;}
		if(br0==1){continue;}
		if(mms[wn][0][x][q]=="["){ continue;}
		if(mms[wn][0][x][q]=="]"){ continue;}
		sl3+=mms[wn][0][x][q];
		//if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
	}
mas1[e]=sl3; continue;
}
mas1[e]=mms[wn][0][x];
}e--;

if(au0==1){res=mas1[0];}else{res=mas1[ (vyp(0,e)) ];}
//if(if_==1){res="<span class='bl'>"+res+"</span>";}
//res=mas1;
return res;
}

function vsit(ky=1)
{
var e=0;//, res='';
if(mms[ky][1][e]==1){e++;}
var res=mms[ky][1][e++];
for(;mms[ky][1][e];e++)
{
if(mms[ky][1][e]==1){continue;}
if(mms[ky][1][e]=="("){res+=" ("+mms[ky][1][++e]; continue;}
res+="/"+mms[ky][1][e];
}e--;
//if( vyp(0,1) ){res=wanakana.toKatakana(res);}
return res;
}

var allau=['',''], eau=0;
function allauf()
{eau=0;
for(x=0;mms[wn][1][x];x++,eau++)
{
if(mms[wn][1][x]=="("){break;}
if(mms[wn][1][x]==1){x++;eau--; continue;}
allau[eau]=mms[wn][1][x];
}eau--;
}
//var a = new Audio();
function sou0t(k)
{//var a = new Audio();
a.src="sound/"+allau[k]+'.mp3';
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
a.onerror = function(){
var kan00=vypka(1);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
}
}

var ab = new Audio();
function sout(vo=0)
{
if(vo==0)
{
a.src="sound/"+tp[wn][0]+'.mp3';
a.play();
a.onerror = function(){
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+tp[wn][0]+'&kanji='+tp[wn][2];
a.play();
}
}
else
{
ab.src="sound/"+tp[wn][0]+'.mp3';
ab.play();
ab.onerror = function(){
ab.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+tp[wn][0]+'&kanji='+tp[wn][2];
ab.play();
}
}
/*a.onended = function(){ 
let utterance = new SpeechSynthesisUtterance("千三百六十二");
utterance.lang = "ja";
speechSynthesis.speak(utterance);
}
ab.onended = function(){ 
//let utterance = new SpeechSynthesisUtterance("千三百六十二");
let utterance = new SpeechSynthesisUtterance(tp[wn][0]);
utterance.lang = "ja";
speechSynthesis.speak(utterance);
}*/
ab.onended = function(){ 
let utterance = new SpeechSynthesisUtterance("Привіт, світ! Говори нормально!");
//let utterance = new SpeechSynthesisUtterance(tp[wn][0]);
utterance.lang = "ua";
speechSynthesis.speak(utterance);
}

}

function resf()
{
	var res='';
	for(x=1;x<kss;x++)
	{
		if( (vp[x][1]) || (vp[x][2]) ){
		res+="<span class='res'> ["+tp[x][0]+" "+vp[x][1]+" "+vp[x][2]+"], </span>";
		//res+="<span class='res'> ["+x+","+vp[x][1]+","+vp[x][2]+"], </span>";
		}
	}
	res+="<p class='resx'>ОМЕДЕТОО&#128516! — Вітаю!</p>";
	res+="<p class='resx'>Тобі — чомк&#128536, мені — скрін!</p>";
	res+="<p style='font-size:4em'>"+P+"/"+M+"</p>";
	var a2 = new Audio();
	if(ifa){ a2.src="sound/omedetou.mp3"; a2.play(); }
	$(".main").replaceWith(res);
}

var bu5 = [0,0,0,0,0,0];
function xv(ke)
{
var re=0;
	var bubu=0;
	for(xx=0;xx<1000;xx++)
	{
	re = vyp( 1,(te2-1) );
		
		if(tp[re][4]>0){continue;}
		for(y=0;y<tip;y++){	if(re==bu[y]){bubu=1; break;}	}
		if(bubu){bubu=0; continue;}
		for(y=0;y<ke;y++){	if(re==bu5[y]){bubu=1; break;}	}
		if(bubu){bubu=0; continue;}

	break;
	}
	bu5[ke]=re;
return re;
}

var kann='';


function test()
{

	if(tip==15){ resf(); }
	else
	{
	if(vp[wn][2]<-1){tip--; vp[wn][1]=-9; vp[wn][2]=0;}
	document.getElementById("time").textContent=tip+1;
	var bubu=0;
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(te1-1) );
		
		if(tp[wn][4]>0){continue;}
		if(wn==bu0){continue;}
		for(y=0;y<tip;y++){	if(wn==bu[y]){bubu=1; break;}	}
		if(bubu){bubu=0; continue;}
	bu[tip++]=wn;
	bu0=wn;
	break;
	}
	np=vyp(0,1);
	if(np){	document.getElementById("tex").textContent=tp[wn][0]; }
	else{ document.getElementById("tex").textContent=tp[wn][1]; if(ifa){sout(1);} }
	pv = vyp( 0,5 );
	var vsv = ['','',''];
	for(x=0;x<6;x++)
	{
		if(x==pv){
			if(np){ vsv[x]=tp[wn][1]; }else{ vsv[x]=tp[wn][0]; }
			continue;
		}
		if(np){ vsv[x]=tp[ xv(x) ][1]; }else{ vsv[x]=tp[ xv(x) ][0]; }
	}
	document.getElementById("a").textContent=vsv[0];
	document.getElementById("b").textContent=vsv[1];
	document.getElementById("c").textContent=vsv[2];
	document.getElementById("d").textContent=vsv[3];
	document.getElementById("e").textContent=vsv[4];
	document.getElementById("f").textContent=vsv[5];
	}

}

function rea(ar)
{
	if(pv==ar)
	{P++;
		vp[wn][1]++; 
		document.getElementById("info").textContent="Молодець! "+tp[wn][0]+" = "+tp[wn][1]+" ";
		$(".info0").replaceWith("<p class='info0'>&#128536;&#128536;&#128536;</p>");
		if(ifa){ sout(); a.onended = function(){ test(); } }else{ test(); }
		//a.onended = function(){ test(); }
		//test();
	}
	else
	{M++;
		vp[wn][2]--;
		document.getElementById("info").textContent="";
		
		if(bb0){ $(".info0").replaceWith("<p class='info0'>Не здавайся &#128521;</p>"); bb0--;}
		else{ $(".info0").replaceWith("<p class='info0'>Спробуй ще &#128521;</p>"); bb0++;}
		if(ifa){ ax.src="sound/tin.mp3";	ax.play(); }
		
		if(ar==0){ document.getElementById("a").textContent="X"; }
		if(ar==1){ document.getElementById("b").textContent="X"; }
		if(ar==2){ document.getElementById("c").textContent="X"; }
		if(ar==3){ document.getElementById("d").textContent="X"; }
		if(ar==4){ document.getElementById("e").textContent="X"; }
		if(ar==5){ document.getElementById("f").textContent="X"; }
		/*if(ar==0){ document.getElementById("a").style.color = "red"; }
		if(ar==1){ document.getElementById("b").style.color = "red"; }
		if(ar==2){ document.getElementById("c").style.color = "red"; }
		if(ar==3){ document.getElementById("d").style.color = "red"; }
		if(ar==4){ document.getElementById("e").style.color = "red"; }
		if(ar==5){ document.getElementById("f").style.color = "red"; }*/
		
	}
}

var main = function() {
"use strict";

document.getElementById("ston").style.display = "none";

test();

$("button.a").on("click", function(event){ rea(0); });
$("button.b").on("click", function(event){ rea(1); });
$("button.c").on("click", function(event){ rea(2); });
$("button.d").on("click", function(event){ rea(3); });
$("button.e").on("click", function(event){ rea(4); });
$("button.f").on("click", function(event){ rea(5); });

/*
$("button.bb").on("click", function(event){ word(0); });
$("button.bm").on("click", function(event){ word(-1); });
$("button.bp").on("click", function(event){ word(1); });*/
/*
$("button.bsou").on("click", function(event){
	if(ifa==0){ifa=1; document.getElementById("bs").style.color = "blue"; //sout();
	}else{ifa=0; document.getElementById("bs").style.color = "red"; a.pause(); a.currentTime = 0.0;}
});*/

$("button.spl").on( "click", function(event){ sout(1); } );
$("button.stof").on("click", function(event){ ifa=0; a.pause(); a.currentTime = 0.0;
	document.getElementById("ston").style.display = "";
	document.getElementById("sbn").style.display = "none";
});
$("button.ston").on("click", function(event){ ifa=1; sout(1);
	document.getElementById("ston").style.display = "none";
	document.getElementById("sbn").style.display = "";
});

};
$(document).ready(main);