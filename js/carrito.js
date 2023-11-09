let carrito = localStorage.getItem("carro")
if(carrito){
    carrito = JSON.parse(carrito)
} else {
    carrito = []
    localStorage.setItem("carro", JSON.stringify(carrito))
}
console.log(carrito)

let precioTotal = 0
for(let i = 0; i < carrito.length; i++){
    precioTotal += carrito[i].precio
}

const carritoDisplay = carrito.reduce((acc, elemento)=>{
    return acc + `
    <div class = "itemCarrito">   
        <h3> $${elemento.precio}</h3>
        <img src= ${elemento.img}>
        <h2> ${elemento.nombre}</h2>
        
    </div>
    `
})

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
})