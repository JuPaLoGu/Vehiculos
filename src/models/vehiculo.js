const mongoose = require("mongoose"); // importando el componente mogoose
const vehiculoSchema = mongoose.Schema({
    vehiculoid: {
        type: Number,
        required: true,
    },
    marca: {
        type: String,
        required: false,
    },
    modelo: {
        type: Number,
        required: true,
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
        require: false
    },
    estado: {
        type: String,
        require: false
    }
});
module.exports = mongoose.model("Vehiculo", vehiculoSchema);
