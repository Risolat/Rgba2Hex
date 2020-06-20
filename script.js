//First task 

function findOdd(){
	var arr = [2, 4, 'risolat', 'apple', 8, 'braed', 17, 23];
	var res = arr.filter(n => n % 2)
	if(res == ''){
		console.log('Нечетные числа отсутствуют');
		return 'Нечетные числа отсутствуют';
	}else
	console.log(res);
	return res;
}
findOdd();

//Second task

function changeRange(){
	var r = parseInt(document.getElementById("r").value);
	var g = parseInt(document.getElementById("g").value);
	var b = parseInt(document.getElementById("b").value);


	var color = "#" + hex(r) + hex(g) + hex(b);

	document.body.style.backgroundColor = color;
	document.getElementById("hex-label").innerHTML = color;
	document.getElementById("r-label").innerText = r;
	document.getElementById("g-label").innerText = g;
	document.getElementById("b-label").innerText = b;

	function hex(v){
		var hex = v.toString(16);
		if(v < 16){
			hex = "0" + hex;
		}
		return hex;
	}
}






