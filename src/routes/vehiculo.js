const express = require("express");
const verifyToken = require('./validate_token');
const router = express.Router(); //manejador de rutas de express
const vehiculoSchema = require("../models/vehiculo");
//Nuevo vehiculo
router.post("/vehiculos", (req, res) => {
    const vehiculo = vehiculoSchema(req.body);
    vehiculo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

//Consultar todos los vehiculos
router.get("/vehiculos", (req, res) => {
    vehiculoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar un vehiculo por su id
router.get("/vehiculos/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar el nombre de un vehiculo por su id
router.put("/vehiculos/:id", (req, res) => {
    const { id } = req.params;
    const { vehiculo_id, marca, modelo, año, precio, color, estado } = req.body;
    vehiculoSchema
        .updateOne({ _id: id }, {
            $set: { vehiculo_id, marca, modelo, año, precio, color, estado }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar un vehiculo por su id

router.delete("/vehiculos/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
