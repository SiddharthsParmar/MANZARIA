import mongoose from "mongoose";

const connectDb = async()=>{
    const Mongo_uri = process.env.MONGODB_URI;
    try {
        const connect = await mongoose.connect(Mongo_uri)

        console.log("db Connected successfully"+ connect.connection.host);
        
    } catch (error) {
        console.log("error in Database: " + error);
        
        
    }
}
export default connectDb;