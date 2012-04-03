$(document).ready(function() {
	window.requestAnimationFrame = (function(){
	    return  window.requestAnimationFrame       || 
	        window.webkitRequestAnimationFrame || 
	        window.mozRequestAnimationFrame
	})();

	var canvas = document.getElementById('win');
    var context = canvas.getContext('2d');

	var ps3Buttons = new Array();

	var gamepadActive = false,
	ps3Buttons = new Array(),
	ps3Axis = new Array();

	ps3Buttons[0]   = 'croix', 
	ps3Buttons[1]   = 'rond',
	ps3Buttons[2]   = 'carre',
	ps3Buttons[3]   = 'triangle',

	ps3Buttons[4]   = 'L1',
	ps3Buttons[5]   = 'R1',
	ps3Buttons[6]   = 'L2',
	ps3Buttons[7]   = 'R2',

	ps3Buttons[8]   = 'select',
	ps3Buttons[9]   = 'start',

	ps3Buttons[10]  = 'L3',
	ps3Buttons[11]  = 'R3',

	ps3Buttons[12]  = 'haut',
	ps3Buttons[13]  = 'bas',
	ps3Buttons[14]  = 'gauche',
	ps3Buttons[15]  = 'droite',

	ps3Buttons[16]  = 'PS';

	ps3Axis[0] = 'X_Left',
	ps3Axis[1] = 'Y_Left',
	ps3Axis[2] = 'X_Right',
	ps3Axis[3] = 'Y_Right';

	function clean() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	};

	function clear() {
		ps3Init();
	    var cell;
	    var ids = new Array("croix_pressed", "croix_val",
				"carre_pressed", "carre_val",
				"rond_pressed", "rond_val",
				"triangle_pressed", "triangle_val",
				"gauche_pressed", "gauche_val",
				"droite_pressed", "droite_val",
				"haut_pressed", "haut_val",
				"bas_pressed", "bas_val",
				"start_pressed", "start_val",
				"select_pressed", "select_val",
				"L1_pressed", "L1_val",
				"L2_pressed", "L2_val",
				"L3_pressed", "L3_val",
				"R1_pressed", "R1_val",
				"R2_pressed", "R2_val",
				"R3_pressed", "R3_val",
				"PS_pressed", "PS_val",
				'X_Left_pressed', 'X_Left_val',
				'Y_Left_pressed', 'Y_Left_val',
				'X_Right_pressed', 'X_Right_val',
				'Y_Right_pressed', 'Y_Right_val');
	    for (var i = 0; i < ids.length; i++) {
		cell = document.getElementById(ids[i]);
		cell.innerHTML = '';
	    }
	}

	function set(name, val) {
		padMap[name] = val;
	    var cell = document.getElementById(name + "_pressed");
	    cell.innerHTML = 'X';
	    cell = document.getElementById(name + "_val");
	    cell.innerHTML = val.toFixed(2);
	}

	function dispatchButtons(buttons) {
	    for (var i = 0; i < buttons.length; i++) {
			if (buttons[i] > 0) {
		    	set(ps3Buttons[i], buttons[i]);
			}
	    }
	}

	function dispatchAxis(axes) {
	    for (var i = 0; i < axes.length; i++) {
			if (axes[i] != 0) {
			    set(ps3Axis[i], axes[i]);
			}
	    }
	}

	var ratioPad = 0.45;
	var ratioTouch = 0.5;
	var selectedColor = "rgba(0,0,0,1)";
	var unselectedColor = "rgba(0,0,0,0.5)";
	var xleft = 0;
	var xright = 0;
	var yleft = 0;
	var yright = 0;

	function draw() {
		var img = new Image();

		context.fillStyle = unselectedColor;
		
		img.src = 'ps3.svg';
		context.drawImage(img, 0, 0, img.width, img.height, 50, 0, img.width * ratioPad, img.height * ratioPad);

		
		// pad analogiques
		//left
		if (padMap['L3'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(157 + padMap['X_Left'] * 5, 115 + padMap['Y_Left'] * 5, 20, 0, Math.PI*2, true);
		context.closePath();
		context.stroke();
		context.fill();

		//right
		if (padMap['R3'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(244 + padMap['X_Right'] * 5, 115 + padMap['Y_Right'] * 5, 20 , 0, Math.PI*2, true);
		context.closePath();
		context.stroke();
		context.fill();

		//crosses
		//bottom
		if (padMap['bas'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(103, 84);
		context.lineTo(120, 84);
		context.lineTo(120, 100);
		context.lineTo(103, 100);
		context.closePath();
		context.stroke();
		context.fill();

	
		//right
		if (padMap['droite'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(127, 60);
		context.lineTo(143, 60);
		context.lineTo(143, 77);
		context.lineTo(127, 77);
		context.closePath();
		context.stroke();
		context.fill();

		//left
		if (padMap['gauche'] == 1) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(80, 60);
		context.lineTo(96, 60);
		context.lineTo(96, 77);
		context.lineTo(80, 77);
		context.closePath();
		context.stroke();
		context.fill();


		//up
		if (padMap['haut'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(103, 37);
		context.lineTo(120, 37);
		context.lineTo(120, 54);
		context.lineTo(103, 54);
		context.closePath();
		context.stroke();
		context.fill();


		//sigles
		//up
		if (padMap['triangle'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(289.5,47,10,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();

		img.src = 'ps3-triangle.png';
		context.drawImage(img, 0, 0, img.width, img.height, 281.6, 38, img.width * ratioTouch, img.height * ratioTouch);

		//right
		if (padMap['rond'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(312,69,10,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();

		img.src = 'ps3-circle.png';
		context.drawImage(img, 0, 0, img.width, img.height, 303.45, 61, img.width * ratioTouch, img.height * ratioTouch);

		//left
		if (padMap['carre'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(267,69,10,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();

		img.src = 'ps3-square.png';
		context.drawImage(img, 0, 0, img.width, img.height, 260, 62, img.width * ratioTouch, img.height * ratioTouch);

		//bottom
		if (padMap['croix'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(289,92,10,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();

		img.src = 'ps3-cross.png';
		context.drawImage(img, 0, 0, img.width, img.height, 281.8, 85, img.width * ratioTouch, img.height * ratioTouch);

		//center
		//PS
		if (padMap['PS'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.arc(200,90,12,0,Math.PI*2,true);
		context.closePath();
		context.stroke();
		context.fill();

		//select
		if (padMap['select'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(165, 60);
		context.lineTo(180, 60);
		context.lineTo(180, 70);
		context.lineTo(165, 70);
		context.closePath();
		context.stroke();
		context.fill();

		if (padMap['start'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(220, 60);
		context.lineTo(235, 60);
		context.lineTo(235, 70);
		context.lineTo(220, 70);
		context.closePath();
		context.stroke();
		context.fill();

		//up
		//R1
		if (padMap['R1'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(270, 5);
		context.lineTo(305, 5);
		context.lineTo(300, 2);
		context.lineTo(280, 2);
		context.closePath();
		context.stroke();
		context.fill();

		//L1
		if (padMap['L1'] > 0) {
			context.fillStyle = selectedColor;
		} else {
			context.fillStyle = unselectedColor;
		}
		context.beginPath();
		context.moveTo(95, 5);
		context.lineTo(130, 5);
		context.lineTo(117, 2);
		context.lineTo(100, 2);
		context.closePath();
		context.stroke();
		context.fill();
	}

	var padMap = new Object();

	function ps3Init() {
		padMap['croix'] = 0;
		padMap['carre'] = 0;
		padMap['triangle'] = 0;
		padMap['rond'] = 0;

		padMap['L1'] = 0;
		padMap['L2'] = 0;
		padMap['R1'] = 0;
		padMap['R2'] = 0;

		padMap['L3'] = 0;
		padMap['R3'] = 0;

		padMap['start'] = 0;
		padMap['select'] = 0;

		padMap['gauche'] = 0;
		padMap['droite'] = 0;
		padMap['haut'] = 0,
		padMap['bas'] = 0;

		padMap['PS'] = 0;

		padMap['X_Left'] = 0;
		padMap['Y_Left'] = 0;
		padMap['X_Right'] = 0;
		padMap['Y_Right'] = 0;
	}

ps3Init();
console.log(padMap);

	function runAnimation() {
	    window.requestAnimationFrame(runAnimation);
	    
	    clean();
	    draw();
	  
	    var gamepads = navigator.webkitGamepads;

	    for (var i = 0; i < gamepads.length; i++) {
			var pad = gamepads[i];
			if (pad) {
		    	var axes = pad.axes;
		    	var buttons = pad.buttons;
		    	clear();
		    	dispatchButtons(buttons);
		    	dispatchAxis(axes);
			}	
	    }
	}



	window.requestAnimationFrame(runAnimation);
});

