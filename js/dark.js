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
            case "Servicios":
                const servicios = document.getElementById("servicios");
                if(servicios){servicios.classList.add("serviciosOscuros")}
            case "Galería":
                const galeria = document.getElementById("galeria");
                if(galeria){document.getElementById("galeria").classList.add("galeriaOscura")}
            case "Contacto":
                const contacto = document.getElementById("contacto");
                if(contacto){document.getElementById("contacto").classList.add("contactoOscuro")}
            case "Carrito":
                const carrito = document.getElementById("carrito-container");
                if(carrito){document.getElementById("carrito-container").classList.add("carritoOscuro")}
                
        }
        if(document.title== "Rocket Motorcycles"){
            document.getElementById("botonCarrito").src= "./multimedia/carrito-yellow.png"
            document.getElementById("botonDark").src="./multimedia/dark-yellow.png"
            document.getElementById("ubicacion").src="./multimedia/ubicacion-yellow.png"
            document.getElementById("ig").src="./multimedia/ig-yellow.png"
            document.getElementById("fb").src="./multimedia/fb-yellow.png"
            document.getElementById("gmail").src="./multimedia/gmail-yellow.png"
        } else {
            document.getElementById("botonCarrito").src= "../multimedia/carrito-yellow.png"
            document.getElementById("botonDark").src="../multimedia/dark-yellow.png"
            document.getElementById("ubicacion").src="../multimedia/ubicacion-yellow.png"
            document.getElementById("ig").src="../multimedia/ig-yellow.png"
            document.getElementById("fb").src="../multimedia/fb-yellow.png"
            document.getElementById("gmail").src="../multimedia/gmail-yellow.png"
        }
        

    } else {
        header.classList.remove("darkMode")
        footer.classList.remove("darkMode")
        document.querySelector("#body").classList.remove("darkBackground")
        document.getElementById("titulo").classList.remove("yellow");
        const titulo = document.title
        switch(titulo){
            case "Rocket Motorcycles": 
            const textoInicio = document.getElementById("textoInicio");
            if(textoInicio) {textoInicio.classList.remove("darkMode")} ;
                
            case "Productos":
                const tienda = document.getElementById("tienda");
            if(tienda){tienda.classList.remove("tiendaOscura")};

            case "Servicios":
                const servicios = document.getElementById("servicios");
                if(servicios){servicios.classList.remove("serviciosOscuros")}

            case "Galería":
                const galeria = document.getElementById("galeria");
                if(galeria){document.getElementById("galeria").classList.remove("galeriaOscura")}
            case "Contacto":
                const contacto = document.getElementById("contacto");
                if(contacto){document.getElementById("contacto").classList.remove("contactoOscuro")}
            case "Carrito":
                const carrito = document.getElementById("carrito-container");
                if(carrito){document.getElementById("carrito-container").classList.remove("carritoOscuro")}
        }
        if(document.title== "Rocket Motorcycles"){
            document.getElementById("botonCarrito").src= "./multimedia/carrito-black.png"
            document.getElementById("botonDark").src="./multimedia/dark.png"
            document.getElementById("ubicacion").src="./multimedia/ubicacion-black.png"
            document.getElementById("ig").src="./multimedia/ig-black.png"
            document.getElementById("fb").src="./multimedia/fb-black.png"
            document.getElementById("gmail").src="./multimedia/gmail-black.png"
        } else {
            document.getElementById("botonCarrito").src= "../multimedia/carrito-black.png"
            document.getElementById("botonDark").src="../multimedia/dark.png"
            document.getElementById("ubicacion").src="../multimedia/ubicacion-black.png"
            document.getElementById("ig").src="../multimedia/ig-black.png"
            document.getElementById("fb").src="../multimedia/fb-black.png"
            document.getElementById("gmail").src="../multimedia/gmail-black.png"
        }
    }
}
