var myApp = "https://script.google.com/macros/s/AKfycbz3kCDF7PAZtDmRZ4OikgCSt5YiUar5VDrpTFfhwZ4x9TuVo7v82CbV4y71hyHKABng9Q/exec";

var vpf2='';
//var te1=31, te2=41, efe=15; 

function getTasks () {
    var action = "getTasks";
    var url = myApp+"?action="+action

    //подготавливаем и выполняем GET запрос
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        	//в случае успеха преобразуем полученный ответ в JSON и передаем отдельной функции, которая сформирует нам таблицу
        	//var tp = JSON.parse(xhr.response);
			vpf2 = JSON.parse(xhr.response);
			//te1=tp[0][1]; te2=tp[0][2]; efe=tp[0][3];
			//test();			
        }
    };
    try { xhr.send(); } catch (err) {console.log(err) }
}

function nawa ()
{
	//ToCell(5,'A',tp[5][0]);
	ToCell(19,'G','lala*');
	/*for(x=39;x<49;x++)
	{
		ToCell(x,'A',tp[x][0]);
		ToCell(x,'B',tp[x][1]);
		ToCell(x,'C',tp[x][2]);
		ToCell(x,'D',tp[x][3]);
		ToCell(x,'E',tp[x][4]);
		//break;
	}*/
	saved();
}

function ToCell(num, col, newValue)
{
	var action = "toCelll";
	/*var num = 15;
	var col = 'B';
	var newValue = 'kuku!';*/
	var xhr = new XMLHttpRequest();
	var body = 'num=' + encodeURIComponent(num) + '&col=' + encodeURIComponent(col) +
	'&newValue=' + encodeURIComponent(newValue) + '&action=' + encodeURIComponent(action);
	xhr.open("POST", myApp, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        	//$("#updateTaskModal").modal("hide");
        	alert(xhr.response);
		//getTasks ();//обновляем список задач
        }
    };
	try { xhr.send(body);} catch (err) {console.log(err) }
}

function saved()
{

	var action = "saved";
	var xhr = new XMLHttpRequest();
	var num = 15;
	var col = 'B';
	var newValue = 'kuku!';
	var body = 'num=' + encodeURIComponent(num) + '&col=' + encodeURIComponent(col) +
	'&newValue=' + encodeURIComponent(newValue) + '&action=' + encodeURIComponent(action);
	xhr.open("POST", myApp, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        	//$("#updateTaskModal").modal("hide");
        	alert(xhr.response);
		//getTasks ();//обновляем список задач
        }
    };
	try { xhr.send(body);} catch (err) {console.log(err) }
}
