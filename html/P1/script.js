var montox = 0;
var articulo = '';

function Agregar() {
	ticket = document.querySelector("#ticket");
	articulo = document.querySelector("#Art").value;
	monto = document.querySelector("#Mnt").value;
	
	var p = document.createElement("p");
	p.innerHTML = articulo + "---------- $" + monto;

	
	ticket.appendChild(p);
	limpiar();
}

function limpiar(){
	articulo = document.querySelector("#Art");
	monto = document.querySelector("#Mnt");

	articulo.value = "";
	monto.value = "";
}