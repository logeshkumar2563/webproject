const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectdb = require('./config/connectdb');
dotenv.config({path:path.join(__dirname,'config','config.env')});

const products = require('./routes/product');
const orders = require('./routes/order');

connectdb();

app.use(express.json());

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`server is ${process.env.PORT} running ${process.env.NODE_ENV}`);
})