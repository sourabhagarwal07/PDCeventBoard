const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;


// Schema
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    name: String,
    email: String,
    stream:String,
    date: {
        type: String,
        default: Date.now()
    }
});

dataSchema.plugin(mongooseFieldEncryption, 
    { fields: 
        ["email"],
         secret: process.env.SECRETKEY
    }
);

// Model
const Data = mongoose.model('data', dataSchema);

module.exports =  Data;