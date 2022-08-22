//** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
//** Schema Creation */
const videogameSchema = new mongoose.Schema({
    code:{
        type: "String",
        required:true,
        unique:true
    },
    name:{
        type: "String",
        required: "true"
    },
    score:{
        type: "String"
    },
});
//** Schema Exportation */
videogameSchema.plugin(validator)
module.exports = videogameSchema;