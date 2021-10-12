export function skillsAnimation(nameClass, animation) {
    const skills = document.querySelectorAll(nameClass)

    skills.forEach(skill => skill.addEventListener('mouseover', (e) => {
        e.target.classList.toggle(animation)
    }))
}