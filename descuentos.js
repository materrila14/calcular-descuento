function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioConDescuento = (precio * porcentajeAPagar) / 100;

    return precioConDescuento;
}

