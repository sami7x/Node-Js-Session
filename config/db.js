
const mongoose = require ("mongoose");


const ConnectionDB = async()=>{
    try{
        //synchronous
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database is connected",
            connect.connection.host,
            connect.connection.name
        );

    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = ConnectionDB;