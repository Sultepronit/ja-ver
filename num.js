var wn = 0;
var tim = 0;
var bul = 0;
var np = 0;
var ifa = 1;
var a = new Audio();
var bu = [0,0,0];
var tip = 0;
var ki0 = 0;
var bu0=0;
var kanpys0=0;
var P=0, M=0;
var sp0=0;
var ifend = 0;
var katrans = 1;
var ifdade = 0;//rozpiznavaty DA, pry vyvtwenome TA, twy ni
var ifi=0;//dozvolyty J

var ifnum=1;

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

function resf()
{ifend=1;
ifa=0;
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

var twyt='';
function sou(vo)
{twyt='';

if(ifend==0){
for(x=0;x<1000;x++)
{
	if(or1[x]);else{break;}
	if(or1[x]=="ゐ"){twyt+="は"; continue;}
	if(or1[x]=="ゑ"){twyt+="へ"; continue;}
	if(or1[x]=="私"){twyt+="わたし"; continue;}
	if(or1[x]=="{"){continue;}
	//if(or1[x]=="/"){continue;}
	if(or1[x]=="}"){continue;}
	
	
	twyt+=or1[x];
}
	
//let utterance = new SpeechSynthesisUtterance("千三百六十二");
let utterance = new SpeechSynthesisUtterance(twyt);
utterance.lang = "ja";
utterance.rate = 0.8;
speechSynthesis.speak(utterance);
//$(".transl").append("/"+twyt);
}

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
	//if( tip > (ksf-2) ){//tip=0;
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
	//ifnum=vyp(0,1);
	if(ifnum)
	{np=vyp(0,1);
		//num0(100,9900,1);
		//num0(11,29,1);
		//num0(11,99,1);
		skn=vyp(1,2)
		switch(skn){
		case 1: {num0(11,19,1); break;}
		//case 2: {num0(20,90,10); break;}
		case 2: {num0(20,290,10); break;}
		//case 3: {num0(200,900,100); break;}
		case 3: {num0(200,220,1); break;}
		//case 4: {num0(1000,9000,1000); break;}
		case 4: {num0(1000,9000,1); break;}
		//case 5: {num0(10000,90000,10000); break;}
		case 5: {num0(10000,20000,1000); break;}
		//case 5: {num0(10000,90000,1); break;}
		case 6: {num0(100000,900000,10000); break;}
		}
		or1=nkj;
		if(alka){or1=nka+"、"+alka;}
		$(".transc").replaceWith("<div class='transc'></div>" );
		$(".transl").replaceWith("<div class='transl'></div>");
		if(np){$(".numb").replaceWith("<div class='numb'><p class='nunu'>"+nnum+"</p></div>" );}
		else{
		$(".numb").replaceWith("<div class='numb'><p class='nunu0'></p><p class='nunu'>"+nkj+"</p></div>" );
		$(".numb").append( rere( nka ) );
		if(alkj){ $(".numb").append( "<p class='bre'></p>" ); $(".numb").append( "<p class='nunu'>"+alkj+"</p>" ); }
		if(alka){ $(".numb").append( "<p class='bre'></p>" ); $(".numb").append( rere( alka ) ); }
		if(ifa){/*or1=nkj;*/ sou();}
		}
	}
	else
	{
	$(".numb").replaceWith("<div class='numb'></div>" );
	or0=''; or1=''; pr0=''; pr1=''; ifz=0;
	for(x=0;x<55;x++)
	{
		if(mmf[wn][x]==';'){break;}
		if(mmf[wn][x]=='='){ifz=1; continue;}
		if(ifz==0){
			if(mmf[wn][x]=='!'){or1+=mmf[wn][++x]+'　'; or0+='___　'; continue;}
			or1+=mmf[wn][x]+'　';
			or0+=mmf[wn][x]+'　';
			}
		else{
			if(mmf[wn][x]=='!'){pr1+=mmf[wn][++x]; pr0+="___ "; continue;}
			pr1+=mmf[wn][x]+' ';
			pr0+=mmf[wn][x]+' ';
			}
	}
		if(np==0){
		$(".transc").replaceWith("<div class='transc'> </div>" );
		$(".transc").append( rere( or1 ) );
		$(".transl").replaceWith("<div class='transl'>"+pr0+"</div>");
		//if(ifa){ sou(); }
		}
		else{
		$(".transc").replaceWith("<div class='transc'> </div>" );
		$(".transc").append( rere( or0 ) );
		$(".transl").replaceWith("<div class='transl'>"+pr1+"</div>");
		}
	}
	
	}else{bul=0;
	document.getElementById("bp").style.backgroundColor ="green";
	document.getElementById("bp").style.width ="46%";
	document.getElementById("bm").style.display = "";
	
		if(ifnum)
		{
			if(np){ $(".numb").append("<p class='nunu'>"+nkj+"</p>" );
				$(".numb").append( rere( nka ) );
				if(alkj){ $(".numb").append( "<p class='bre'></p>" ); $(".numb").append( "<p class='nunu'>"+alkj+"</p>" ); }
				if(alka){$(".numb").append( "<p class='bre'></p>" ); $(".numb").append( rere( alka ) );}
				}
			else{ $(".nunu0").append( nnum ); }
		}
		else
		{
			if(np==0){
			$(".transl").replaceWith("<div class='transl'>"+pr1+"</div>");
			}
			else{
			$(".transc").replaceWith("<div class='transc'> </div>" );
			$(".transc").append( rere( or1 ) );
			}
		}
		
	if(ifa){ sou(); }
	}
}

var kanat='';
function ntn(nu)
{var re=''; kanat='';
	switch(nu){
		case '1': {re='一'; kanat='いち'; break;}
		case '2': {re='二'; kanat='に'; break;}
		case '3': {re='三'; kanat='さん'; break;}
		case '4': {re='四'; kanat='よん'; break;}
		case '5': {re='五'; kanat='ご'; break;}
		case '6': {re='六'; kanat='ろく'; break;}
		case '7': {re='七'; kanat='なな'; break;}
		case '8': {re='八'; kanat='はち'; break;}
		case '9': {re='九'; kanat='きゅう'; break;}
	}
return re;
}//十

var nnum=0;
var tnu='';
var ned=0;
var nkj='';
var nka='';
var alka='',alkj='';
var mae=0, man=[0,0,0];
function num0(fr,tt,di)
{
nnum=0;
tnu='';
ned=0;
nkj='';
nka='';
alka='';alkj='';
var jui=0;

	for(x=0,ee=0;x<999;x++)
	{
		nnum = vyp( (fr/di),(tt/di) )*di;
		for(y=0;y<999;y++)
		{
			if(y==mae){ee=1; man[mae++]=nnum; break;}
			if(man[y]==nnum){break;}
		}
		if(ee){break;}
	}
	tnu="*"+nnum+"*";
	for(ned=1;ned<99;ned++)
	{
		if(tnu[ned]=='*'){ned--;break;}
	}
	for(var x=1,y=ned;x<=ned;x++,y--)
	{
		//nkj+=ntn(tnu[x]);
		switch(y)
		{
			case 6: {
				if(tnu[x]=='0');
				else{ if(tnu[x]=='1');else{nkj+=ntn(tnu[x]); nka+=kanat;} nkj+='十'; nka+='じゅう　'; }
				//nkj+=ntn(tnu[x]); nka+=kanat; nkj+='十'; nka+='じゅう';
			break;}
			case 5: {
				/*if(tnu[x]=='0');
				else{ if(tnu[x]=='1');else{nkj+=ntn(tnu[x]); nka+=kanat;} nkj+='万'; nka+='まん　'; break;	}*/
				//if(tnu[x]=='1');else{nkj+=ntn(tnu[x]); nka+=kanat;} nkj+='万'; nka+='まん　';
				nkj+=ntn(tnu[x]); nka+=kanat; nkj+='万'; nka+='まん　';
			break;}
			case 4: { 
				switch(tnu[x])
				{
					case '0': {break;}
					case '1': {nkj+='千'; nka+='せん　'; break;}
					case '3': {nkj+='三千'; nka+='さんぜん　'; break; }
					case '8': {nkj+='八千'; nka+='はっせん　'; break; }
					default : {nkj+=ntn(tnu[x]); nka+=kanat; nkj+='千'; nka+='せん　'; break; }
				}
			/*if(tnu[x]=='0');
			else{ if(tnu[x]=='1');else{nkj+=ntn(tnu[x]); nka+=kanat;} nkj+='千'; nka+='せん'; break;	}*/
			break;}
			case 3: {
				switch(tnu[x])
				{
					case '0': {break;}
					case '1': {nkj+='百'; nka+='ひゃく　'; break;}
					case '3': {nkj+='三百'; nka+='さんびゃく　'; break; }
					case '6': {nkj+='六百'; nka+='ろっぴゃく　'; break; }
					case '8': {nkj+='八百'; nka+='はっぴゃく　'; break; }
					default : {nkj+=ntn(tnu[x]); nka+=kanat; nkj+='百'; nka+='ひゃく　'; break; }
				}
			/*if(tnu[x]=='0');
			else{ if(tnu[x]=='1');else{nkj+=ntn(tnu[x]); nka+=kanat;} nkj+='百'; nka+='ひゃく'; 	}*/
			break;}
			case 2: { 
			if(tnu[x]=='0');
			else{ if(tnu[x]=='1'){nka+='じゅう';}else{nkj+=ntn(tnu[x]); nka+=kanat; nka+='じゅう　';} nkj+='十'; }
			
			break;}
			default: {nkj+=ntn(tnu[x]); nka+=kanat;}
		}
	}
	
	switch(nnum){
		case 14: {alka='じゅうし'; break;}
		case 17: {alka='じゅうしち'; break;}
		case 40: {alka='しじゅう'; break;}
		case 70: {alka='しちじゅう'; break;}
		case 90: {alka='くじゅう'; break;}
		case 700: {alka='しちひゃく'; break;}
		case 900: {alka='くひゃく'; break;}
		case 1000: {alka='いっせん'; alkj='一千'; break;}
		case 4000: {alka='しせん'; break;}
		case 7000: {alka='しちせん'; break;}
		//case 10000: {alka='いちまん'; alkj='一万'; break;}
	}
	/*$(".numb").replaceWith("<div class='numb'><p class='nunu'>"+nnum+"</p><p class='nunu'>"+nkj+"</p></div>" );
	or1=nkj; sou();
	$(".numb").append( rere( nka ) );*/
	
}

var main = function() {
"use strict";
$(".orig").replaceWith("");

document.getElementById("ston").style.display = "none";

word();
//num0(11,29,1);
//num0(100,900,100);
//num0(100,9900,1);

$("button.bb").on("click", function(event){ word(0); });
$("button.bm").on("click", function(event){ word(-1); });
$("button.bp").on("click", function(event){ word(1); });

$("button.spl").on( "click", function(event){ sou(); } );
$("button.stof").on("click", function(event){ ifa=0; //a.pause(); a.currentTime = 0.0;
	document.getElementById("ston").style.display = "";
	document.getElementById("sbn").style.display = "none";
});
$("button.ston").on("click", function(event){ ifa=1; sou();
	document.getElementById("ston").style.display = "none";
	document.getElementById("sbn").style.display = "";
});

};
$(document).ready(main);