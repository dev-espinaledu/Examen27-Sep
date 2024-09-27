class Plato {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Menu {
    constructor() {
        this.platos = [];
    }
}
class Pedido {
    constructor() {
        this.platos = [];
    }
    agregarPlato(plato) {
        this.platos.push(plato);
    }
    calcularTotal() {
        let total = 0;
        for (let plato of this.platos) {
            total += plato.precio;
        }
        return total;
    }
}
class Restaurante {
    constructor() {
        this.menus = []; // lista de menús
        this.pedidos = []; // Lista de pedidos
    }
}
// Se crea el menú
let menu = [
    new Plato("Hamburguesa", 16000),
    new Plato("Pizza", 12000),
    new Plato("Perro Caliente", 8000) // Me dio pereza agregar más productos
];
let pedido = new Pedido();
// Mostrar el menú
const menuElement = document.getElementById('menu');
for (let i = 0; i < menu.length; i++) {
    let li = document.createElement('li'); // Se crea un elemento de lista para cada uno de los platos
    li.innerHTML = `${menu[i].nombre} - $${menu[i].precio} <button onclick="agregarAlPedido(${i})">Agregar</button>`;
    menuElement.appendChild(li); // Se añade el plato al menú
}
// Agregar los platos al pedido
function agregarAlPedido(index) {
    let platoSeleccionado = menu[index]; // Seleccionar el plato del menú por el índice
    pedido.agregarPlato(platoSeleccionado);
    actualizarPedido();
}
// Actualizar el pedido
function actualizarPedido() {
    const pedidoElement = document.getElementById('pedido');
    const totalElement = document.getElementById('total');
    pedidoElement.innerHTML = ''; // Limpiar la lista de pedidos antes de actualizar
    for (let i = 0; i < pedido.platos.length; i++) {
        let li = document.createElement('li'); // Crear un elemento de lista para cada plato del pedido
        li.textContent = `${pedido.platos[i].nombre} - $${pedido.platos[i].precio}`; // Mostrar el nombre y precio del plato
        pedidoElement.appendChild(li); // Añadir el plato a la lista de pedidos
    }
    totalElement.textContent = pedido.calcularTotal(); // Actualizar el total a pagar
}
/* // Instancias
// Se crea un menú con algunos platos
let menu = new Menu();
menu.platos.push(new Plato("Hamburguesa", 16000));
menu.platos.push(new Plato("Pizza", 12000));
menu.platos.push(new Plato("Perro Caliente", 8000));
// Se crea un pedido y se agrega algunos platos
let pedido = new Pedido();
pedido.agregarPlato(menu.platos[0]);
pedido.agregarPlato(menu.platos[1]);
// Se crea un restaurante y se agrega el menú y el pedido
let restaurante = new Restaurante();
restaurante.menus.push(menu);
restaurante.pedidos.push(pedido);
// Imprimir el total del pedido
console.log("Total del pedido: ", pedido.calcularTotal()); */