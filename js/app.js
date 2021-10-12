import { btnHambur } from "./modulos/btnHamburger.js"
import { gsa } from "./modulos/gsap.js"
import { scrollBtn } from "./modulos/scrollBtn.js"
import { scrollSpia } from "./modulos/scrollSpia.js"
import { skillsAnimation } from "./modulos/skills.js"
import { typed } from "./modulos/typedB.js"
import { formValidation } from "./modulos/validarFormulario.js"

document.addEventListener("DOMContentLoaded", () => {
	scrollBtn('.scroll__top-boton')
	btnHambur()
	scrollSpia()
	typed()
	formValidation()
	skillsAnimation(".scroll__top-boton i", "bx-fade-down")
	skillsAnimation(".skills i", "bx-fade-right")
	gsa()
})
