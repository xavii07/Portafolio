export function skillsAnimation(nameClass, animation) {
    const skills = document.querySelectorAll(nameClass)

    skills.forEach(skill => skill.addEventListener('mouseover', (e) => {
        e.target.classList.add(animation)
    }))
    skills.forEach(skill => skill.addEventListener('mouseout', (e) => {
        e.target.classList.remove(animation)
    }))
}