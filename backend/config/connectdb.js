const mongoose = require('mongoose');


const connectdb = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MONGODB Is Connect'+con.connection.host)
    })
}


module.exports = connectdb;