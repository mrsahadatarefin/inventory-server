const Product = require("../models/Product");

exports.getProduct= async(req,res,next)=>{
    try{
        
        const {price}=req.query
        
        const products = await Product.find({price:price})
        res.send(products)
      
       }
       catch(error){
      
        res.status(400)
       }
    
}
exports.postProduct= async(req,res)=>{
    try{
    const body = await req.body;
    const result =new Product(body).save();
    res.status(200).json({
    status:true,
    message:'successfully add'
    
   })
    }
    catch(error){
        console.log(error)

    }

    
}

exports.updateProduct = async(req,res)=>{
    try{
     const {id}=req.params
     const data = req.body
     const product = await Product.updateOne({_id:id},{$set:data}) 
     res.status(200).json({
       status:true,
       message:'successfully add',
       data:product
     })
     
    }
    catch(err){
     err.massage 
   
    }
   
   }

   exports.deleteProduct = async(req,res)=>{
    try{
        const {id}= req.params
        const deleteById = await Product.deleteOne({_id:id})
        console.log(deleteById)
        res.status(200).json({
            massage:'product deleted successfully'
        })
    }
    catch(error){
    error.massage
    }

   }