function start(){
	setTimeout('show()', 2000);
}

function show(){
	$('.picture').show(4000);
	var audio = new Audio();
	audio.src = 'music.mp3';
	audio.autoplay = true;
}
