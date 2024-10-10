const mongoose =require('mongoose');

const productschema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    Images :[
        {
            Image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofreviews:String,
    createat : Date
})

const productmodul = mongoose.model('product',productschema);

module.exports = productmodul;
