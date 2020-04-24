let text = document.getElementById('HereIsWhereTextIsAdded').innerText;
let deletion = document.getElementById('text2');
let button = document.getElementById('add');
let i=0;
let audio = new Audio('soundtrack.mp3');
let audio2 = new Audio('toBeContinued.mp3');

function addText(){
	deletion.remove();
	textCount(i);
	i++;
}

function textCount(num){
	if(num===0){
		document.getElementById('HereIsWhereTextIsAdded').innerText = "So obviously this is V0.2. Totally different.";
	}
	if (num===1){
		document.getElementById('HereIsWhereTextIsAdded').innerText = "Huh so you are not a good listener";
	}
	if (num===2){
		document.getElementById('HereIsWhereTextIsAdded').innerText = "Told you to only click on this once >:";
	}
	if (num===3){
		document.getElementById('HereIsWhereTextIsAdded').innerText = "You are in deep deep trouble";
	}
	if (num===4){
		document.getElementById('HereIsWhereTextIsAdded').innerText = "For the sake of your ear, turn the volume of your laptop lower. But not too low though (smirk) Try to click the button again";
	}
	if (num===5){
		audio.play();
		document.getElementById('HereIsWhereTextIsAdded').innerText = "BOMB HAS BEEN DEFUSED. COUNTER-TERRORISTS WINS. (AFTER THIS IS OVER KEEP CLICKING!!!)";
	}
	if(num>=6){
		audio.pause();
		audio2.play();
		if(num===6){
			document.getElementById('HereIsWhereTextIsAdded').innerText = "wait for it";
		} else {
			document.getElementById('HereIsWhereTextIsAdded').innerText += " wait for it";
		}
		setTimeout(function aftermath(){button.remove();
	document.getElementById('HereIsWhereTextIsAdded').innerText = "LMAO YOU JUST TRASHED THE BUTTON";},4.8*1000);
	}
}