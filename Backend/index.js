// this file is main server 
import express from 'express';
import dotenv from 'dotenv'

const app = express();

dotenv.config();

const port = process.env.port;
const mode = process.env.mode;

app.get("/",(req,res)=>{

    res.send(
       " <h1>Welcome my friend</h1>"
    )

});
app.listen(port , ()=>{
    console.log("server is running on : " + mode+ "mode" +" on port2323:  "+ port);
    
})