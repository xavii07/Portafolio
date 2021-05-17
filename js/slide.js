/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDER
=============================================*/
let p = {
    paginacion: document.querySelectorAll(".slide__circulos"),
    item: 0,
    cajaSlide: document.querySelector(".slide__ulImage"),
    imgSlide: document.querySelectorAll(".slide__contImage"),
    retroceder: document.querySelector("#retroceder"),
    avanzar: document.querySelector("#avanzar"),
    velocidadSlide: 2500,
    formatearVelocidad: false
}



/*=============================================
OBJETO CON LOS METODOS DEL SLIDER
=============================================*/

let m = {
    inicioSlide: () => {
        for(i=0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide)

            p.imgSlide[i].style.width = (100 / p.paginacion.length) + "%"
        }

        p.retroceder.addEventListener("click", m.retroceder)
        p.avanzar.addEventListener("click", m.avanzar)

        m.intervalo()

        p.cajaSlide.style.width = (p.paginacion.length * 100) + "%"
    },

    paginacionSlide: (e) => {
        
        p.item = (e.target.parentNode.getAttribute("item") - 1)

        m.movimientoSlide(p.item)
        
    },

    avanzar: () => {
        if(p.item == p.imgSlide.length - 1) {
            p.item = 0
        } else {
            p.item++
        }
        m.movimientoSlide(p.item)
    },

    retroceder: () => {
        if(p.item == 0) {
            p.item = p.imgSlide.length - 1
        } else {
            p.item--
        }
        m.movimientoSlide(p.item)
    },

    movimientoSlide: (e) => {
        p.formatearVelocidad = true

        p.cajaSlide.style.left = (e * -100) + "%"

        for(i=0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .3
        }

        p.paginacion[e].style.opacity = 1

        p.cajaSlide.style.transition = "1s left ease-in-out"
    },

    intervalo: () => {
        setInterval(() => {
            if(p.formatearVelocidad) {
                p.formatearVelocidad = false
            } else {
                m.avanzar()
            }
        }, p.velocidadSlide)
    }
}

m.inicioSlide()