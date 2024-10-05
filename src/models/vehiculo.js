const mongoose = require("mongoose"); // importando el componente mogoose
const vehiculoSchema = mongoose.Schema({
    vehiculo_id: {
        type: Number,
        required: true,
    },
    marca: {
        type: Number,
        required: true,
    },
    modelo: {
        type: String,
        required: false,
    },
    año: {
        type: Date,
        required: false,
    },
    precio: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model("Vehiculo", vehiculoSchema);
