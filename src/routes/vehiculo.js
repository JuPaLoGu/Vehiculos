const express = require("express");
const verifyToken = require('./validate_token');
const router = express.Router(); //manejador de rutas de express
const vehiculoSchema = require("../models/vehiculo");
//Nuevo animal
router.post("/vehiculo", (req, res) => {
    const vehiculo = vehiculoSchema(req.body);
    vehiculo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

//Consultar todos los animales
router.get("/vehiculo", verifyToken, (req, res) => {
    vehiculoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar un animal por su id
router.get("/vehiculo/:id", (req, res) => {
    const { id } = req.params;
    vehiculoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar el nombre de un animal por su id
router.put("/vehiculo/:id", (req, res) => {
    const { id } = req.params;
    const { vehiculo_id, marca, modelo, año, precio, color, estado } = req.body;
    vehiculoSchema
        .updateOne({ _id: id }, {
            $set: { vehiculo_id, marca, modelo, año, precio, color, estado }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar un animal por su id

router.delete("/vehiculo/:id", (req, res) => {
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
