/*jslint devel: true*/
/*eslint-env browser*/
    
var weapon, compWeapon;
var compChoice;

weapon = prompt('Select your weapon: rock, paper, scissors');

compChoice = Math.floor(Math.random() * 3);
//compChoice = 2;

weapon = weapon.trim();
if (!(weapon === 'rock' || weapon === 'paper' || weapon === 'scissors')) {
    alert(weapon + ' is not a vaild weapon');
}

switch (compChoice) {
case 0:
    compWeapon = 'rock';
    break;
case 1:
    compWeapon = 'paper';
    break;
case 2:
    compWeapon = 'scissors';
    break;
default:
    alert('you should never get to here');
}

if (weapon === compWeapon) {
    alert('We both picked the same weapon of ' + weapon);
} else if (weapon === 'rock' && compWeapon === 'scissors') {
    alert('You win!!  ' + weapon + ' beats ' + compWeapon);
} else if (weapon === 'scissors' && compWeapon === 'paper') {
    alert('You win !!  ' + weapon + ' beats ' + compWeapon);
} else if (weapon === 'paper' && compWeapon === 'rock') {
    alert('You win !!  ' + weapon + ' beats ' + compWeapon);
} else {
    alert('I win!!  ' + compWeapon + ' beats ' + weapon);
}