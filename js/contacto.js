const inputNombre = document.querySelector("#nombre")
const inputTelefono= document.querySelector("#telefono")
const inputMail = document.querySelector("#mail")
const inputTextArea = document.querySelector("#textarea")
const form = document.querySelector("#form")

let nombreValido= false
let telefonoValido= false
let mailValido= false
let textValido= false

function tieneNumeros(tel){
    for(let i= 0; i < tel.length; i++){
        if(tel[i] !== "0" && tel[i] !== "1" && tel[i] !== "2" && tel[i] !== "3" && tel[i] !== "4" && tel[i] !== "5" && tel[i] !== "6" && tel[i] !== "7" && tel[i] !== "8" && tel[i] !== "9" && tel[i]!== "-" && tel[i] !== "+"){
            return false
        }
    }
    return true
}

function esMail(mail){
    for(let i = 0; i < mail.length; i++){

    }
}

inputNombre.onchange=(event) =>{
    if ( event.target.value !== "" || event.target.value !== null ) {
        inputNombre.style.border = "5px solid green"
        nombreValido = true
    } else {
        inputNombre.style.border = "5px solid red"
        nombreValido = false
    }
}

inputTelefono.onchange=(event)=>{
    if(tieneNumeros(event.target.value)){
        inputTelefono.style.border = "5px solid green"
        telefonoValido = true
    } else {
        inputTelefono.style.border = "5px solid red"
        telefonoValido = false
    }
}

inputMail.onchange=(event)=>{
    if(event.target.value.includes("@") && event.target.value.includes(".") && event.target.value.length> 0){
        inputMail.style.border = "5px solid green"
        mailValido = true
    } else {
        inputMail.style.border = "5px solid red"
        mailValido = false
    }
}

inputTextArea.onchange=(event)=>{
    if(event.target.value.length > 0 ){
        inputTextArea.style.border="5px solid green"
        textValido = true
    } else {
        inputTextArea.style.border="5px solid red"
        textValido = false
    }
}

form.onsubmit=(event)=>{
    event.preventDefault()
    if(nombreValido && telefonoValido && mailValido && textValido){
        Swal.fire({
            title: "Mensaje enviado exitosamente",
            icon: "success"
        })
    } else {
        
        Swal.fire({
            title: "No se pudo enviar el mensaje. Revisá los datos ingresados",
            icon: "error"
        })
    }
}

