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
	msj = document.querySelector('.msj');

	//boton agregar nota
	agregarNota.addEventListener('click',addNota, true);
}

function addNota(){
	if(tituloNota.value!="" && textoNota.value!=""){
		//objeto nueva nota
	nuevaNota = {
		titulo: tituloNota.value, //propiedades nota
		texto: textoNota.value,
		tema: temaNota.value,
	};
	//agregar nota al arreglo
	notas.push(nuevaNota);

	contenedor.innerHTML += "<div class='nota "+nuevaNota.tema+"'><div class='eliminar' id="+(notas.length-1)+">x</div><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>";
	}else{
		msj.classList.add('mostrar')
		setTimeout(function(){
			msj.classList.remove('mostrar')
		}, 3000)
	}

	eliminar= document.querySelectorAll('.eliminar');
	for(let i=0; i<notas.length; i++){
		eliminar[i].addEventListener('click',eliminarNota, true);
	}
}

function eliminarNota(){
	console.log("click", event.target.id)
	notas.splice(event.target.id,1)

	document.getElementById(event.target.id).parentElement.remove();
}
