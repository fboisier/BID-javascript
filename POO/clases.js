class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad || 18;
        this.cedula = '1-9';
        this.pais = 'PY';
        this.ciudad = 'Asunción';
    }

    logear() {
        console.log("PERSONA " + this.nombre + " ENTRANDO AL SISTEMA");
    }
    salir() {
        console.log(`PERSONA ${this.nombre} SALIENDO DEL SISTEMA`);
    }
    comprar() {
        console.log(`PERSONA ${this.nombre} ESTA COMPRANDO EN ${this.ciudad}`);
    }
    comprobarEdad() {
        return this.edad > 18;
    }
    aumentarEdad(numero) {
        this.edad += numero;
    }
}

class Usuario extends Persona {
    constructor(nombre, apellido, edad) {
        nombre = '*' + nombre;
        super(nombre, apellido, edad);
    }
    registrar() {
        console.log("USUARIO " + this.nombre + " REGISTRANDO");
    }
    editar() {
        console.log("USUARIO " + this.nombre + " EDITANDO AL SISTEMA");
    }
    logear() {
        console.log("USUARIO " + this.nombre + " ENTRANDO AL SISTEMA");
    }
}

class Seguro {

    PLAN_A = 'A';
    PLAN_B = 'B';

    constructor(nombre) {
        this.nombre = nombre;
        this.montoAPagar = 10000;
        this.plan = this.PLAN_A;
    }
}

class Paciente extends Persona {
    constructor(nombre, apellido, edad, diagnostico) {
        super(nombre, apellido, edad);
        this.diagnostico = diagnostico || 'Ninguno';
        this.seguro = new Seguro("Ninguno");
    }

    consultar() {
        console.log(`El paciente ${this.nombre} con diagnostico ${this.diagnostico} tiene seguro ${this.seguro}`);
    }
    pagar() {
        console.log(`PAGANDO paciente ${this.nombre} con diagnostico ${this.diagnostico} tiene seguro ${this.seguro}`);
    }
    logear() {
        console.log("PACIENTE " + this.nombre + " ENTRANDO AL SISTEMA");
    }
}



let paciente1 = new Paciente("Enfermo", "DeNuevo", 100, "Enfermedad Pulmonar");
console.log(paciente1.seguro.nombre);


let usuario1 = new Usuario("Javier", "Sandoval", 30);
console.log(usuario1);
usuario1.logear();
usuario1.editar();
usuario1.registrar();
usuario1.comprar();
usuario1.salir();

let persona1 = new Persona("Francisco", "Boisier");
persona1.edad = 20;
console.log(persona1);
console.log(persona1.comprobarEdad())

persona1.logear();
persona1.comprar();
persona1.salir();

persona1.aumentarEdad(5);
console.log(persona1);

let conjunto = [paciente1, usuario1, persona1];
console.log(conjunto);

for (instancia of conjunto) {
    instancia.logear();
}

console.log(conjunto);