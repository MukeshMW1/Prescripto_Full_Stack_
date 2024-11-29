import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },

    slots_booked: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);


doctorSchema.pre('save', async function(next)
{

  const user =this;
  
  if(!user.isModified('password'))
    {
     return next();
    }
    
    try {
      const saltRounds = await bcrypt.genSalt(10);
      const hashedPassword =await bcrypt.hash(user.password,saltRounds)
  user.password = hashedPassword
} catch (error) {
  next(error)
  
}


})

const doctorModel =mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
