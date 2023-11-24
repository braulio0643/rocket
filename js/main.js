
fetch("../js/productos.json")
.then( response => response.json())
.then(productos => {

    const camperasMoto = productos.camperas.reduce((acc, elemento) => {
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
    const containerCamperas = document.getElementById("camperas")
    containerCamperas.innerHTML= camperasMoto


    const cascosMoto = productos.cascos.reduce((acc, elemento) => {
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

    const containerCascos = document.getElementById("cascos")
    containerCascos.innerHTML= cascosMoto


    
const guantesMoto = productos.guantes.reduce((acc, elemento) => {
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




const containerGuantes = document.getElementById("guantes")
containerGuantes.innerHTML= guantesMoto

const comprarCascos = document.querySelectorAll("#addCasco")
const comprarGuantes = document.querySelectorAll("#addGuante")
const comprarCamperas = document.querySelectorAll("#addCampera")


    comprarCascos.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(productos.cascos[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
        Swal.fire({
            title: "Producto agregado al carrito exitosamente",
            icon: "success"
        })
    })
    

} )

comprarGuantes.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(productos.guantes[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
        Swal.fire({
            title: "Producto agregado al carrito exitosamente",
            icon: "success"
        })
    })
} )

comprarCamperas.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(productos.camperas[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
        Swal.fire({
            title: "Producto agregado al carrito exitosamente",
            icon: "success"
        })
    })
} )


})







let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}
console.log(carrito)


document.querySelector()



