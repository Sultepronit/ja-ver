var wn = 0;
var tim = 0;
var bul = 0;
var ifa = 0;
var np = 0;
var a = new Audio();
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
function sou0(k)
{var a = new Audio();
a.src="sound/"+allau[k]+'.mp3';
a.play();
a.onerror = function(){
var kan00=vypka(1);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
}
}

function sou(vo)
{
allauf();
if(eau>-1){ sou0(0); }
//$(".transl").append("SFSDF"+wn);
}

function resf()
{
	var res='';
	for(x=1;x<kss;x++)
	{
		if( (vp[x][1]) || (vp[x][2]) ){
		res+="<span class='res'> ["+x+","+vp[x][1]+","+vp[x][2]+"], </span>";
		}
	}
	res+="<p class='resx'>ОМЕДЕТОО&#128516! — Вітаю!</p>";
	res+="<p class='resx'>Тобі — чомк&#128536, мені — скрін!</p>";
	res+="<p style='font-size:4em'>"+P+"/"+M+"</p>";
	a.src="sound/omedetou.mp3";
	a.play();
	$(".main").replaceWith(res);
}

var kann='';
function word(pm){
var bubu=0;
var pov0=0;

	if(bul==0){bul=1; 
	tim++; tip++;
	if(tim>1){
	if(pm>0)
	{	vp[wn][np+1]++;	P++;}
	else
	{
		vp[wn][np+1]--;	M++; tip--;
		if(vp[wn][1]+vp[wn][2]<-2){tip++;}
	}
	
	}
	
	if(tip>kv+spp-5){//tip=0;
	resf();
	
	}
	
	///////////////
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(kss-1) );
		if(vp[wn][0]>0){
			if(sp0>=spp){continue;}
			sp0++;
		}
		if(wn==bu0){continue;}
		for(y=0;y<tip;y++){	if(wn==bu[y]){bubu=1; ki0++; break;}	}
		if(bubu){bubu=0; continue;}
	/*if(vp[wn][3]+vp[wn][4]>2){
	if(pov0);else{pov0++; continue;}
	}*/
	//if(pm<0){tip-=1;}
	bu[tip]=wn;
	bu0=wn;
	break;
	}
	
	if(vp[wn][3]>0){np=vyp(0,1);}else{np=0;}
	//if(vp[wn][0]>0){np=vyp(0,1);}
	if(vp[wn][0]>0){np=vyp(0,1);}
	////////////////
	$(".time").replaceWith("<p class='time'>"+tim+"/"+tip+"/"+(kv+spp)+" "+P+"/"+M+"</p>");
	//if(tim<2){$(".time").append(" "+kss);}
	$(".num").replaceWith("<p class='num'>"+wn+" : "+vp[wn][0]+"</p>");
	$(".transc").replaceWith("<p class='transc'> </p>");
	$(".gif").replaceWith("<div class='gif'> </div>");
		if(np==0){
		if(wn<ksS){	$(".orig").replaceWith("<p class='orig'>"+vypka(wn)+"</p>");	}
		else{ $(".orig").replaceWith("<p class='orig'><span class='bgk'>"+mms[wn][1][0]+"</span></p>");	}
		$(".transl").replaceWith("<p class='transl'> </p>");
		if(wn<ksS)
		{
		$(".transc").replaceWith("<div class='transc'>");
		$(".transc").append( atoa1( vsit(wn) ),"</div>" );
		if(ifa){ sou(); }
		}
		//else{kanpys0++; if(pm<0){kanpys0--;} }
		
		}
		else{
		$(".orig").replaceWith("<p class='orig'> </p>");
		//$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
			vtr="<div class='transl'>"+mms[wn][2]+"";
			vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
		$(".transl").replaceWith(vtr);
		}
	}else{bul=0;
	//$(".transc").replaceWith("<p class='transc'>"+vsit(wn)+"</p>");
	if(wn<ksS){	$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");	}
	else{ $(".orig").replaceWith("<p class='orig'><span class='bgk'>"+vsit(wn)+"</span></p>");	
	}
	
		if(np==0){
			vtr="<div class='transl'>"+mms[wn][2]+"";
			vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
		$(".transl").replaceWith(vtr);
		if(wn>=ksS){
		var td=tada(mms[wn][1]);
		if(td!=mms[wn][1]){		$(".bgk").append(td); }
		$(".orig").append("<img class='k2' src='kanji-wp/1"+mms[wn][1][0]+".gif'>");
		}
		
		}
		else{
		$(".transc").replaceWith("<div class='transc'>");
		$(".transc").append( atoa1( vsit(wn) ),"</div>" );
		}
	if(ifa){ sou(); }
	}
}

var main = function() {
"use strict";

word();

$("button.bb").on("click", function(event){ word(0); });
$("button.bm").on("click", function(event){ word(-1); });
$("button.bp").on("click", function(event){ word(1); });
$("button.bsou").on("click", function(event){
	if(ifa==0){ifa=1; document.getElementById("bs").style.color = "blue"; sou();
	}else{ifa=0; document.getElementById("bs").style.color = "red"; a.pause(); a.currentTime = 0.0;}
});

};
$(document).ready(main);