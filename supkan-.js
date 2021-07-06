kp0=0;

var tede=0;
function kandisp(){
	
	document.getElementById("sh").style.display = "";
	document.getElementById("bm").style.display = "none";
	document.getElementById("bp").style.display = "none";
	
	ktip++; tim++;
	var bubu=0;
	for(x=0;x<1000;x++)
	{
	wn = vyp( 1,(ks-1) );
		if(vpk[wn][0]>mxpk){continue;}
		
		if(wn==kbu0){continue;}
		for(y=0;y<ktip;y++){	if(wn==kbu[y]){bubu=1; break;}	}
		if(bubu){bubu=0; continue;}
		
		if(vpk[wn][0]>0){
			if(kp0>=kpp){continue;}
			if(kp0>ktip*kpk ){continue;}
			kp0++;
		}
	kbu[ktip]=wn;
	kbu0=wn;
	break;
	}
	
	if(vpk[wn][3]>0){np=vyp(0,1);}else{np=0;}
	//if( (vpk[wn][4]+1)<vpk[wn][3] ){np=1;}
	//if(vpk[wn][0]>0){np=vyp(0,1);}
	////////////////
	//$(".time").replaceWith("<p class='time'>"+tim+"/"+tip+"/"+(kkv+Kpv-1)+" "+P+"/"+M+"</p>");
	
	$(".num").replaceWith("<p class='num'>"+wn+" : "+vpk[wn][0]+"</p>");
	//$(".num").replaceWith("<p class='num'>kan!</p>");
		if(mm[wn][3]!='-'){tede=0;/*vyp(0,1);*/}
		if(np==0){
		document.getElementById("container").style.display = "none";
		if(tede){ $(".kanje").replaceWith("<p class='kanje'>"+mm[wn][2]+"</p>"); }
		else{	$(".kanje").replaceWith("<p class='kanje'><span class='sans'>"+mm[wn][0]+"</span>"+mm[wn][0]+"</p>"); 
			$(".kanje").append("<span class='serif'>"+mm[wn][0]+"</span>");	}
		$(".kanaz").replaceWith("<p class='kanaz'> </p>");
		}
		else{if(ifa){ souk(0); }
		clearCanvas();
		document.getElementById("container").style.display = "";
		$(".kanje").replaceWith("<p class='kanje'> </p>");
		if(tede){ vtr="<div class='kanaz'>"+mm[wn][3]+"</div>"; }
		else{ vtr="<div class='kanaz'>"+mm[wn][1]+"</div>"; }
		$(".kanaz").replaceWith(vtr);
		}
}

function showk()
{
	if(np==0){
		clearCanvas();
		document.getElementById("container").style.display = "";
		if(tede){ vtr="<div class='kanaz'>"+mm[wn][3]+"</div>"; }
		else { vtr="<div class='kanaz'>"+mm[wn][1]+"</div>"; }
		$(".kanaz").replaceWith(vtr);
		}
		else{
		if(tede){ $(".kanje").replaceWith("<p class='kanje'>"+mm[wn][2]+"</p>"); }
		else{ $(".kanje").replaceWith("<p class='kanje'><span class='sans'>"+mm[wn][0]+"</span>"+mm[wn][0]+"</p>"); 
			$(".kanje").append("<span class='serif'>"+mm[wn][0]+"</span>");	}
		}
		
		/*if(mm[wn][3]!='-'){
		$(".kanje").append( tada(mm[wn][0]) )
		$(".kanaz").replaceWith("<div class='kanaz'>"+mm[wn][3]+"</div>");
		}*/
		//$(".kanje").append("<img class='k2' src='kanji-wp/1"+mm[wn][0][0]+".gif'>");
		/*if(mm[wn][3]!='-'){
		$(".kanaz").replaceWith("<div class='kanaz'>"+mm[wn][3]+"</div>");
		$(".kanje").append("<img class='k2' src='kanji-wp/1"+mm[wn][2]+".gif'>");
		$(".kanje").append( "/"+tada(mm[wn][0]) )
		vtr="<video autoplay muted loop>";
		vtr+='<source src="kanji-wp/'+mm[wn][2]+'.mp4" type="video/mp4">';
		vtr+="</video>";
		$(".kanje").append( vtr );
		}*/
		if(tede){
			$(".kanje").append("<img class='k3' src='kanji-wp/"+mm[wn][2]+".gif'>");
			/*vtr="<video autoplay muted loop>";
			vtr+='<source src="kanji-wp/'+mm[wn][2]+'.mp4" type="video/mp4">';
			vtr+="</video>";
			$(".kanje").append( vtr );*/
		}
		else{
			$(".kanje").append("<img class='k2' src='kanji-wp/1"+mm[wn][0][0]+".gif'>");
		}
	if(ifa){ souk(); }
}

function rpmk(amp)
{tede=0;
	if(amp>0)
	{	vpk[wn][np+1]++;	P++;}
	else
	{
		vpk[wn][np+1]--;	M++; ktip--;
		if(vpk[wn][1]+vpk[wn][2]<-2){ktip++;}
		if(vpk[wn][0]>0){ktip++;}
	}
	if(np){ ToCell(wn+1,'C',vpk[wn][np+1]); }else{ ToCell(wn+1,'B',vpk[wn][np+1]); }
	/*if(vpk2[wn][7]);
		else*/
		{ ToCell(wn+1,'H',mm[wn][0]); ToCell(wn+1,'A',vpk[wn][0]); 
		ToCell(wn+1,'D',vpk[wn][3]);  ToCell(wn+1,'E',vpk[wn][4]); }
}

var allau=['',''], eau=0;

function allaufk()
{eau=0;
if(tede){ allau[eau]=mm[wn][2][0]; }
else{ allau[eau]=mm[wn][0]; }
/*if(mm[wn][2]!='-'){eau=1;
allau[eau]=mm[wn][2][0];}*/
}

//var a = new Audio();
function sou0k(k)
{
a.src="sound/"+allau[k]+'.mp3';
a.play();
a.onended = function(){ if(k<eau){sou0k(++k);} }
a.onerror = function(){
//var kan00=vypka(1);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k];
a.play();
a.onended = function(){ if(k<eau){sou0k(++k);} }
}
}

function souk(vo=8)
{
allaufk();
if(vo==0){eau=0;}
if(eau>-1){ sou0k(0); }
//$(".kanaz").append("SFSDF"+wn);
}
