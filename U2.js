var katrans = 1;
var ifdade = 0;//rozpiznavaty DA, pry vyvtwenome TA, twy ni
var ifi=0;//dozvolyty J

var main = function()
{"use strict";
$(".lili").replaceWith('<section class="lili"></section>');
	


/*for(var x=42;x<56;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}*/
$(".r1").append("<div class='ua3'>・Минулий час</div>");
for(var x=59;x<62;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
	$(".r1").append( rere( retm[77][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[77][1]+"</p>" );
$(".r1").append("<div class='ua3'>・Може б…</div>");
for(var x=62;x<65;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・を — додаток/знахідний відмінок</div>");
for(var x=65;x<68;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
	$(".r1").append( rere( retm[78][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[78][1]+"</p>" );
$(".r1").append("<div class='ua3'>・で — в, у, на — місцезнаходження</div>");
for(var x=68;x<74;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
	$(".r1").append( rere( retm[79][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[79][1]+"</p>" );
$(".r1").append("<div class='ua3'>・と — <i>сполучник іменників:</i> і, й, та</div>");
for(var x=74;x<77;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・ はい</div>");
for(var x=80;x<85;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・</div>");
for(var x=85;x<87;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
	for(var x=87;x<97;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}

/*$(".r1").append('<audio controls ><source src="track 01.mp3" type="audio/mpeg">');
$(".r1").append('</audio>');*/
/*
<audio controls autoplay>
  <source src="track 01.mp3" type="audio/mpeg">
</audio>*/
/*var kkkk="た";
var ccc= kkkk.charCodeAt(0);
$(".lili").append(ccc);*/

//kana00();


}

$(document).ready(main);
