var gamepadActive = false;
var ps3Button = new Array();

ps3Buttons[12]  = 'triangle',
ps3Buttons[15]  = 'square',
ps3Buttons[14]  = 'cross',
ps3Buttons[13]  = 'circle',
ps3Buttons[4]   = 'up',
ps3Buttons[7]   = 'left',
ps3Buttons[6]   = 'down',
ps3Buttons[5]   = 'right',
ps3Buttons[10]  = 'L1',
ps3Buttons[8]   = 'L2',
ps3Buttons[11]  = 'R1',
ps3Buttons[9]   = 'R2',
ps3Buttons[1]   = 'L3',
ps3Buttons[2]   = 'R3',
ps3Buttons[16]  = 'PS',
ps3Buttons[0]   = 'select',
ps3Buttons[3]   = 'start';

function gamepadConnected(e) {
    console.log(e);
}

function gamepadDisconnected(e) {
    console.log(e);
}

function buttonPressed(e, pressed) {
    console.log(ps3Buttons[evt.button] + ' was pressed');
}

function buttonDown(e) = buttonPressed(e, true);
function buttonUp(e) = buttonPressed(e, false);

function moveAnalogSticks(e) {
    console.log(e.axis, e.value);
}

window.addEventListener("webkitgamepadconnected", gamepadConnected, false);
window.addEventListener("webkitgamepaddisconnected", gamepadDisconnected, false);
window.addEventListener("webkitgamepadbuttonup", buttonUp ,false);
window.addEventListener("webkitgamepadbuttondown", buttonDown, false);
window.addEventListener("webkitgamepadbuttonup", buttonUp, false);

window.addEventListener("gamepadconnected", gamepadConnected, false);
window.addEventListener("gamepaddisconnected", gamepadDisconnected, false);
window.addEventListener("gamepadbuttonup", buttonUp ,false);
window.addEventListener("gamepadbuttondown", buttonDown, false);
window.addEventListener("gamepadbuttonup", buttonUp, false);

window.addEventListener('MozGamepadConnected', gamepadConnected, false);
window.addEventListener('MozGamepadDisconnected', gamepadDisconnected, false);
window.addEventListener('MozGamepadButtonUp', buttonUp, false);
window.addEventListener('MozGamepadButtonDown', buttonDown, false);
window.addEventListener('MozGamepadAxisMove', moveAnalogSticks, false);