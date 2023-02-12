import mongoose from "mongoose";
import { MONGODB_URL } from '../config';

const connectdb = async()=>{
    mongoose.connect(MONGODB_URL).then(()=>{
        console.info('database connected')
    }).catch((err)=>{
        console.error(err.message);
    })
}

export {connectdb} ;