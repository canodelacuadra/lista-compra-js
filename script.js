
// conectores dom con la interfaz
const itemLista =document.getElementById('item-lista')
const button= document.getElementById('agregar-lista')
const display= document.getElementById('mostrar-lista')

// añadimos un producto a la lista
let  agregar_producto = function(){
    let item =itemLista.value
    let li = document.createElement('li')
    li.innerHTML= `${item} <button onclick="this.parentElement.style.display='none'">Quitar</button>`
    display.appendChild(li)

}

function eliminar(){
    console.log(this)
}
button.addEventListener('click', agregar_producto)






