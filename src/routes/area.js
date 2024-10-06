const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/vehiculo");
const areaSchema = require("../models/area");

//areas
router.post("/areas", (req, res) => {
    const area = areaSchema(req.body);
    area
        .save().then((data) => {
            res.json(data)
        }).catch((error) => res.send(error));
})

//Modificar los datos de un area para agregar un animal
router.put("/areas/:id", async (req, res) => {
    const { id } = req.params;
    const vehiculo = vehiculoSchema(req.body);
    var idVehiculo = null;

    const vehiculoConsulta = await vehiculoSchema.findOne({ vehiculoid: req.body.vehiculoid });
    if (!vehiculoConsulta) {
        await vehiculo.save().then((dataVehiculo) => {
            idVehiculo = dataVehiculo._id;
        });
    } else {
        idVehiculo = vehiculoConsulta._id;
    }

    areaSchema
        .updateOne({_id: id}, {
            //$push  agrega nuevo elemento sin ijmportar si ya exite
            //$addToSet  agrega un nuevo elemento sin repetirlo
            $addToSet: {vehiculo: idVehiculo}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

module.exports = router;