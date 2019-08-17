const express = require('express');
const app = express();

const Persona = require('./model/persona.js');

app.get('/', (req, res) => {
	res.json(new Persona({
		id: 1, nombre: "Luis Galindo", dni: "76779756"
	}));
});

app.listen(process.env.PORT || 3000, err => {
	if (err) console.error(err);
});