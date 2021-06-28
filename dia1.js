katrans=0;
var ifdade = 0;//rozpiznavaty DA, pry vyvtwenome TA, twy ni
var ifi=1;//dozvolyty J

var ifua=1,ifja=1;

function txt()
{
$(".d1").replaceWith('<section class="d1"></section>');
for(var x=42;x<56;x++)
{	if(ifja){ $(".d1").append( rere( retm[x][0] ) ); }
	if(ifua){ $(".d1").append( "<p class='ua2'>"+retm[x][1]+"</p>" ); }else{ $(".d1").append( "<p class='ua2'> </p>" ); }
}	
}

var main = function()
{"use strict";

$(".d0").append( "<p class='ua2'><i>Ямада-сан і Танака-сан зустрілись в університеті на святі.</i></p>" );	
//$(".lili").replaceWith('<section class="lili"></section>');
txt();

$("button.uab").on("click", function(event){ if(ifua){ifua=0;}else{ifua=1;} txt(); });
$("button.jp").on("click", function(event){ if(ifja){ifja=0;}else{ifja=1;} txt(); });

}

$(document).ready(main);
