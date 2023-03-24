// const panels = document.querySelectorAll('.panel')
// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })
// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }

// Selecting all sections 
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // remove active class form all another section
        // and add it to the selected section
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
        panel.classList.add('active')
    })
})