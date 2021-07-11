const d = document

export function btnHambur() {
    let $menuLista = d.querySelector(".menu__lista")
    const $btnMenu = d.querySelector(".menu__icono") 

	//ocultar o hacer aparecer el menu con el icono y en celulares
    $btnMenu.addEventListener("click", () => {
        $menuLista.classList.toggle("mostrar") 
    })

	//ocultar o hacer aparecer el menu con los enlaces y en celulares
	let $enlaces = d.querySelectorAll(".menu__enlaces")

	$enlaces.forEach(enlace => {
		enlace.addEventListener("click", () => {
			$menuLista.classList.toggle("mostrar")
		})
	})
}