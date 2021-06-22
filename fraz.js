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
var katrans = 1;
var ifdade = 0;//rozpiznavaty DA, pry vyvtwenome TA, twy ni
var ifi=0;//dozvolyty J

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
var or0='', or1='', pr0='', pr1='';
var ifz=0;
function word(pm){
var bubu=0;
var pov0=0;

	
	if(bul==0){bul=1; 
	document.getElementById("bp").style.removeProperty("background-color");
	document.getElementById("bp").style.width ="96%";
	document.getElementById("bm").style.display = "none";
	tim++; tip++;
	if(tim>1){
	if(pm>0)
	{	vp[wn][np+1]++;	P++;}
	else
	{
		vp[wn][np+1]--;	M++; /*tip--;*/
		if(vp[wn][1]+vp[wn][2]<-2){tip++;}
	}
	
	}
	
	if( tip > (ksf/2) ){//tip=0;
	resf();
	
	}
	
	///////////////
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(ksf-1) );
		/*if(vp[wn][0]>0){
			if(sp0>=spp){continue;}
			sp0++;
		}*/
		if(wn==bu0){continue;}
		for(y=0;y<tip;y++){	if(wn==bu[y]){bubu=1; ki0++; break;}	}
		if(bubu){bubu=0; continue;}
	
	bu[tip]=wn;
	bu0=wn;
	break;
	}
	
	if(vpf[wn][1]>0){np=vyp(0,1);}else{np=0;}
	if( (vpf[wn][2]+1)<vpf[wn][1] ){np=1;}
	//np=vyp(0,1);
	//np=0;
	////////////////
	$(".time").replaceWith("<p class='time'>"+tim+"/"+tip+"/"+(ksf/2)+" "+P+"/"+M+"</p>");
	//if(tim<2){$(".time").append(" "+kss);}
	$(".num").replaceWith("<p class='num'>"+wn+" : "+vp[wn][0]+"</p>");
	
	or0=''; or1=''; pr0=''; pr1=''; ifz=0;
	for(x=0;x<55;x++)
	{
		if(mmf[wn][x]==';'){break;}
		if(mmf[wn][x]=='='){ifz=1; continue;}
		if(ifz==0){
			if(mmf[wn][x]=='!'){or1+=mmf[wn][++x]+'　'; or0+='？？？　'; continue;}
			or1+=mmf[wn][x]+'　';
			or0+=mmf[wn][x]+'　';
			}
		else{
			if(mmf[wn][x]=='!'){pr1+=mmf[wn][++x]; pr0+="???"; continue;}
			pr1+=mmf[wn][x]+' ';
			pr0+=mmf[wn][x]+' ';
			}
	}
	
	//$(".transc").replaceWith("<p class='transc'>"+or1+"</p>");
	//$(".main").append("<p>"+pr1+"</p>");
	/*$(".main").append("<p class='transc'>"+or0+"</p>");
	$(".main").append("<p class='transl'>"+pr0+"</p>");*/
		if(np==0){
		$(".transc").replaceWith("<div class='transc'> </div>" );
		$(".transc").append( rere( or1 ) );
		$(".transl").replaceWith("<div class='transl'>"+pr0+"</div>");
		}
		else{
		$(".transc").replaceWith("<div class='transc'> </div>" );
		$(".transc").append( rere( or0 ) );
		$(".transl").replaceWith("<div class='transl'>"+pr1+"</div>");
		}
	}else{bul=0;
	document.getElementById("bp").style.backgroundColor ="green";
	document.getElementById("bp").style.width ="46%";
	document.getElementById("bm").style.display = "";
	
		if(np==0){
		$(".transl").replaceWith("<div class='transl'>"+pr1+"</div>");
		}
		else{
		$(".transc").replaceWith("<div class='transc'> </div>" );
		$(".transc").append( rere( or1 ) );
		}
	if(ifa){ sou(); }
	}
}

var main = function() {
"use strict";
$(".orig").replaceWith("");



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