const cascosMoto = cascos.reduce((acc, elemento) => {
    return acc + `
    <div class = "producto">
        <h3 class="centrado">${elemento.nombre}</h3>

        <div class="container-img">
            <img class="centrado" src=${elemento.img} alt=${elemento.nombre}>
        </div>

        <h4>$${elemento.precio}</h4>

        <div class="add-carrito" id="addCasco">
            <h4> Añadir al carrito </h4>
        </div>
    </div>
    `
}, "")

const guantesMoto = guantes.reduce((acc, elemento) => {
    return acc + `
    <div class = "producto">
        <h3 class="centrado">${elemento.nombre}</h3>

        <div class="container-img">
            <img src=${elemento.img} alt=${elemento.nombre}>
        </div>

        <h4>$${elemento.precio}</h4>

        <div class="add-carrito" id="addGuante">
            <h4> Añadir al carrito </h4>
        </div>
    </div>
    `
}, "")

const camperasMoto = camperas.reduce((acc, elemento) => {
    return acc + `
    <div class = "producto">
        <h3 class="centrado">${elemento.nombre}</h3>

        <div class="container-img">
            <img class="centrado" src=${elemento.img} alt=${elemento.nombre}>
        </div>

        <h4>$${elemento.precio}</h4>

        <div class="add-carrito" id="addCampera">
            <h4> Añadir al carrito </h4>
        </div>
    </div>
    `
}, "")

const containerCascos = document.getElementById("cascos")
const containerGuantes = document.getElementById("guantes")
const containerCamperas = document.getElementById("camperas")

containerCascos.innerHTML= cascosMoto

containerGuantes.innerHTML= guantesMoto

containerCamperas.innerHTML= camperasMoto

let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}
console.log(carrito)

const comprarCascos = document.querySelectorAll("#addCasco")
const comprarGuantes = document.querySelectorAll("#addGuante")
const comprarCamperas = document.querySelectorAll("#addCampera")

comprarCascos.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(cascos[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
    })
    

} )

comprarGuantes.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(guantes[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
    })
} )

comprarCamperas.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(camperas[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
    })
} )

