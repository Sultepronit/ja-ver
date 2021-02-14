var main = function()
{"use strict";

$(".r1").append( atoa1("こんにちゐ") );
$(".r1").append( "<p class='ua2'>Доброго дня!</p>" );
$(".r1").append("<div class='ua3'>・Бути</div>");
for(var x=0;x<3;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・の — стосунок</div>");
for(var x=3;x<7;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・Дієслова</div>");
for(var x=7;x<11;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・Питання</div>");
for(var x=11;x<14;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・Заперечення</div>");
for(var x=14;x<21;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
/*$(".r1").append("<div class='ua3'>・へ — до</div>");
for(var x=21;x<24;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・も — також</div>");
for(var x=24;x<26;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・Скорочення</div>");
for(var x=26;x<32;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・Пропозиція</div>");
for(var x=32;x<37;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".r1").append("<div class='ua3'>・я, ви</div>");
for(var x=37;x<42;x++)
{	$(".r1").append( rere( retm[x][0] ) );
	$(".r1").append( "<p class='ua2'>"+retm[x][1]+"</p>" );	}
$(".lili").replaceWith('<section class="lili"></section>');*/

/*$(".r1").append('<audio controls ><source src="track 01.mp3" type="audio/mpeg">');
$(".r1").append('</audio>');*/


}

$(document).ready(main);
