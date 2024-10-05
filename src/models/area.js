const mongoose = require("mongoose"); //Importar componente mongoose
const vehiculo = require("./vehiculo");

const areaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vehiculo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal'}]
});
module.exports = mongoose.model('Area', areaSchema);