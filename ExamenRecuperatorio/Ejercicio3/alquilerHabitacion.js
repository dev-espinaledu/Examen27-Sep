class Habitacion {
    constructor(numero, tipo, disponible) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = disponible;
    }
}
class Hotel {
    constructor() {
        this.habitaciones = [];
    }
    agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }
    alquilarHabitacion(numeroHabitacion) {
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].numero === numeroHabitacion) {
                if (this.habitaciones[i].disponible) {
                    this.habitaciones[i].disponible = false;
                    console.log(`Habitación ${this.habitaciones[i].numero} alquilada con éxito`);
                } else {
                    console.log(`Habitación ${this.habitaciones[i].numero} no está disponible`);
                }
                return;
            }
        }
        console.log(`Habitación ${numeroHabitacion} no encontrada`);
    }
    liberarHabitacion(numeroHabitacion) {
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].numero === numeroHabitacion) {
                if (!this.habitaciones[i].disponible) {
                    this.habitaciones[i].disponible = true;
                    console.log(`Habitación ${this.habitaciones[i].numero} liberada con éxito`);
                } else {
                    console.log(`Habitación ${this.habitaciones[i].numero} ya está disponible`);
                }
                return;
            }
        }
        console.log(`Habitación ${numeroHabitacion} no encontrada`);
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
hotel.alquilarHabitacion(2);
hotel.alquilarHabitacion(4);
// Liberar habitaciones
hotel.liberarHabitacion(4);  // Libera la habitación 4