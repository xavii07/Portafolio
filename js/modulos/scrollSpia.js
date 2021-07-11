const d = document

export function scrollSpia() {
    const $secciones = d.querySelectorAll(".seccion")
    const $menuEnlaces = d.querySelectorAll(".menu__enlaces")


    const funObserver = entradas => {
        entradas.map(entrada => {
            if (entrada.isIntersecting) {
                const itemActual = Array.from($menuEnlaces).find(item => item.dataset.url === entrada.target.id)
                itemActual.classList.add("active")

                for(const item of $menuEnlaces) {
                    if (item != itemActual) {
                        item.classList.remove("active")
                    }
                }
            }
            
        })
    }

    const observer = new IntersectionObserver(funObserver, {
        root: null,
        rootMargin: "100px 0px 0px 0px",
        threshold: 0.3
    })

    $secciones.forEach(seccion => observer.observe(seccion))

}
