var oBox = document.getElementById('box');

function fn(){
	oBox.style.background='blue';
}

// oBox.onclick = fn;
oBox.onclick = function(){
	// oBox.style.background='blue';
	fn()
}
