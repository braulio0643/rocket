let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}


let precioTotal = 0
for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento == 0){
        precioTotal += carrito[i].precio
    } else {
        precioTotal += carrito[i].precio - carrito[i].precio*carrito[i].descuento
    }
    
}

const carritoDisplay = carrito.reduce((acc, elemento)=>{
    if(elemento.descuento==0){
        return acc + `
        <div class = "itemCarrito">   
            <h3> $${elemento.precio}</h3>
            <img class= "fotoItemCarrito" src= ${elemento.img}>
            <h2> ${elemento.nombre}</h2>
            <img class= "borrarItemCarrito" id="borrarItem" src= "../multimedia/borrar.png">
        </div>
        `
    } else {
        return acc + `
        <div class = "itemCarrito">   
            <h3> $${elemento.precio - elemento.precio*elemento.descuento}</h3>
            <img class= "fotoItemCarrito" src= ${elemento.img}>
            <h2> ${elemento.nombre}</h2>
            <img class= "borrarItemCarrito" id="borrarItem" src= "../multimedia/borrar.png">
        </div>
        `
    }
}, "")


document.querySelector("#carrito").innerHTML = carritoDisplay
document.querySelector("#precioTotal").innerHTML = `
<h2> $ ${precioTotal} </h2>
<div class= "reset" id ="reset"> <h3> Cancelar </h3>  </div>
<div class = "confirm" id = "confirm"> <h3> Confirmar </h3> </div>
`

document.querySelector("#reset").addEventListener("click", ()=>{

          carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
    document.querySelector("#carrito").innerHTML = ``
    precioTotal= 0
    document.querySelector("#precioTotal").innerHTML = `
        <h2> $ ${precioTotal} </h2>
        <div class= "reset" id ="reset"> <h3> Cancelar </h3>  </div>
        <div class = "confirm" id = "confirm"> <h3> Confirmar </h3> </div>
    `

    
})

document.querySelector("#confirm").addEventListener("click", ()=>{
    Swal.fire({
        title: "Querés confirmar la compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra realizada exitosamente!",
            icon: "success"
          });
        }
        carrito = []
        localStorage.setItem("carro", JSON.stringify(carrito))
        document.querySelector("#carrito").innerHTML = ``
        precioTotal= 0
        document.querySelector("#precioTotal").innerHTML = `
            <h2> $ ${precioTotal} </h2>
            <div class= "reset" id ="reset"> <h3> Cancelar </h3>  </div>
            <div class = "confirm" id = "confirm"> <h3> Confirmar </h3> </div>
        `

      });
})


const borrarItem = document.querySelectorAll("#borrarItem")

borrarItem.forEach((element, index) => {
    element.addEventListener("click", () => {
        carrito.splice(index, 1)
        localStorage.setItem("carro", JSON.stringify(carrito))
        location.reload()      
    })
    

} )

