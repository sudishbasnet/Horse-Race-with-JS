var interval = 0;

function startRace() {
	console.log('Starting Race!');
	loop();
}

var nearEndOfRace = true;
var raceOver = false;

function loop() {
	interval = setInterval(moveHorse, 40);
	var startButton = document.getElementById('start');
	startButton.removeEventListener('click', startRace);
	var horse = document.getElementsByClassName('horse');
	for (var num = 0; num < horse.length; num++) {
	horse[num].style.left = window.innerWidth * 0.18 + 'px';
	raceOver = false;
	nearEndOfRace = false;
	}
}

function moveHorse() {
	var horse = document.getElementsByClassName('horse');
	for (var num = 0; num < horse.length; num++) {
		var positionTop = horse[num].offsetTop;
		var positionLeft = horse[num].offsetLeft;
		if (raceOver == false && positionLeft >= window.innerWidth * 0.15 && positionLeft <= window.innerWidth * 0.84 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.36 - 30 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.05 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.left = positionLeft + (16-num) + (Math.random() * 10) + 'px';
			horse[num].className = 'horse runRight';
		} else if (raceOver == false && positionLeft >= window.innerWidth * 0.84 - 50 - (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.95 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.85 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.05 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.top = positionTop + (16-num) + (Math.random() * 10) + 'px';
			horse[num].className = 'horse runDown';
			nearEndOfRace = true;
		} else if (raceOver == false && positionLeft >= window.innerWidth * 0.08 - 50 + (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.95 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.98 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.85 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.left = positionLeft - (16-num) + (Math.random() * 10) + 'px';
			horse[num].className = 'horse runLeft';
		} else if (positionLeft >= window.innerWidth * 0.05 - 50 - (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.26 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.98 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.08 - 50 + (num*window.innerHeight * 0.04)) {
			horse[num].style.top = positionTop - (16-num) + (Math.random() * 10) + 'px';
			horse[num].className = 'horse runUp';
		} else if (nearEndOfRace == true && positionLeft >= window.innerWidth * 0.05 && positionLeft < window.innerWidth * 0.34 - 50 && positionTop <= window.innerHeight * 0.35 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.05 - 50) {
			horse[num].style.left = positionLeft + (Math.random() * 10) + 'px';
			horse[num].className = 'horse runRight';
			raceOver = true;
			var startButton = document.getElementById('start');
			startButton.addEventListener('click', startRace);
			console.log("Race Over");
		}
		if (raceOver == true && positionLeft >= window.innerWidth * 0.28 && positionLeft <= window.innerWidth * 0.34) {
			horse[num].className = 'horse standRight';
			console.log(horse[num]);
			for (var position = 0; position < horse.length; position++) {
				var elements = document.getElementsByClassName('horse'+[num]);
			}
		}
	}
}

function myLoadFunction() {
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startRace);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
