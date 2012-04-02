window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame;
})();


/*var context = $("#draw");
var canvas = context.get(0).getContext("2d");
*/
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
	canvas.clearRect(0, 0, context.width(), context.height());
};

function clear() {
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

function draw() {
    canvas.fillRect(0,0,100,100);
}

function runAnimation() {
    window.requestAnimationFrame(runAnimation);
    
    //draw();
  
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

