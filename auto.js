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
var stpl=0;

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

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

function punct()
{
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(kss-1) );
		//if(vp[wn][0]>mxp){continue;}
		if(wn==bu0){continue;}
	bu0=wn;
	break;
	}
	$(".orig").replaceWith("<p class='orig'>"+vypka(wn)+"</p>");
	$(".transc").replaceWith("<div class='transc'>");
	$(".transc").append(  vsit(wn),"</div>" );
		vtr="<div class='transl'>"+mms[wn][2]+"";
		vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
		$(".transl").replaceWith(vtr);
		if(stpl==1){sou();}
}

function next()
{
	setTimeout(punct, 3000)
}

function spa()
{
	if(stpl){stpl=0;}else{stpl=1; sou();}
}

function allauf()
{eau=0;
for(x=0;mms[wn][1][x];x++,eau++)
{
if(mms[wn][1][x]=="("){break;}
if(mms[wn][1][x]==1){x++;eau--; continue;}
allau[eau]=mms[wn][1][x];
}eau--;
}

function sou0(k)
{//var a = new Audio();
a.src="sound/"+allau[k]+'.mp3';
a.play();
a.onended = function(){ if(k<eau){sou0(++k);}else{next();} }
a.onerror = function(){
var kan00=vypka(1);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
a.onended = function(){ if(k<eau){sou0(++k);}else{next();} }
}
}

function sou(vo)
{
allauf();
if(eau>-1){ sou0(0); }
}

var main = function() {
"use strict";

punct();
$("button.sh").on( "click", function(event){ spa(); } );
//a.onended = function(){ punct(); }

};
$(document).ready(main);