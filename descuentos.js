function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioConDescuento = (precio * porcentajeAPagar) / 100;

    return precioConDescuento;
}

function botonPrecioConDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;
    
    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const precioFinal = document.getElementById("precioConDescuento")
    precioFinal.innerText = "El precio con descuento es: $" + precioConDescuento;
}