var sp0=0;
//var prr=7;

function slodisp(){
	
	document.getElementById("sh").style.display = "";
	document.getElementById("bm").style.display = "none";
	document.getElementById("bp").style.display = "none";
	
	tim++; tip++;
	var bubu=0;
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(kss-1) );
		if(vp[wn][0]>mxp){continue;}
		
		if(wn==bu0){continue;}
		for(y=0;y<tip;y++){	if(wn==bu[y]){bubu=1; break;}	}
		if(bubu){bubu=0; continue;}
		
		if(vp[wn][0]>0){
			if(sp0>=spp){continue;}
			if(sp0>tip*kps){continue;}
			sp0++;
		}
	bu[tip]=wn;
	bu0=wn;
	break;
	}
	
	//if(vp[wn][3]>0){np=vyp(0,1);}else{np=0;}
	//if( (vp[wn][4]+1)<vp[wn][3] ){np=1;}
	//if(vp[wn][0]>0){np=vyp(0,1);}
	if(vp[wn][3]>vp[wn][4]){np=1;}else{np=0;}
	//np=0;
	
	////////////////
	$(".num").replaceWith("<p class='num'>"+wn+" : "+vp[wn][0]+"</p>");
	$(".transc").replaceWith("<p class='transc'> </p>");
		if(np==0)
		{
			$(".transl").replaceWith("<p class='transl'> </p>");
			$(".transc").replaceWith("<div class='transc'></div>");
			//$(".transc").append( atoa1( vsit(wn) ),"</div>" );
			iftwy=1;
			var transcv = atoa1( vsit(wn) );
			if(np==0 && prr<1){protw=1;}
			if(protw==0)
			{
			switch( vyp(1,2) ){
				case 1: { $(".orig").replaceWith("<p class='orig'>"+vypka(wn)+"</p>"); break;}
				case 2: { $(".orig").replaceWith("<p class='orig'><span class='serif'>"+vypka(wn)+"</span></p>"); break;}
			}
			//$(".transc").append( atoa1( vsit(wn) ) );
			$(".transc").append( transcv );
			if(ifa){ sou(); }
			}
			else
			{
				$(".com").replaceWith("<p class='com'>Прочитай мене&#128521;</p>");
				$(".orig").replaceWith("<div class='orig'><p class='cent'></p></div>");
				switch( vyp(1,2) ){
				//case 1: { $(".cent").append(vsit(wn)); break;}
				case 1: { $(".cent").append(kanac); break;}
				case 2: { $(".cent").append("<span class='serif'>"+kanac+"</span>"); break;}
				}
				//$(".transc").append( prr );
			}
		
		}
		else{
		$(".orig").replaceWith("<p class='orig'> </p>");
			vtr="<div class='transl'>"+mms[wn][2]+"";
			vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
		$(".transl").replaceWith(vtr);
		}
}

function shows()
{
	$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");	
	
		if(np==0){
			if(protw==0)
			{
			vtr="<div class='transl'>"+mms[wn][2]+"";
			vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
			$(".transl").replaceWith(vtr);
			}
			else			
			{
			$(".com").replaceWith("<p class='com'>Вдалось? І ще переклади&#128521;</p>");
			$(".transc").replaceWith("<div class='transc'></div>");
			$(".transc").append( atoa1( vsit(wn) ) );
			}
		}
		else{
		$(".transc").replaceWith("<div class='transc'></div>");
		$(".transc").append( atoa1( vsit(wn) ) );
		}
	if(ifa){ sou(); }
}

function showpr(apm)
{
	vtr="<div class='transl'>"+mms[wn][2]+"";
	vtr+="<p><img src='zobr/"+vypka(wn)+".jpg'></p></div>";
	$(".transl").replaceWith(vtr);
	if(ifa){ sou(); }
	$(".com").replaceWith("<p class='com'></p>");
	if(apm>0){vp[wn][5]++;}
	else{ vp[wn][5]--; if(vp[wn][5]>1){vp[wn][5]=1;}else{ if(vp[wn][5]<-1){vp[wn][5]=-1;} } }
	ToCellS(wn+1,'F',vp[wn][5]);
	protw=0;
}

function rpms(amp)
{
	/*if(protw==1)
	{
		showpr();
	}
	else{*/
	if(amp>0)
	{	vp[wn][np+1]++; vp[wn][np+3]++;	P++;}
	else
	{
		vp[wn][np+1]--;	M++; tip--;
		vp[wn][np+3]--;
		if(vp[wn][np+3]<-1)
		{	
			if(vp[wn][0]==0)
			{
				if(np==0){vp[wn][3]=-1;}
				else{vp[wn][3]=0; vp[wn][4]=0;}
			}
		}
		if(vp[wn][1]+vp[wn][2]<-2){tip++;}
		if(vp[wn][0]>0){tip++;}
	}
	if(np){ ToCellS(wn+1,'C',vp[wn][np+1]); }else{ ToCellS(wn+1,'B',vp[wn][np+1]); }
	ToCellS(wn+1,'H',mms[wn][0]); ToCellS(wn+1,'A',vp[wn][0]); 
	ToCellS(wn+1,'D',vp[wn][3]);  ToCellS(wn+1,'E',vp[wn][4]);
	//}
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
a.onended = function(){ if(k<eau){sou0(++k);} }
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
}