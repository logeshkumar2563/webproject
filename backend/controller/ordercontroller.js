const ordermodel = require('../models/ordermodel');


exports.createOrder = async (req,res,next) =>{
   console.log(req.body,"data");


    res.json({
        success:true,
       message:'correct ordeer'
    })
}