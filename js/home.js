fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        const containerProductos = document.querySelector(".categoriaHome")
        let dataFinal = data.filter((producto)=>producto.descuento>0)
        dataFinal.reduce((acc, elemento)=>{
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
        `
        }, "")
        containerProductos.innerHTML = visualizarProductos(dataFinal)
        const comprarProductos= document.querySelectorAll(".add-carrito")
        comprarProductos.forEach((element, index) => {
            element.addEventListener("click", () => {
                let carrito = JSON.parse(localStorage.getItem("carro"))
                carrito.push(dataFinal[index])
                localStorage.setItem("carro", JSON.stringify(carrito))
                Swal.fire({
                    title: "Producto agregado al carrito exitosamente",
                    icon: "success"
                })
            })
        } )
})

function visualizarProductos (array){
    const resultado = array.reduce((acc, elemento) => {
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
        `}, "")
    return resultado
}
