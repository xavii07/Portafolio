addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".menu__icono") 
    btnMenu.addEventListener("click", () => {
        const menuLista = document.querySelector(".menu__lista")
        menuLista.classList.toggle("mostrar")
    })
})