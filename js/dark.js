const dark = document.querySelector(".botonDark")
const header = document.getElementById("header")
const footer = document.getElementById("footer")
let statusDark = localStorage.getItem("dark")

if(statusDark){
    statusDark = JSON.parse(statusDark)
    statusDark ? applyDarkMode(true) : applyDarkMode(false)
} else {
    statusDark = false
    localStorage.setItem("dark", JSON.stringify(statusDark))
}


dark.addEventListener("click", ()=> {
    if(header.classList.contains("darkMode") && footer.classList.contains("darkMode")){
        applyDarkMode(false)
        localStorage.setItem("dark", JSON.stringify(false))
    } else {
        applyDarkMode(true)
        localStorage.setItem("dark", JSON.stringify(true))
    }
})
function applyDarkMode(status){
    if(status){
        header.classList.add("darkMode")
        footer.classList.add("darkMode")
    } else {
        header.classList.remove("darkMode")
        footer.classList.remove("darkMode")
    }
}