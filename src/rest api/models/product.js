const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    id: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },

    entryDate:{
        type:Date,
        required:true,
        default:Date.now
    }

})
 


module.exports = mongoose.model('Products',productsSchema)