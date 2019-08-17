class Persona {
	constructor({ id, nombre, nacimiento, dni, edad }) {
		this.id = id || "";
		this.nombre = nombre || "";
		this.nacimiento = nacimiento || new Date();
		this.dni = dni || "";
		this.edad = edad || 0;
	}


}

module.exports = Persona;