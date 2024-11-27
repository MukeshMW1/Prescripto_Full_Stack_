import mongoose from 'mongoose'


export const connectDb = async ()=>{
await mongoose.connect(`${process.env.MONGO_URI}/prescripto `).then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log("There was an error connecting to the database")
})
 
    
}