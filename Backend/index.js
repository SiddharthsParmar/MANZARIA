// this file is main server 
import express from 'express';
import dotenv from 'dotenv'
import connectDb from './Config/Database.js';
import authRoutes from './Routes/authenticationRoute.js'

const app = express();

app.use(express.json())
dotenv.config();
connectDb();


const port = process.env.port;
const mode = process.env.mode;


app.use('/api/auth',authRoutes);










app.get("/",(req,res)=>{

    res.send(
       " <h1>Welcome my friend</h1>"
    )

});
app.listen(port , ()=>{
    console.log("server is running on : " + mode+ "mode" +" on port2323:  "+ port);
    
})