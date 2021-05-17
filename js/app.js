addEventListener("DOMContentLoaded", () => {

	let menuLista = document.querySelector(".menu__lista")
    const btnMenu = document.querySelector(".menu__icono") 

	//ocultar o hacer aparecer el menu con el icono y en celulares
    btnMenu.addEventListener("click", () => {
        menuLista.classList.toggle("mostrar") 
    })

	//ocultar o hacer aparecer el menu con los enlaces y en celulares
	let enlaces = document.querySelectorAll(".menu__enlaces")

	enlaces.forEach(enlace => {
		enlace.addEventListener("click", () => {
			menuLista.classList.toggle("mostrar")
		})
	})
})


//Indicador del Menú
const secciones = document.querySelectorAll(".seccion")
const menuEnlaces = document.querySelectorAll(".menu__enlaces")

const funObserver = entradas => {
	entradas.map(entrada => {
		if (entrada.isIntersecting) {
			const itemActual = Array.from(menuEnlaces).find(item => item.dataset.url === entrada.target.id)
			itemActual.classList.add("active")

			for(const item of menuEnlaces) {
				if (item != itemActual) {
					item.classList.remove("active")
				}
			}
		}
		
	})
}

const observer = new IntersectionObserver(funObserver, {
	root: null,
	rootMargin: "0px",
	threshold: 0.8
})

secciones.forEach(seccion => observer.observe(seccion))

	


//Configuración de Typed para la escritura
const typed = new Typed('.typed', {
    strings: [
    'soy XAVIER GASPATA'],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


//Validar el Formulario

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	correo: false,
}


const formulario = document.querySelector('#formulario')
const inputs = document.querySelectorAll('#contacto input')


const validarFormulario = e => {
	
	switch (e.target.name) {
		case 'nombre':
			validarCampo(expresiones.nombre, e.target, 'nombre')
			
			break;
		case 'correo':
			validarCampo(expresiones.correo, e.target, 'correo')
				
		break;
	
		default:
			break;
	}

}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value.trim())) {

		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
		document.querySelector(`#grupo__${campo} i`).classList.add('bxs-check-circle')
		document.querySelector(`#grupo__${campo} i`).classList.remove('bxs-x-circle')
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos[campo] = true
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
		document.querySelector(`#grupo__${campo} i`).classList.add('bxs-x-circle')
		document.querySelector(`#grupo__${campo} i`).classList.remove('bxs-check-circle')
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo] = false
	}
}


inputs.forEach(input => {
	input.addEventListener('keyup', validarFormulario)
	input.addEventListener('blur', validarFormulario)
})



formulario.addEventListener('submit', (e) => {
	e.preventDefault()

	const textarea = document.getElementById('asunto')
	const mensaje = textarea.value.length > 10 

	if(campos.nombre && campos.correo && mensaje) {
		formulario.reset()

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
		}, 3000)

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icon) => {
			icon.classList.remove('formulario__grupo-correcto')
		})
	
		
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
		}, 3000)
	}
})


 


