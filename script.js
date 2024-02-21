// declaramos la llista
let lista=[]
// conexiones con la interfaz mediante DOM
const display =document.getElementById("display")
const button= document.getElementById('hacer-lista')
button.addEventListener('click', lista_compra)
function lista_compra(){
    solicitar_deseo() 
    agregar_lista(compra)
    // mostrar lista
    mostrar_lista(lista)
    }

// solicitar_deseo
function solicitar_deseo(){
    // solicitamos el pedido al usuario
    let compra = prompt('Qué quieres comprar')
    return compra
}
// añadimos pedido
function agregar_lista(compra){
lista[lista.length]=compra
}
// mostrar lista
function mostrar_lista(lista){
    lista.forEach(element => {
        display.innerHTML+= element
    });
 
}



