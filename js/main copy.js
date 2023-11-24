
/* fetch("../js/productos.json")
.then( response => response.json())
.then(productos => {

    const productosMoto = productos.reduce((acc, elemento) => {
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
    const containerProductos = document.querySelector(".categoria")
    containerProductos.innerHTML= productosMoto


    const comprarProductos= document.querySelectorAll(".add-carrito")
    comprarProductos.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.push(productos[index])
        localStorage.setItem("carro", JSON.stringify(carrito))
        Swal.fire({
            title: "Producto agregado al carrito exitosamente",
            icon: "success"
        })
    })
    } )



document.getElementById("ordenar").addEventListener('change',(event)=>{
    const orden = event.target.value
    switch(orden){
        case "precioCreciente":
            productos.sort((a,b) => a.precio - b.precio)
            console.log(productos)
            containerProductos.innerHTML = visualizarProductos(productos)

    }
    
    containerProductos.innerHTML= productosMoto
}) */


function visualizarProductos (array){
    const resultado = array.reduce((acc, elemento) => {
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
    return resultado
}





function peticion (orden){
    fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        const containerProductos = document.querySelector(".categoria")
        if(orden == "precioCreciente"){
            data.sort((a,b)=> a.precio - b.precio)
            containerProductos.innerHTML = visualizarProductos(data)
        }
        if(orden == "precioDecreciente"){
            data.sort((a,b)=> a.precio - b.precio)
            data.reverse()
            containerProductos.innerHTML = visualizarProductos(data)
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
            containerProductos.innerHTML = visualizarProductos(data)
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
            containerProductos.innerHTML = visualizarProductos(data)
        }

        

        /* switch(orden){
            case "precioCreciente":
                console.log(productos)
                productos.sort((a,b) => {
                    if(a.precio < b.precio){
                        return -1
                    }
                    if(a.precio > b.precio){
                        return 1
                    }
                    return 0
                })
                console.log(productos)
                
            case "precioDecreciente":
                productos.sort((a,b) => a.precio + b.precio);
            case "alfaCreciente":
                productos.sort((a,b) =>{
                    if(a.nombre < b.nombre){
                        return -1
                    }
                    if(a.nombre > b.nombre){
                        return 1
                    }
                    return 0
                })
            case "alfaDecreciente":
                productos.sort((a,b) => a.nombre + b.nombre)
                
        }  */
        
        
    })

}

peticion("alfaCreciente")

const ordenar= (data) =>{
    
}


document.getElementById("ordenar").addEventListener('change',(event)=>{
    let select = event.target.value
    peticion(select)
})

let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}
console.log(carrito)

