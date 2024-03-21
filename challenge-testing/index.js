class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El porcentaje de descuento debe estar entre 0 y 100");
    }
    const total = this.calcularTotal();
    const descuento = total * (porcentaje / 100);
    return total - descuento;
  }
}

module.exports = CarritoCompra;

