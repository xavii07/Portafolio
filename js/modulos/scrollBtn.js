const d = document
const w = window

export function scrollBtn(btnclass) {
    const $btn = d.querySelector(btnclass)
   

    w.addEventListener('scroll', e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop
        
        if(scrollTop >= 600) {
            $btn.classList.remove('hidden')
        } else {
            $btn.classList.add('hidden')
        }
    })

    d.addEventListener('click', e => {
        if(e.target.matches(btnclass) || e.target.matches(`${btnclass} *`)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}