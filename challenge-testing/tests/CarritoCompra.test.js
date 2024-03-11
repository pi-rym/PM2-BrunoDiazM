const CarritoCompra = require("../index")


describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("constructor()", () => {
    expect(carrito.carrito).toEqual([]);
  });

  test("agregarProducto()", () => {
    const producto = { id: 1, nombre: "Producto 1", precio: 100 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toEqual([producto]);
  });

  test("calcularTotal()", () => {
    const producto1 = { id: 1, nombre: "Producto 1", precio: 100 };
    const producto2 = { id: 2, nombre: "Producto 2", precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(300);
  });

  test("aplicarDescuento()", () => {
    const producto1 = { id: 1, nombre: "Producto 1", precio: 100 };
    const producto2 = { id: 2, nombre: "Producto 2", precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const totalSinDescuento = carrito.calcularTotal();
    const descuento = 10;
    const totalConDescuento = carrito.aplicarDescuento(descuento);
    expect(totalConDescuento).toBe(
      totalSinDescuento - totalSinDescuento * (descuento / 100)
    );
  });
});