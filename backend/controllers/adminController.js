import validator from 'validator'


//API for adding Dotors
const addDocotr = async (req,res)=>{
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
    } catch (error) {
        
    }
    }

    export {addDocotr}