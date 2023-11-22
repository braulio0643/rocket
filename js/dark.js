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
        document.querySelector("#body").classList.add("darkBackground")
        document.getElementById("titulo").classList.add("yellow")
        const titulo = document.title
        console.log()
        switch(titulo){
            case "Rocket Motorcycles": 
                const textoInicio = document.getElementById("textoInicio");
                if(textoInicio) {textoInicio.classList.add("darkMode")} ;
               
            case "Productos":  
                const tienda = document.getElementById("tienda");
                if(tienda){tienda.classList.add("tiendaOscura")};
                
        }
    } else {
        header.classList.remove("darkMode")
        footer.classList.remove("darkMode")
        document.querySelector("#body").classList.remove("darkBackground")
        document.getElementById("titulo").classList.remove("yellow");
        document.getElementById("titulo").classList.remove("titulo");
        const titulo = document.title
        switch(titulo){
            case "Rocket Motorcycles": 
            const textoInicio = document.getElementById("textoInicio");
            if(textoInicio) {textoInicio.classList.remove("darkMode")} ;
                
            case "Productos":
                const tienda = document.getElementById("tienda");
            if(tienda){tienda.classList.remove("tiendaOscura")};
        }
    }
}
