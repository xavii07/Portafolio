export function gsa() {
    gsap.from(".informacion__img", { duration: 1, x: -500, delay: 0.2, ease: "power2", scale: 0});
    gsap.from(".informacion__saludo", { duration: 1, x: 500, delay: 0.2, ease: "power", opacity: 0});
    gsap.from(".informacion__texto", { duration: 1, y: 500, delay: 0.2, ease: "power1", opacity: 0});
    gsap.from(".menu__lista", { duration: 1, y: -100, delay: 1.5, ease: "power"});
   
}