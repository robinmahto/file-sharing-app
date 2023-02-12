import express from 'express';
import { APP_PORT } from './config';
import { connectdb } from './db/connectdb';
const app = express();



// listen PORT
app.listen(APP_PORT, ()=>{
    connectdb();
    console.info(`APP Running on ${APP_PORT}`)
})




