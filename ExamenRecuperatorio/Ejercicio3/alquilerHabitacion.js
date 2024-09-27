class Habitacion {
    constructor(numero, tipo, disponible) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = disponible;
    }
}
class Hotel {
    constructor() {
        this.habitaciones = []; //Lista de habitaciones
    }
    agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }
    alquilarHabitacion() {
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].disponible) {
                this.habitaciones[i].disponible = false; // Verifica si hay habitaciones disponibles
                console.log(`Habitación ${this.habitaciones[i].numero} alquilada con éxito`);
            } else {
                console.log(`Habitación ${this.habitaciones[i].numero} no disponible`)
            }
        }
    }
}
// Instancias
// Se crea un objeto Hotel y se agregan 5 habitaciones
const hotel = new Hotel();
hotel.agregarHabitacion(new Habitacion(1, "simple", true));
hotel.agregarHabitacion(new Habitacion(2, "doble", true));
hotel.agregarHabitacion(new Habitacion(3, "suite", true));
hotel.agregarHabitacion(new Habitacion(4, "simple", false));
hotel.agregarHabitacion(new Habitacion(5, "doble", true));
// Se alquila una habitación
hotel.alquilarHabitacion();
// Se muestra la lista de habitaciones disponibles
hotel.agregarHabitacion(new Habitacion(6, "suite", true));
hotel.agregarHabitacion(new Habitacion(7, "simple", true));
hotel.agregarHabitacion(new Habitacion(8, "doble", true));
hotel.agregarHabitacion(new Habitacion(9, "suite", true));
hotel.agregarHabitacion(new Habitacion(10, "simple", true));
hotel.alquilarHabitacion();