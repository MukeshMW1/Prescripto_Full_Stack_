import express, { json } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDb } from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'




//app config


const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(cors())
connectDb();
connectCloudinary();

//api endpoint
app.use('/api/admin',adminRouter)
//local host:4000/api/admin

app.get('/',(req,res)=>{
   
    res.send(`This is the server listening at port ${port}`)
}) 

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});




app.listen(port,(err)=>
{
    if(err)
        {
            console.error("There was an error connecting to the server",err);
            return
        }
    console.log('The server is listening at port',port);
})


