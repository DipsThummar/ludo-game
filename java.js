var random = 0;
var toggle = 0;
var turn = 0;
var turn1 = 0;
var turn2 = 0;
var turn3 = 0;
var changevalue = 0;
var changevalue1 = 0;
var changevalue2 = 0;
var changevalue3 = 0;
var stepchange = [];
var stepchange1 = [];
var stepchange2 = [];
var stepchange3 = [];
var stepchange4 = [];
var stepchange5 = [];
var stepchange6 = [];
var stepchange7 = [];
var stepper;
var stepper1;
var stepper2;
var stepper3;
var stepper4;
var stepper5;
var stepper6;
var stepper7;

var arr = { "u11": '1131', "u12": '1131', "u13": '1131', "u14": '1131' }
function randomsatr() {
	if (toggle == 0) {
		random = Math.floor(Math.random() * 6) + 1;
		document.getElementById('output').innerHTML = random;
		document.getElementById('output').style.fontSize = '23px'
		console.log('random' + random);
		toggle = 1;			
		console.log(toggle + 'oooooo');
		/*console.log(arr)
		console.log(arr)
		console.log(arr)
		console.log(arr)*/
	}
	/*if (arr[u].length == 4) {
	if (random == 6 && r1 == 0) {
		toggle = 1
		console.log(toggle + 'toggle')
		r1 = 1;
		def = 113
		console.log(r1 + 'r1');

	}
	}*/
}
function bluesection(u, num) {
	
	if (toggle == 0) {
		return
	}
	var def = arr[u]
	console.log(def)
	// document.getElementById(def).innerHTML = '';
	// document.getElementById(def).style.backgroundColor = "";

	if (arr[u].length == 4) {
		if (random == 6) {
			console.log(toggle + 'toggle')
			// r2 = 1;
			def = 119;
			arr[u] = def
			// console.log(arr[u] = def+'          nbvhv gbchn');
			console.log('deftoggle' + def);
			// console.log(r2 + 'r2');
			document.getElementById(def).innerHTML = u;
			document.getElementById(def).style.backgroundColor = "rgb(117, 117, 168)";
			document.getElementById(num).innerHTML = '';
			document.getElementById(num).style.backgroundColor = "";
		}
	}
		
	else if (def + random <= 185 && def + random >= 119) {

		var entries = Object.entries(arr).map(([key, value]) => ({
			key,
			value,
		}));
		

	console.log(entries);

	for (var i = 0; i < 4; i++) {
		console.log(i);
		console.log(entries[i].value);
		console.log(arr[u]);
		console.log(entries[i].key);
		turnvalue = entries[i].value;
		console.log(turnvalue);
		console.log(arr[u]);
		if (arr[u] == turnvalue && turn == 0 && entries[i].key != u) {
			console.log(entries[i].key + "keyyyyyyy");
			turn = 1;
			key = entries[i].key;
			console.log(key);
			console.log(arr.u14);
		}
	}

	if (turn == 1 && def != 130 && def != 145 && def != 160 && def != 175) {
		console.log("true");
		console.log(key);
		document.getElementById(def).innerHTML = key;
		document.getElementById(def).style.backgroundColor = "rgb(117, 117, 168)";
		turn = 0;
	}

	else{
		document.getElementById(def).innerHTML = null;
		document.getElementById(def).style.backgroundColor = "";
	}

		

		def += random;
		arr[u] = def;
		console.log(u);
		document.getElementById(def).innerHTML = u;
		document.getElementById(def).style.backgroundColor = "rgb(117, 117, 168)";
		// document.getElementById(num).innerHTML = '';
		// document.getElementById(num).style.backgroundColor = "";

		

		        if (def != 130 && def != 145 && def != 160 && def != 175) {
					if (def == arr1.u21 && arr1.u21 != 134 && def != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def == arr1.u22 && arr1.u22 != 134 && def != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0;	
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def == arr1.u23 && arr1.u23 != 134 && def != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def == arr1.u24 && arr1.u24 != 134 && def != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def == arr2.u31 && arr2.u31 != 149 && def != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def == arr2.u32 && arr2.u32 != 149 && def != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def == arr2.u33 && arr2.u33 != 149 && def != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def == arr2.u34 && arr2.u34 != 149 && def != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def == arr3.u41 && arr3.u41 != 164 && def != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def == arr3.u42 && arr3.u42 != 164 && def != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def == arr3.u43 && arr3.u43 != 164 && def != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def == arr3.u44 && arr3.u44 != 164 && def != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}

	}
	doubleblock(arr[u], u)
 
	toggle = 0;	
}

var arr1 = { "u21": '1341', "u22": '1341', "u23": '1341', "u24": '1341' }

function yellowsection(u1 , num1) {
	if (toggle == 0) {
		return;
	}
	var def1 = arr1[u1]
	console.log(def1)
	if (arr1[u1].length == 4) {
		if (random == 6) {
			console.log(toggle + 'toggle')
			// r2 = 1;
			def1 = 134;
			arr1[u1] = def1
			//console.log(arr1[u1] = def1+'          nbvhv gbchn');
			console.log('def1toggle' + def1);
			// console.log(r2 + 'r2');
			document.getElementById(def1).innerHTML = u1;
			document.getElementById(def1).style.backgroundColor = "gold";
			document.getElementById(num1).innerHTML = '';
			document.getElementById(num1).style.backgroundColor = "";
		}
	}	
		else if (def1 <= 178 && def1 >= 173) {

			document.getElementById(def1).innerHTML = null;
			document.getElementById(def1).style.backgroundColor = "";
			console.log('kkiiiiiiiiiiiiiiiiiikiki');
			var three = 113 + random
			var four = 114 + random
			var five = 115 + random
			var six = 116 + random
			var seven = 117 + random
			var eight = 118 + random
			if (def1 == 173) {
				def1 = three
				console.log(def1 + '173if')
				if (def1 < 119) {
					def1 = 173 + random
					arr1[u1] = def1
					console.log(def1 + '173')
				}
				
				else {
					//def1=113;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r14 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r15 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r16 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
			}
			else if (def1 == 174) {
				def1 = four
				console.log(def1 + '174if')
				if (def1 < 119) {
					def1 = 174 + random
					arr1[u1] = def1
					console.log(def1 + "174")
				}
				
				else {
					//def1=114;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
			}
			else if (def1 == 175) {
				def1 = five
				console.log(def1 + '175if')
				if (def1 < 119) {
					def1 = 175 + random
					arr1[u1] = def1
					console.log(def1 + "175")
				}
				
				else {
					//def1=115;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
			}
			else if (def1 == 176) {
				def1 = six
				console.log(def1 + '176if')
				if (def1 < 119) {
					def1 = 176 + random
					arr1[u1] = def1
					console.log(def1 + '176')
				}
				
				else {
					//def1=116;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
			}

			else if (def1 == 177) {
				def1 = seven
				console.log(def1 + '177if')
				if (def1 < 119) {
					def1 = 177 + random
					arr1[u1] = def1
					console.log(def1 + '177')
				}
				
				//def1=177;
				else {
					arr1[u1] = def1;
					console.log(def1 + '  ' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				

			}


			else if (def1 == 178) {
				def1 = eight
				console.log(def1 + '178if')
				console.log(def1);
				if (def1 < 119) {
					def1 = 178 + random
					arr1[u1] = def1
					console.log(def1 + '178')
				}
				
				else {
					arr1[u1] = def1;
					// console.log(ddef1 + '  ' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
			}
			document.getElementById(def1).innerHTML = u1;
			console.log('def11111111111' + def1);
			document.getElementById(def1).style.backgroundColor = "gold";
		}
		else if (def1 >= 128 && def1 <= 133) {

				document.getElementById(def1).innerHTML = null;
				document.getElementById(def1).style.backgroundColor = "";	
				
			if (def1 == 133) {
				def1 = 200 + random
				console.log(def1 + '133if')
				if (def1 < 201) {
					def1 = 133 + random
					arr1[u1] = def1
					console.log(def1 + '133')
				}
				else {
					//def1=200;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}
			else if (def1 == 132) {
				def1 = 199 + random
				console.log(def1 + '132if')
				if (def1 < 201) {
					def1 = 132 + random
					arr1[u1] = def1
					console.log(def1 + "132")
				}
				else {
					//def1=199;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}
			else if (def1 == 131) {
				def1 = 198 + random
				console.log(def1 + '131if')
				if (def1 < 201) {
					def1 = 131 + random
					arr1[u1] = def1
					console.log(def1 + "131")
				}
				else {
					//def1=198;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}
			else if (def1 == 130) {
				def1 = 197 + random
				console.log(def1 + '130if')
				if (def1 < 201) {
					def1 = 130 + random
					arr1[u1] = def1
					console.log(def1 + '130')
				}
				else {
					//def1=197;
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1!= 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}
			else if (def1 == 129) {
				def1 = 196 + random
				console.log(def1 + '129if')
				if (def1 < 201) {
					def1 = 129 + random
					arr1[u1] = def1
					console.log(def1 + '129')
				}
				else {
					//def1=196
					arr1[u1] = def1;
					console.log(def1 + '' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 && arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1!= 119 && def1!= 130 && def1!= 145 && def1!= 160 && def1!= 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u34 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1!= 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						// console.log('rrrrrrrrrrrrrr');
						document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}

			else if (def1 == 128) {
				def1 = 195 + random
				console.log(def1 + '128if')
				if (def1 < 201) {
					def1 = 128 + random
					arr1[u1] = def1
					console.log(def1 + '128')
				}
				else {
					//def1=195
					arr1[u1] = def1;
					console.log(def1 + '  ' + "elseeeeee")
				}
				if (def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
					if (def1 == arr.u11 &&  arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def1 == arr.u12 &&  arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def1 == arr2.u32 && arr2.u32 != 149 && def1!= 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
					else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = "1641";
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = "1641";
						r11 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = "1641";
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = "1641";
						r13 = 0;
						// console.log('rrrrrrrrrrrrrr');
						document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";

					}
				}
				
				document.getElementById(def1).innerHTML = u1;
				document.getElementById(def1).style.backgroundColor = "gold";
			}
			document.getElementById(def1).innerHTML = u1;
			console.log('def11111111111' + def1);
			document.getElementById(def1).style.backgroundColor = "gold";
		}

		else if (def1 + random <= 207) {

			var entries = Object.entries(arr1).map(([key, value]) => ({
			key,
			value,
		}));
		

	console.log(entries);

	for (var i = 0; i < 4; i++) {
		console.log(i);
		console.log(entries[i].value);
		console.log(arr1[u1]);
		console.log(entries[i].key);
		turn1value = entries[i].value;
		console.log(turn1value);
		console.log(arr1[u1]);
		if (arr1[u1] == turn1value && turn1 == 0 && entries[i].key != u1) {
			console.log(entries[i].key + "keyyyyyyy");
			turn1 = 1;
			key = entries[i].key;
			console.log(key);
			console.log(arr1.u24);
		}
	}

	if (turn1 == 1 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
		console.log("true");
		console.log(key);
		document.getElementById(def1).innerHTML = key;
		document.getElementById(def1).style.backgroundColor = "gold";
		turn1 = 0;
	}
	else{
		document.getElementById(def1).innerHTML = null;
		console.log(def1)
		document.getElementById(def1).style.backgroundColor = "";
	}
			
			def1 += random; 
			console.log(def1);
			arr1[u1] = def1;
			console.log(arr1[u1]);	
			document.getElementById(def1).innerHTML = u1;
			//console.log(u1);
			document.getElementById(def1).style.backgroundColor = "gold";
			//console.log(newsection)
			
			if (def1 == arr.u11 &&  arr.u11 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('1000').innerHTML =  'u11';
				arr.u11 = 113;
				r1 = 0;
				console.log(arr.u11);
				console.log(r1)
				// console.log(u);
				console.log('rrrrrrrrrrrrrr');
				console.log(toggle);
				// document.getElementById(arr.u11).innerHTML = '';
				// document.getElementById(arr.u11).style.backgroundColor = "";
			}
			else if (def1 == arr.u12 && arr.u12 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('2000').innerHTML = 'u12';
				arr.u12 = 113;
				r1 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr.u12).innerHTML = '';
				// document.getElementById(arr.u12).style.backgroundColor = "";
			}
			else if (def1 == arr.u13 && arr.u13 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('3000').innerHTML = 'u13';
				arr.u13 = 113;
				r1 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr.u13).innerHTML = '';
				// document.getElementById(arr.u13).style.backgroundColor = "";
			}
			else if (def1 == arr.u14 && arr.u14 != 119 && def1 != 119 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('4000').innerHTML = 'u14';
				arr.u14 = 113;
				r1 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr.u14).innerHTML = '';
				// document.getElementById(arr.u14).style.backgroundColor = "";
			}
			else if (def1 == arr2.u31 && arr2.u31 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('9000').innerHTML = 'u31';
				arr2.u31 = "1491";
				r6 = 0;	
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr2.u31).innerHTML = '';
				// document.getElementById(arr2.u31).style.backgroundColor = "";
			}
			else if (def1 == arr2.u32 && arr2.u32 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('10000').innerHTML = 'u32';
				arr2.u32 = "1491";
				r7 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr2.u32).innerHTML = '';
				// document.getElementById(arr2.u32).style.backgroundColor = "";
			}
			else if (def1 == arr2.u33 && arr2.u33 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('11000').innerHTML = 'u33';
				arr2.u33 = "1491";
				r8 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr2.u33).innerHTML = '';
				// document.getElementById(arr2.u33).style.backgroundColor = "";
			}
			else if (def1 == arr2.u34 && arr2.u34 != 149 && def1 != 149 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('12000').innerHTML = 'u34';
				arr2.u34 = "1491";
				r9 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr2.u34).innerHTML = '';
				// document.getElementById(arr2.u34).style.backgroundColor = "";
			}
			else if (def1 == arr3.u41 && arr3.u41 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('13000').innerHTML = 'u41';
				arr3.u41 = "1641";
				r10 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr3.u41).innerHTML = '';
				// document.getElementById(arr3.u41).style.backgroundColor = "";
			}
			else if (def1 == arr3.u42 && arr3.u42 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('14000').innerHTML = 'u42';
				arr3.u42 = "1641";
				r11 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr3.u42).innerHTML = '';
				// document.getElementById(arr3.u42).style.backgroundColor = "";
			}
			else if (def1 == arr3.u43 && arr3.u43 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('15000').innerHTML = 'u43';
				arr3.u43 = "1641";
				r12 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr3.u43).innerHTML = '';
				// document.getElementById(arr3.u43).style.backgroundColor = "";
			}
			else if (def1 == arr3.u44 && arr3.u44 != 164 && def1 != 164 && def1 != 130 && def1 != 145 && def1 != 160 && def1 != 175) {
				document.getElementById('16000').innerHTML = 'u44';
				arr3.u44 = "1641";
				r13 = 0;
				console.log('rrrrrrrrrrrrrr');
				// document.getElementById(arr3.u44).innerHTML = '';
				// document.getElementById(arr3.u44).style.backgroundColor = "";

			}

		}

		else {
			arr1[u1];
			console.log('kjaaaaaadksjzfb')
		}
		/*document.getElementById(arr1[u1]).innerHTML = null;
		console.log(arr1[u1]);*/
		doubleblock(arr1[u1], u1)
		toggle = 0;
	
}

var arr2 = { "u31": '1491', "u32": '1491', "u33": '1491', "u34": '1491' }

function greensection(u2, num2) {

	if (toggle == 0) {
		return;
	}

	var def2 = arr2[u2];
	console.log(def2)
	if (arr2[u2].length == 4) {
		if (random == 6) {
			console.log(toggle + 'toggle')
			// r6 = 1
			def2 = 149;
			arr2[u2] = def2
			console.log('def2toggle' + def2);
			console.log(r6 + 'r6');
			document.getElementById(def2).innerHTML = u2;
			document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
			document.getElementById(num2).innerHTML = '';
			document.getElementById(num2).style.backgroundColor = "";
		}
	}	
		else if (def2 <= 178 && def2 >= 173) {
		
				document.getElementById(arr2[u2]).innerHTML = null;
				document.getElementById(arr2[u2]).style.backgroundColor = "";
			
				/*else{
					if (def2 == u32 && u32 != 149) {
						console.log(def1);
						console.log(def1)
			
						document.getElementById(def2).innerHTML = 'u32';
						console.log('document.getElementById(def1).innerHTML = def1');
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('jhjgnkjjk');
					}
					if (def2== u33 && u33 != 149 ) {
						document.getElementById(def2).innerHTML = 'u33';
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('abcdefgh');
					}
					if (def2== u34 && u34!= 149 ) {
						document.getElementById(def2).innerHTML = 'u34';
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('ijklmnopqrstuvwxyz');
					}
				}*/
			var three = 113 + random
			var four = 114 + random
			var five = 115 + random
			var six = 116 + random
			var seven = 117 + random
			var eight = 118 + random
			if (def2 == 173) {
				def2 = three
				console.log(def2 + '173if')
				if (def2 < 119) {
					def2 = 173 + random
					arr2[u2] = def2
					console.log(def2 + '173')
				}
				else {
					//def1=113;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = 149;
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}

			}
			else if (def2 == 174) {
				def2 = four
				console.log(def2 + '174if')
				if (def2 < 119) {
					def2 = 174 + random
					arr2[u2] = def2
					console.log(def2 + "174")
				}
				else {
					// def2=114;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
			}
			else if (def2 == 175) {
				def2 = five
				console.log(def2 + '175if')
				if (def2 < 119) {
					def2 = 175 + random
					arr2[u2] = def2
					console.log(def2 + "175")
				}
				else {
					//def1=115;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = 149;
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
			}
			else if (def2 == 176) {
				def2 = six
				console.log(def2 + '176if')
				if (def2 < 119) {
					def2 = 176 + random
					arr2[u2] = def2
					console.log(def2 + '176')
				}
				else {
					//def1=116;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
			}

			else if (def2 == 177) {
				def2 = seven
				console.log(def2 + '177if')
				if (def2 < 119) {
					def2 = 177 + random
					arr2[u2] = def2
					console.log(def2 + '177')
				}
				else {
					//def1=177;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
			}

			else if (def2 == 178) {
				def2 = eight
				console.log(def2 + '178if')
				if (def2 < 119) {
					def2 = 178 + random
					arr2[u2] = def2
					console.log(def2 + '178')
				}
				else {
					//def1=118;
					arr2[u2] = def2;
					console.log(def2 + '  ' + "elseeeeee")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}

			}
			document.getElementById(arr2[u2]).innerHTML = u2;
			document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
		}


		else if (def2 >= 143 && def2 <= 148) {
			//def1=119;
		
				document.getElementById(arr2[u2]).innerHTML = null;
				document.getElementById(arr2[u2]).style.backgroundColor = "";
				
				/*else{
					if (def2 == u32 && u32 != 149) {
						console.log(def1);
						console.log(def1)
			
						document.getElementById(def2).innerHTML = 'u32';
						console.log('document.getElementById(def1).innerHTML = def1');
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('jhjgnkjjk');
					}
					if (def2== u33 && u33 != 149 ) {
						document.getElementById(def2).innerHTML = 'u33';
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('abcdefgh');
					}
					if (def2== u34 && u34!= 149 ) {
						document.getElementById(def2).innerHTML = 'u34';
						document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
						console.log('ijklmnopqrstuvwxyz');
					}
				}*/
			if (def2 == 143) {
				def2 = 295 + random
				arr2[u2] = def2;
				console.log(def2 + '143if')
				if (def2 < 301) {
					def2 = 143 + random
					arr2[u2] = def2;
					console.log(def2 + '143')
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=200;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				document.getElementById(arr2[u2]).innerHTML = u2;
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
			}
			else if (def2 == 144) {
				def2 = 296 + random
				arr2[u2] = def2;
				console.log(def2 + '144if')
				if (def2 < 301) {
					def2 = 144 + random
					arr2[u2] = def2;
					console.log(def2 + "144")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=199;
					arr2[u2] = def2;;
					console.log(def2 + '' + "elseeeeee")
				}
				document.getElementById(arr2[u2]).innerHTML = u2;
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
			}
			else if (def2 == 145) {
				def2 = 297 + random
				arr2[u2] = def2;
				console.log(def2 + '145if')
				if (def2 < 301) {
					def2 = 145 + random
					arr2[u2] = def2;
					console.log(def2 + "145")
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=198;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				document.getElementById(arr2[u2]).innerHTML = u2;
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
			}
			else if (def2 == 146) {
				def2 = 298 + random
				arr2[u2] = def2;
				console.log(def2 + '146if')
				if (def2 < 301) {
					def2 = 146 + random
					arr2[u2] = def2;
					console.log(def2 + '146')
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=197;
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				document.getElementById(arr2[u2]).innerHTML = u2;
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
			}
			else if (def2 == 147) {
				def2 = 299 + random
				arr2[u2] = def2;
				console.log(def2 + '147if')
				if (def2 < 301) {
					def2 = 147 + random
					arr2[u2] = def2;
					console.log(def2 + '147')
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=196
					arr2[u2] = def2;
					console.log(def2 + '' + "elseeeeee")
				}
				document.getElementById(arr2[u2]).innerHTML = u2;
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
			}

			else if (def2 == 148) {
				def2 = 300 + random
				arr2[u2] = def2
				console.log(def2 + '148if')
				if (def2 < 301) {
					def2 = 148 + random
					arr2[u2] = def2
					console.log(def2 + '148')
				}
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
				else {
					//def1=195
					arr2[u2] = def2;
					console.log(def2 + '  ' + "elseeeeee")
				}
			}

			document.getElementById(arr2[u2]).innerHTML = u2;
			document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
		}

		
			else if (def2 + random <= 307) {
				
					document.getElementById(def2).innerHTML = null;
					document.getElementById(def2).style.backgroundColor = "";

					def2 += random;
					arr2[u2] = def2;
					// console.log(section)
					console.log(arr2[u2])

					document.getElementById(def2).innerHTML = u2;
					document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
				
					/*else{
						if (def2 == u32 && u32 != 149) {
							console.log(def1);
							console.log(def1)
				
							document.getElementById(def2).innerHTML = 'u32';
							console.log('document.getElementById(def1).innerHTML = def1');
							document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
							console.log('jhjgnkjjk');
						}
						if (def2== u33 && u33 != 149 ) {
							document.getElementById(def2).innerHTML = 'u33';
							document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
							console.log('abcdefgh');
						}
						if (def2== u34 && u34!= 149 ) {
							document.getElementById(def2).innerHTML = 'u34';
							document.getElementById(def2).style.backgroundColor = "rgb(93, 241, 93)";
							console.log('ijklmnopqrstuvwxyz');
						}
					}*/
				
				/*console.log('hurrah  else' + def2)
				if(def2!=149){
				document.getElementById(arr2[u2]).innerHTML = u2;
				console.log('def211111111111' + def2);
				document.getElementById(arr2[u2]).style.backgroundColor = "rgb(93, 241, 93)";
				}
				else{
					document.getElementById(arr2[u2]).innerHTML = '';
					console.log('def211111111111' + def2);
					document.getElementById(arr2[u2]).style.backgroundColor = "";	
				}*/
				if (def2 != 130 && def2 != 145 && def2 != 160 && def2 != 175) {
					if (def2 == arr.u11 && arr.u11 != 119 && def2 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def2 == arr.u12 && arr.u12 != 119 && def2 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def2 == arr.u13 && arr.u13 != 119 && def2 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def2 == arr.u14 && arr.u14 != 119 && def2 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def2 == arr1.u21 && arr1.u21 != 134 && def2 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def2 == arr1.u22 && arr1.u22 != 134 && def2 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def2 == arr1.u23 && arr1.u23 != 134 && def2 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def2 == arr1.u24 && arr1.u24 != 134 && def2 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def2 == arr3.u41 && arr3.u41 != 164 && def2 != 164) {
						document.getElementById('13000').innerHTML = 'u41';
						arr3.u41 = 164;
						r10 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u41).innerHTML = '';
						// document.getElementById(arr3.u41).style.backgroundColor = "";
					}
					else if (def2 == arr3.u42 && arr3.u42 != 164 && def2 != 164) {
						document.getElementById('14000').innerHTML = 'u42';
						arr3.u42 = 164;
						r11 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u42).innerHTML = '';
						// document.getElementById(arr3.u42).style.backgroundColor = "";
					}
					else if (def2 == arr3.u43 && arr3.u43 != 164 && def2 != 164) {
						document.getElementById('15000').innerHTML = 'u43';
						arr3.u43 = 164;
						r12 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u43).innerHTML = '';
						// document.getElementById(arr3.u43).style.backgroundColor = "";
					}
					else if (def2 == arr3.u44 && arr3.u44 != 164 && def2 != 164) {
						document.getElementById('16000').innerHTML = 'u44';
						arr3.u44 = 164;
						r13 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u44).innerHTML = '';
						// document.getElementById(arr3.u44).style.backgroundColor = "";
					}
				}
			}
			else {
				arr2[u2];
				console.log(def2 + 'def211111111111111111111');
			}

		toggle = 0;
}	

var arr3 = { "u41": '1641', "u42": '1641', "u43": '1641', "u44": '1641' }

function redsection(u3, num3) {
		
	if (toggle == 0) {
		return;
	}

	var def3 = arr3[u3];
	console.log(def3)

	if (arr3[u3].length == 4) {
		if (random == 6) {
			console.log(toggle + 'toggle')
			// r6 = 1
			def3 = 164;
			arr3[u3] = def3
			console.log('def3toggle' + def3);
			console.log(r6 + 'r6');
			document.getElementById(def3).innerHTML = u3;
			document.getElementById(def3).style.backgroundColor = "rgb(253, 115, 115)";
			document.getElementById(num3).innerHTML = '';
			document.getElementById(num3).style.backgroundColor = "";
		}
	}
		else if (def3 <= 178 && def3 >= 173) {
			
				document.getElementById(def3).innerHTML = null;
				document.getElementById(def3).style.backgroundColor = "";
				
		
			var three = 113 + random
			var four = 114 + random
			var five = 115 + random
			var six = 116 + random
			var seven = 117 + random
			var eight = 118 + random
			if (def3 == 173) {
				def3 = three
				console.log(def3 + '173if')
				if (def3 < 119) {
					def3 = 173 + random
					arr3[u3] = def3
					console.log(def3 + '173')
				}
				else {
					//u21=113;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u32).innerHTML = '';
						// document.getElementById(arr2.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}
			}
			else if (def3 == 174) {
				def3 = four
				console.log(def3 + '174if')
				if (def3 < 119) {
					def3 = 174 + random
					arr3[u3] = def3
					console.log(def3 + "174")
				}
				else {
					//u21=114;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}
			}
			else if (def3 == 175) {
				def3 = five
				console.log(def3 + '175if')
				if (def3 < 119) {
					def3 = 175 + random
					arr3[u3] = def3
					console.log(def3 + "175")
				}
				else {
					//u21=115;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}				
			}
			else if (def3 == 176) {
				def3 = six
				console.log(def3 + '176if')
				if (def3 < 119) {
					def3 = 176 + random
					arr3[u3] = def3
					console.log(def3 + '176')
				}
				else {
					//u21=116;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = u32;
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}
			}

			else if (def3 == 177) {
				def3 = seven
				console.log(def3 + '177if')
				if (def3 < 119) {
					def3 = 177 + random
					arr3[u3] = def3
					console.log(def3 + '177')
				}
				else {
					//u21=177;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}
			}

			else if (def3 == 178) {
				def3 = eight
				console.log(def3 + '178if')
				if (def3 < 119) {
					def3 = 178 + random
					arr3[u3] = def3
					console.log(def3 + '178')
				}
				else {
					//u21=118;
					arr3[u3] = def3;
					console.log(def3 + '  ' + "elseeeeee")
				}
				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u31).innerHTML = '';
						// document.getElementById(arr2.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u33).innerHTML = '';
						// document.getElementById(arr2.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr2.u34).innerHTML = '';
						// document.getElementById(arr2.u34).style.backgroundColor = "";
					}
				}
			}
			document.getElementById(arr3[u3]).innerHTML = u3;
			document.getElementById(arr3[u3]).style.backgroundColor = " rgb(253, 115, 115)";
		}


		else if (def3 >= 158 && def3 <= 163) {
						
				document.getElementById(arr3[u3]).innerHTML = null;
				document.getElementById(arr3[u3]).style.backgroundColor = "";
	
			if (def3 == 158) {
				def3 = 395 + random
				console.log(def3 + '158if')
				if (def3 < 401) {
					def3 = 158 + random
					arr3[u3] = def3
					console.log(def3 + '158')
				}
				else {
					//u21=200;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}

			}
			else if (def3 == 159) {
				def3 = 396 + random
				console.log(def3 + '159if')
				if (def3 < 401) {
					def3 = 159 + random
					arr3[u3] = def3
					console.log(def3 + "159")
				}
				else {
					//u21=199;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
			}
			else if (def3 == 160) {
				def3 = 397 + random
				console.log(def3 + '160if')
				if (def3 < 401) {
					def3 = 160 + random
					arr3[u3] = def3
					console.log(def3 + "160")
				}
				else {
					//u21=198;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}
			}
			else if (def3 == 161) {
				def3 = 398 + random
				console.log(def3 + '161if')
				if (def3 < 401) {
					def3 = 161 + random
					arr3[u3] = def3
					console.log(def3 + '161')
				}
				else {
					//u21=197;
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}

			}
			else if (def3 == 162) {
				def3 = 399 + random
				console.log(def3 + '162if')
				if (def3 < 401) {
					def3 = 162 + random
					arr3[u3] = def3
					console.log(def3 + '162')
				}
				else {
					//u21=196
					arr3[u3] = def3;
					console.log(def3 + '' + "elseeeeee")
				}

			}

			else if (def3 == 163) {
				def3 = 400 + random
				console.log(def3 + '163if')
				if (def3 < 401) {
					def3 = 163 + random
					arr3[u3] = def3
					console.log(def3 + '163')
				}
				else {
					//u21=195
					arr3[u3] = def3;
					console.log(def3 + '  ' + "elseeeeee")
				}

			}

			document.getElementById(arr3[u3]).innerHTML = u3;
			document.getElementById(arr3[u3]).style.backgroundColor = " rgb(253, 115, 115)";
		}

		
		else if (def3 + random <= 407) {
				
				document.getElementById(arr3[u3]).innerHTML = null;
				document.getElementById(arr3[u3]).style.backgroundColor = "";
			
				def3 += random
				arr3[u3] = def3
				console.log(arr3[u3])
				document.getElementById(arr3[u3]).innerHTML = u3;
				document.getElementById(arr3[u3]).style.backgroundColor = "rgb(253, 115, 115)";

				if (def3 != 130 && def3 != 145 && def3 != 160 && def3 != 175) {
					if (def3 == arr.u11 && arr.u11 != 119 && def3 != 119) {
						document.getElementById('1000').innerHTML = 'u11';
						arr.u11 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u11).innerHTML = '';
						// document.getElementById(arr.u11).style.backgroundColor = "";
					}
					else if (def3 == arr.u12 && arr.u12 != 119 && def3 != 119) {
						document.getElementById('2000').innerHTML = 'u12';
						arr.u12 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u12).innerHTML = '';
						// document.getElementById(arr.u12).style.backgroundColor = "";
					}
					else if (def3 == arr.u13 && arr.u13 != 119 && def3 != 119) {
						document.getElementById('3000').innerHTML = 'u13';
						arr.u13 = 113;
						r1 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u13).innerHTML = '';
						// document.getElementById(arr.u13).style.backgroundColor = "";
					}
					else if (def3 == arr.u14 && arr.u14 != 119 && def3 != 119) {
						document.getElementById('4000').innerHTML = 'u14';
						arr.u14 = 113;
						r1 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u14).innerHTML = '';
						// document.getElementById(arr.u14).style.backgroundColor = "";
					}
					else if (def3 == arr1.u21 && arr1.u21 != 134 && def3 != 134) {
						document.getElementById('5000').innerHTML = 'u21';
						arr1.u21 = "1341";
						r2 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u21).innerHTML = '';
						// document.getElementById(arr1.u21).style.backgroundColor = "";
					}
					else if (def3 == arr1.u22 && arr1.u22 != 134 && def3 != 134) {
						document.getElementById('6000').innerHTML = 'u22';
						arr1.u22 = "1341";
						r3 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u22).innerHTML = '';
						// document.getElementById(arr1.u22).style.backgroundColor = "";
					}
					else if (def3 == arr1.u23 && arr1.u23 != 134 && def3 != 134) {
						document.getElementById('7000').innerHTML = 'u23';
						arr1.u23 = "1341";
						r4 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u23).innerHTML = '';
						// document.getElementById(arr1.u23).style.backgroundColor = "";
					}
					else if (def3 == arr1.u24 && arr1.u24 != 134 && def3 != 134) {
						document.getElementById('8000').innerHTML = 'u24';
						arr1.u24 = "1341";
						r5 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr1.u24).innerHTML = '';
						// document.getElementById(arr1.u24).style.backgroundColor = "";
					}
					else if (def3 == arr2.u31 && arr2.u31 != 149 && def3 != 149) {
						document.getElementById('9000').innerHTML = 'u31';
						arr2.u31 = "1491";
						r6 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u31).innerHTML = '';
						// document.getElementById(arr3.u31).style.backgroundColor = "";
					}
					else if (def3 == arr2.u32 && arr2.u32 != 149 && def3 != 149) {
						document.getElementById('10000').innerHTML = 'u32';
						arr2.u32 = "1491";
						r7 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr.u32).innerHTML = '';
						// document.getElementById(arr.u32).style.backgroundColor = "";
					}
					else if (def3 == arr2.u33 && arr2.u33 != 149 && def3 != 149) {
						document.getElementById('11000').innerHTML = 'u33';
						arr2.u33 = "1491";
						r8 = 0;
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u33).innerHTML = '';
						// document.getElementById(arr3.u33).style.backgroundColor = "";
					}
					else if (def3 == arr2.u34 && arr2.u34 != 149 && def3 != 149) {
						document.getElementById('12000').innerHTML = 'u34';
						arr2.u34 = "1491";
						r9 = 0
						console.log('rrrrrrrrrrrrrr');
						// document.getElementById(arr3.u34).innerHTML = '';
						// document.getElementById(arr3.u34).style.backgroundColor = "";
					}
				}

			else {
				arr3[u3] = def3;
				console.log(def3 + 'u4111111111111111');
			}
		}
	toggle = 0;
}

function doubleblock(nostepvalue, nostepcoin){
	console.log("chale chhe")
	if (nostepvalue == 130) {
		console.log(nostepvalue + " nostepvalue");
		stepchange.push(nostepcoin);
		console.log(stepchange);
		document.getElementById(nostepvalue).innerHTML = `<span class=tooltiptext>${stepchange.toString()}</span>`;
		stepper = 1;
	}else{
		if (nostepvalue != 130 && stepper == 1) {
			for (var i = 0; i < stepchange.length; i++) {
				console.log(i + "  i");
				if (stepchange[i] == nostepcoin) {
					console.log(stepchange[i]);
					console.log(stepchange);
					if (stepchange.length > 0) {
						var spliced = stepchange.splice(i, 1);
						console.log(spliced)
						document.getElementById("130").innerHTML = `<span class=tooltiptext>${stepchange.toString()}</span>`;
						if (stepchange.length < 1) {
							document.getElementById('130').innerHTML = `<span class='star'>&#9733</span>`;
							document.getElementById("130").style.background = "";
							console.log("hjkfknk");
						}
						console.log(spliced);
						console.log(stepchange);
					}
					console.log(stepchange);
					// stepper=0;
				}
			}
		}
	}

	console.log("chale chhe")
	if (nostepvalue == 145) {
		console.log(nostepvalue + " nostepvalue");
		stepchange1.push(nostepcoin);
		console.log(stepchange1);
		document.getElementById(nostepvalue).innerHTML = `<span class=tooltiptext>${stepchange1.toString()}</span>`;
		stepper = 1;
	}else{
		if (nostepvalue != 145 && stepper == 1) {
			for (var i = 0; i < stepchange1.length; i++) {
				console.log(i + "  i");
				if (stepchange1[i] == nostepcoin) {
					console.log(stepchange1[i]);
					console.log(stepchange1);
					if (stepchange1.length > 0) {
						var specify = stepchange1.splice(i, 1);
						document.getElementById("145").innerHTML = `<span class=tooltiptext>${stepchange1.toString()}</span>`;
						if (stepchange1.length < 1) {
							document.getElementById('145').innerHTML = `<span class='star'>&#9733</span>`;
							document.getElementById("145").style.background = "";
							console.log("hjkfknk");
						}
						console.log(specify);
						console.log(stepchange1);
					}
					console.log(stepchange1);
					// stepper=0;
				}
			}
		}
	}

	console.log("chale chhe")
	if (nostepvalue == 160) {
		console.log(nostepvalue + " nostepvalue");
		stepchange2.push(nostepcoin);
		console.log(stepchange2);
		document.getElementById(nostepvalue).innerHTML = `<span class=tooltiptext>${stepchange2.toString()}</span>`;
		stepper = 1;
	}else{
		if (nostepvalue != 160 && stepper == 1) {
			for (var i = 0; i < stepchange2.length; i++) {
				console.log(i + "  i");
				if (stepchange2[i] == nostepcoin) {
					console.log(stepchange2[i]);
					console.log(stepchange2);
					if (stepchange2.length > 0) {
						var person = stepchange2.splice(i, 1);
						document.getElementById("160").innerHTML = `<span class=tooltiptext>${stepchange2.toString()}</span>`;
						if (stepchange2.length < 1) {
							document.getElementById('160').innerHTML = `<span class='star'>&#9733</span>`;
							document.getElementById("160").style.background = "";
							console.log("hjkfknk");
						}
						console.log(person);
						console.log(stepchange2);
					}
					console.log(stepchange2);
					// stepper=0;
				}
			}
		}
	}

	console.log("chale chhe")
	if (nostepvalue == 175) {
		console.log(nostepvalue + " nostepvalue");
		stepchange3.push(nostepcoin);
		console.log(stepchange3);
		document.getElementById(nostepvalue).innerHTML = `<span class=tooltiptext>${stepchange3.toString()}</span>`;
		stepper = 1;
	}else{
		if (nostepvalue != 175 && stepper == 1) {
			for (var i = 0; i < stepchange3.length; i++) {
				console.log(i + "  i");
				if (stepchange3[i] == nostepcoin) {
					console.log(stepchange3[i]);
					console.log(stepchange3);
					if (stepchange3.length > 0) {
						var owns = stepchange3.splice(i, 1);
						document.getElementById("175").innerHTML = `<span class=tooltiptext>${stepchange3.toString()}</span>`;
						if (stepchange3.length < 1) {
							document.getElementById('175').innerHTML = `<span class='star'>&#9733</span>`;
							document.getElementById("175").style.background = "";
							console.log("hjkfknk");
						}
						console.log(owns);
						console.log(stepchange3);
					}
					console.log(stepchange3);
					// stepper=0;
				}
			}
		}
	}
}		