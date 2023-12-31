
let orden = localStorage.getItem("orden")
let filtros = localStorage.getItem("filtros")
let ofertas = localStorage.getItem("ofertas")
if(!orden) {localStorage.setItem("orden", "alfaCreciente")}
if(!filtros){localStorage.setItem("filtros", "todos")}
if(!ofertas){
    localStorage.setItem("ofertas", JSON.stringify([]))
    ofertas = JSON.parse(ofertas)
}




function visualizarProductos (array){
    const resultado = array.reduce((acc, elemento) => {
        if(elemento.descuento==0){
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
        `} else {
            return acc + `
            <div class = "producto">
                <h3 class="centrado">${elemento.nombre}</h3>
            
                <div class="container-img">
                    <img class="centrado" src=${elemento.img} alt=${elemento.nombre}>
                </div>
            
                <div class= "precio-en-descuento"> 
                    <h4 class="tachado">$${elemento.precio}</h4>
                    <h3>-${elemento.descuento*100}% OFF!  </h3>
                </div> 
                <h4> $${elemento.precio*(1-elemento.descuento)} </h4>
            
                <div class="add-carrito" id="addCampera">
                    <h4> Añadir al carrito </h4>
                </div>
        </div>
        `}
    }, "")
    return resultado
}



function peticion (orden, filtro){
    fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        const containerProductos = document.querySelector(".categoria")
        ordenar(data, orden)
        const dataFinal = filtrar(data, filtro)
        containerProductos.innerHTML = visualizarProductos(dataFinal)
        const comprarProductos= document.querySelectorAll(".add-carrito")
        comprarProductos.forEach((element, index) => {
            element.addEventListener("click", () => {
                carrito.push(dataFinal[index])
                localStorage.setItem("carro", JSON.stringify(carrito))
                Swal.fire({
                    title: "Producto agregado al carrito exitosamente",
                    icon: "success"
                })
            })
        } )
    })

}

peticion("alfaCreciente", "todos")

const filtrar= (data,filtro) => {
    console.log(filtro)
    if(filtro=="filtroCascos"){
        localStorage.setItem("filtros","filtroCascos")
        return data.filter((producto)=> producto.nombre.includes('Casco'))
        
    }
    if(filtro=="filtroGuantes"){
        localStorage.setItem("filtros","filtroGuantes")
        return data.filter((producto)=> producto.nombre.includes('Guantes'))
        
    }
    if(filtro=="filtroCamperas"){
        localStorage.setItem("filtros","filtroCamperas")
        return data.filter((producto)=> (producto.nombre.includes('Campera') || producto.nombre.includes('Buzo')))
    }
    if(filtro=="filtroOfertas"){
        localStorage.setItem("filtros","filtroOfertas")
        return data.filter((producto)=> (producto.descuento> 0))
    }
    return data
}

const ordenar= (data, orden) =>{
    if(orden == "precioCreciente"){
        data.sort((a,b)=> (a.precio- a.precio*a.descuento) - (b.precio - b.precio*b.descuento))
        localStorage.setItem("orden","precioCreciente")
        
    }
    if(orden == "precioDecreciente"){
        data.sort((a,b)=> (a.precio- a.precio*a.descuento) - (b.precio - b.precio*b.descuento))
        data.reverse()
        localStorage.setItem("orden","precioDecreciente")

    }
    if(orden == "alfaCreciente"){
        data.sort((a,b) =>{
            if(a.nombre < b.nombre){
                return -1
            }
            if(a.nombre > b.nombre){
                return 1
            }
            return 0
        })
        localStorage.setItem("orden","alfaCreciente")
    }
    if(orden == "alfaDecreciente"){
        data.sort((a,b) =>{
            if(a.nombre < b.nombre){
                return 1
            }
            if(a.nombre > b.nombre){
                return -1
            }
            return 0
        })
        localStorage.setItem("orden","alfaDecreciente")
    }
}

document.getElementById("ordenar").addEventListener('change',(event)=>{
    const filtro = localStorage.getItem("filtros")
    const select = event.target.value
    peticion(select, filtro)
})

document.getElementById("filtroReset").addEventListener('click', (event)=>{
    const filtro = event.target.value
    localStorage.setItem("filtros", event.target.value)
    const orden = localStorage.getItem("orden")
    peticion(orden, filtro)

})

document.getElementById("filtroCascos").addEventListener('click', (event) => {
    const filtro = event.target.value
    localStorage.setItem("filtros", event.target.value)
    const orden = localStorage.getItem("orden")
    peticion(orden, filtro)
})

document.getElementById("filtroGuantes").addEventListener('click',(event) => {
    const filtro = event.target.value
    localStorage.setItem("filtros", event.target.value)
    const orden = localStorage.getItem("orden")
    peticion(orden, filtro)
})

document.getElementById("filtroCamperas").addEventListener('click',(event) => {
    const filtro = event.target.value
    localStorage.setItem("filtros", event.target.value)
    const orden = localStorage.getItem("orden")
    peticion(orden, filtro)
})

document.getElementById("filtroOfertas").addEventListener('click',(event) => {
    const filtro = event.target.value
    localStorage.setItem("filtros", event.target.value)
    const orden = localStorage.getItem("orden")
    peticion(orden, filtro)
})

let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}
console.log(carrito)

