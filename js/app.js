import { btnHambur } from "./modulos/btnHamburger.js"
import { scrollBtn } from "./modulos/scrollBtn.js"
import { scrollSpia } from "./modulos/scrollSpia.js"
import { typed } from "./modulos/typedB.js"
import { formValidation } from "./modulos/validarFormulario.js"

document.addEventListener("DOMContentLoaded", () => {
	scrollBtn('.scroll__top-boton')
	btnHambur()
	scrollSpia()
	typed()
	formValidation()
})
