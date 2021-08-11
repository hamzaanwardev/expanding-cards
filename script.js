// Adding click event and active class
const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active")

    })

})
// fuction for removing active class
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}