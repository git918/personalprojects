
function selectTab(id){
	document.getElementById(id).className = "tabSelected";
}

function highlightTab(obj) {
	obj.className = "tabSelected";
}

function unhighlightTab(obj) {
	obj.className = "";
}