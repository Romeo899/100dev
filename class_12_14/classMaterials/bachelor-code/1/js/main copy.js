document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
	// You put inline style 1000 points of specificity.
}
