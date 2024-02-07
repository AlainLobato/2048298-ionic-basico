var text = document.getElementById("input");
var txt = "";

Save = () => {
	txt = text.value;
	console.log(txt);
}

Delete = () => {
	txt = text.value;
	txt = "";
}

NewClass = () => {
	var change = document.getElementById("body");
	change.classList.toggle("change")
}

