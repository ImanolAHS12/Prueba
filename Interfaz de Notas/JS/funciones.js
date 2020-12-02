//Variables
let agregarNota; //boton
let tituloNota; //input
let textoNota; //mensaje
let temaNota; //tema
let notas = []; //arreglo


window.addEventListener("load", inicializar, true);


function inicializar(){
	agregarNota = document.getElementById('agregar-nota');
	tituloNota = document.getElementById('titulo-nota');
	textoNota = document.getElementById('texto-nota');
	temaNota = document.getElementById('tema-nota');
	//Contenedor de las publicaciones
	contenedor = document.querySelector('.publicaciones');

	//boton agregar nota
	agregarNota.addEventListener('click',addNota, true);
}

function addNota(){
	//objeto nueva nota
	nuevaNota = {
		titulo: tituloNota.value, //propiedades nota
		texto: textoNota.value,
		tema: temaNota.value,
	};
	//agregar nota al arreglo
	notas.push(nuevaNota);

	contenedor.innerHTML += "<div class='nota "+nuevaNota.tema+"'><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>";
}