import express  from 'express'

import { addDocotr } from '../controllers/adminController.js'

import upload from '../middlewares/multer.js'


const adminRouter = express.Router();


adminRouter.post('/add-doctor',upload.single('image'),addDocotr);

export default adminRouter;