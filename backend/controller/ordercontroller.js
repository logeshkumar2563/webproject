const ordermodel = require('../models/ordermodel');
const productmodel =require('../models/productmodels');

exports.createOrder =async (req, res, next) => {
    const cartitems = req.body;

    // Calculate the total amount
    const amount =Number( cartitems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await ordermodel.create({cartitems,amount,status});
       //updateing product stock
    // cartitems.forEach(async(item) => {
    //   const product =  await productmodel.findById(item.product._id);
    //     product.stock = product.stock - item.qty;
    //     await product.save();

    // })

    res.json({
        success: true,
        order
        
    });
};
 