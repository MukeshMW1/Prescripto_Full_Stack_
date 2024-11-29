import validator from 'validator'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import path from 'path'
//API for adding Dotors
const addDoctor = async (req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,fees,about,address} = req.body
        
const imageFile = req.file 

// console.log({name,email,password,speciality,degree,experience,fees,about,address} ,imageFile)



//checking for all data to add doctor

if(!name || !email || !password || !speciality || !degree || !experience || !fees || !about || !address )
{
    return res.json({success:false,message:"Missing Details"})
}


//validaing email format
if(!validator.isEmail(email))
{
    return res.json({success:false,message:"Please enter a valid email"})
}
//password validator

if(!validator.isStrongPassword(password))
    {
        return res.json({success:false,message:"Please enter a strong passsword"})
        
        
    }
    

    //uplaod image to cloudinary


const imageUpload =await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
const imageUrl = imageUpload.secure_url



const doctorData ={
name,
email,
image:imageUrl,
password,
degree,
speciality,
experience,
about,
fees,
address:JSON.parse(address),
date:Date.now()



}

const newDoctor =new doctorModel(doctorData);
await newDoctor.save();

res.json({success:true,message:"Doctor Added"})


    } catch (error) {
      console.log(error)
      res.json({success:false,message:error.message})  
    }




    }

    export {addDoctor}