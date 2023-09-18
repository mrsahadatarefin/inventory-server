const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide a name for this product'],
        trim:true,
        unique:true,
        minLength:[3,'name must be at least 3 characters'],
        maxLength:[100,'name is to large']
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true,
        min:[0,'price can not be negative '],  
    },
    // unit:{
    //     type:String,
    //     required:true,
    //     enum:{
    //         value:"['kg','litter','pcs']",
    //         message:'unit value can not be {VALUE} must be kg/litter/pcs'   
    //     },
        
    // },
    quantity:{
        type:Number,
        required:true,
        min:[0,'quantity must be 0'],
        
    },
    // status:{
    //     type:String,
    //     required:true, 
    //     enum:['in-stock','out-of-stock','discontinued']   
    // },
    createdAt:{
        type:Date,
        default:Date.now,

    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
    categories:[{
        name:{
            type:String,
        },
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'categories'
        }
    }]
    
},{
    timestamps:true,
})

const Product = mongoose.model('Product',ProductSchema)
module.exports = Product;