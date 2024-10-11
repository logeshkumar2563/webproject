const productmodul = require('../models/productmodels');


//get product api- /api/v1/products
exports.getproducts = async (req, res, next) => {
   const query = req.query.keyword ? {
       name: {
           $regex: req.query.keyword,
           $options: 'i'  
       }
   } : {};
   const products = await productmodul.find(query);
   res.json({
       success: true,
       products
   });
}


//get single product:id
exports.getsingleproducts = async (req,res,next)=> {
  try{
  const products = await productmodul.findById(req.params.id);
   res.json({
    success:true,
    products
   })
} catch(error){
   res.status(404).json({
      success:false,
      message:'unable this products'
     })
}

}