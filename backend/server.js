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



app.listen(port,(err)=>
{
    if(err)
        {
            console.log("There was an error connecting to the server",err);
            return
        }
    console.error('The server is listening at port',port);
})


