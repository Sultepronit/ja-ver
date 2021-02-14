function kana00()
{
for(var x=0;x<ska;x++)
{
	if(sps[x]=='　'){continue;}
	if(sps[x]=='ゐ'){continue;}
	if(sps[x]=='ゑ'){continue;}
	if(sps[x]=='。'){continue;}
	if(sps[x]=='{'){continue;}
	if(sps[x]=='}'){continue;}
	if(sps[x]=='/'){continue;}
	if(sps[x]=='た'){continue;} if(sps[x]=='だ'){continue;}
	if(sps[x]=='の'){continue;}
	if(sps[x]=='ょ'){continue;} if(sps[x]=='よ'){continue;}
	if(sps[x]=='ん'){continue;}
	if(sps[x]=='ま'){continue;}
	if(sps[x]=='や'){continue;} if(sps[x]=='ゃ'){continue;}
	if(sps[x]=='あ'){continue;}
	if(sps[x]=='が'){continue;} if(sps[x]=='か'){continue;}
	if(sps[x]=='ち'){continue;}
	if(sps[x]=='わ'){continue;}
	if(sps[x]=='し'){continue;} if(sps[x]=='じ'){continue;}
	if(sps[x]=='て'){continue;} if(sps[x]=='で'){continue;}
	if(sps[x]=='く'){continue;} if(sps[x]=='ぐ'){continue;}
	if(sps[x]=='せ'){continue;} if(sps[x]=='ぜ'){continue;}
	if(sps[x]=='と'){continue;} if(sps[x]=='ど'){continue;}
	if(sps[x]=='さ'){continue;} if(sps[x]=='ざ'){continue;}
	if(sps[x]=='い'){continue;}
	if(sps[x]=='き'){continue;} if(sps[x]=='ぎ'){continue;}
	if(sps[x]=='す'){continue;} if(sps[x]=='ず'){continue;}
	if(sps[x]=='う'){continue;}
	if(sps[x]=='ま'){continue;}
	if(sps[x]=='ま'){continue;}
	
	if(ski[x]>2){
	$(".lili").append(sps[x],ski[x],", "); }
}

}

