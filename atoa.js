var kan=['','',''];
var wor = '';
var buk=['','',''];
var mit=[0,0,0];
var aed=0;

var ret0 = '';
var ret = ['','',''];
var reti = [0,0,0];
var reed = 0;
var reka = ['','',''];

var sps = ['','',''];
var ski = [0,0,0,0,0];
var ska=5;

function atoa1(aaa)
{wor=aaa;

for(x=0;x<999;x++)
{
if(wor[x]>"");else{aed=x; break;}
kan[x]=wor[x];
	for(y=1;y<999;y++)
	{
		if(a_a[y][0]=="end"){buk[x]="/"; break;}
		if(a_a[y][0]==wor[x]){buk[x]=a_a[y][1]; break;}
	}
	
	for(y=0;y<=ska;y++)
	{
		if(wor[x]==sps[y]){ski[y]++; break;}
		if(y==ska){sps[ska++]=wor[x]; ski[y]=1; break;}
	}
}
mit[0]=0;
for(x=1;;x++)
{mit[x]=0;
	
	if(x==aed){
		if(buk[x-1]=='СУ')
		{
			for(;;){
			if(buk[x-2]=='О'){break;}
			buk[x-1]='С'; mit[x-1]=2; break;
			}
		}
			
		break;}
	
	if(wor[x]=='。')
		{
			if(buk[x-1]=='СУ')//す。
			{
			for(;;){
			if(buk[x-2]=='О'){break;}
			buk[x-1]='С'; mit[x-1]=2; break;			}
			}
			if(wor[x-1]=='か' && wor[x-2]=='　')//すか。
			{
				if(wor[x-3]=='す'){buk[x-3]='С'; mit[x-3]=2;}
			}
		}
	
	if(wor[x]=='ゑ'){kan[x]='へ'; mit[x]=3; continue;}
	if(wor[x]=='ゐ'){kan[x]='は'; mit[x]=3; continue;}
	if(wor[x]=='は' && wor[x-1]=='ち'){buk[x]='ВА'; mit[x]=3; continue;}
	
	if(buk[x-1]=='ц'){buk[x-1]=buk[x][0];}
	if(buk[x]=='І')
	{
		if(buk[x-1][1]=='Е'){buk[x]='Е'; mit[x]=3; continue;}
		if(buk[x-1][0]=='Е'){buk[x]='Е'; mit[x]=3; continue;}
		if(buk[x-1][1]=='А'){buk[x]='Й'; mit[x]=2; continue;}
		if(buk[x-1][0]=='А'){buk[x]='Й'; mit[x]=2; continue;}
		if(buk[x-1][1]=='О'){buk[x]='Й'; mit[x]=2; continue;}
		if(buk[x-1][0]=='О'){buk[x]='Й'; mit[x]=2; continue;}
		if(buk[x-1][1]=='У'){buk[x]='Й'; mit[x]=2; continue;}
		if(buk[x-1][0]=='У'){buk[x]='Й'; mit[x]=2; continue;}
	}
	
	if(buk[x]=='У')
	{
		if(buk[x-1][1]=='О'){buk[x]='О'; mit[x]=3; continue;}
	}
	
	if(buk[x-1]=='Н')
	{
		if(buk[x][0]=='Б'){buk[x-1]='М'; mit[x-1]=1; continue}
		if(buk[x][0]=='П'){buk[x-1]='М'; mit[x-1]=1; continue}
		if(buk[x][0]=='М'){buk[x-1]='М'; mit[x-1]=1; continue}
		if(buk[x][0]=='В'){buk[x-1]='М'; mit[x-1]=1; continue}
	}
	
	if(buk[x]=='ЬО')
	{
		if(buk[x-1]=='ҐІ'){buk[x-1]='Ґ'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ЧІ'){buk[x-1]='Ч'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ШІ'){buk[x-1]='Ш'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='КІ'){buk[x-1]='К'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='РІ'){buk[x-1]='Р'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ДЖІ'){buk[x-1]='ДЖ'; mit[x-1]=1; mit[x]=1; continue;}
	}
	if(buk[x]=='ю')
	{buk[x]='Ю';
		if(buk[x-1]=='ҐІ'){buk[x-1]='Ґ'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ЧІ'){buk[x-1]='Ч'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ШІ'){buk[x-1]='Ш'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='КІ'){buk[x-1]='К'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='РІ'){buk[x-1]='Р'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ДЖІ'){buk[x-1]='ДЖ'; mit[x-1]=1; mit[x]=1; continue;}
	}
	if(buk[x]=='я')
	{buk[x]='Я';
		if(buk[x-1]=='ҐІ'){buk[x-1]='Ґ'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ЧІ'){buk[x-1]='Ч'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ШІ'){buk[x-1]='Ш'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='КІ'){buk[x-1]='К'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='РІ'){buk[x-1]='Р'; mit[x-1]=1; mit[x]=1; continue;}
		if(buk[x-1]=='ДЖІ'){buk[x-1]='ДЖ'; mit[x-1]=1; mit[x]=1; continue;}
	}
	
	if(buk[x-1]=='КУ')
	{
		if(buk[x][0]=='С'){buk[x-1]='К'; mit[x-1]=2; continue;}
		if(buk[x][0]=='Ч'){buk[x-1]='К'; mit[x-1]=2; continue;}
		if(buk[x][0]=='Ш'){buk[x-1]='К'; mit[x-1]=2; continue;}
		if(buk[x][0]=='Т'){buk[x-1]='К'; mit[x-1]=2; continue;}
	}
	if(buk[x-1]=='ШІ')
	{
		if(buk[x][0]=='Ч'){buk[x-1]='ШЬ'; mit[x-1]=2; continue;}
		if(buk[x][0]=='Т'){buk[x-1]='ШЬ'; mit[x-1]=2; continue;}
		if(buk[x][0]=='К'){buk[x-1]='ШЬ'; mit[x-1]=2; continue;}
	}
	if(buk[x-1]=='ЦУ')
	{
		if(buk[x][0]=='К'){buk[x-1]='Ц'; mit[x-1]=2; continue;}
	}
}

return out1();
}

function tada(vk1)
{var re='';
	for(;;){
	if(vk1=='た'){re='だ'; break;}
	if(vk1=='か'){re='が'; break;}
	if(vk1=='て'){re='で'; break;}
	if(vk1=='せ'){re='ぜ'; break;}
	if(vk1=='ち'){re='ぢ'; break;}
	if(vk1=='と'){re='ど'; break;}
	if(vk1=='さ'){re='ざ'; break;}
	if(vk1=='く'){re='ぐ'; break;}
	if(vk1=='き'){re='ぎ'; break;} 
	if(vk1=='す'){re='ず'; break;} 
	if(vk1=='し'){re='じ'; break;}
	//if(vk1=='か'){re='が'; break;}
	re=vk1; break;
	}
return re;
}
function ifkaye(vk0)
{var re=0;
	for(y=1;y<ks;y++)
	{
		if( (tada(vk0))==mm[y][0] ){re=1; break;}
	}
return re;
}

function out1()
{
var oou = "<div class='js'>";
for(x=0;x<aed;x++)
{

	oou+="<div class='jw'>";
	if(mit[x]==0){
	
	//if( ifkaye(wor[x]) ){buk[x]='▼';}
		
	oou+="<p class='trs'>"+buk[x]+"</p>";
	oou+="<p class='jj'>"+wor[x]+"</p>";}
	else{
	if(mit[x]==3){
	oou+="<p class='trs'><span class='red'>"+buk[x]+"</span></p>";
	oou+="<p class='jj'><span class='red'>"+kan[x]+"</span></p>";	}
	if(mit[x]==1){
	oou+="<p class='trs'><span class='zel'>"+buk[x]+"</span></p>";
	oou+="<p class='jj'><span class='zel'>"+wor[x]+"</span></p>";	}
	if(mit[x]==2){
	oou+="<p class='trs'><span class='blu'>"+buk[x]+"</span></p>";
	oou+="<p class='jj'><span class='blu'>"+wor[x]+"</span></p>";	}
	}
	//oou+="<p class='jj'>";
	oou+="</div>";
}
oou += "</div>";
//$(".r1").append(oou);
return oou;
}

function tokana0()
{var r='';
for(x=0;x<reed;x++)
{
	if(reti[x]==0){r+=ret[x];}else{r+=reka[x];}
}
return r;}

function rere(rrr)
{ret0 = rrr;
var in0=0;
reed=0;
ret[0]='';
for(x=0, y=0;x<999;x++)//dilymo retwennya na frahmenty kanji/kana
{	
	if(ret0[x]>"");else{break;}
	if(x==0){ if(ret0[x]>"ー"){reti[reed]=1;}else{reti[reed]=0;} }
	else{
		if(ret0[x]>"ー"){in0=1;}else{in0=0;}
		if(reti[reed]!=in0){/*ret[reed]+='/';*/ reti[++reed]=in0; ret[reed]='';}
		}
	ret[reed]+=ret0[x];
}reed++;

for(x=0,p=0;x<reed;x++)//znaxodymo kana-vidpovidnyky do kanji
{p=0;
if(reti[x]==1)
{
	for(y=1;/*y<kss*/;y++)
	{
		if(mms[y][0]=='end'){break;}
		if(ret[x]==mms[y][0][0]){reka[x]=mms[y][1][0]; p=1; break;}
	}
	if(p>0){continue;}
	for(y=1;y<vss;y++)
	{if(mmv[y][0]=='end'){break;}
		if(ret[x]==mmv[y][0])
		{
			if(mmv[y][1]==0){reka[x]=mmv[y][2]; p=1; break;}
			if(mmv[y][1]==ret[x+1][0]){reka[x]=mmv[y][2]; p=1; break;}
		}
	}
	if(p==0){reka[x]='----';}
	
}
	
}

//var kkk = tokana0();
//wor=kkk;
//atoa1( tokana0() );
//return out1();
return atoa1( tokana0() );
}
