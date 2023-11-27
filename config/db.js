const mongoose = require ("mongoose");
//importing package

const connectDb = async () => { //express async handler
    try{
        //synchronous code here
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        //check mongoDB authentication
        console.log(
            "Database Connected",
            connect.connection.host,
            connect.connection.name
        );
    }catch(error){
        //handle throw error
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDb;