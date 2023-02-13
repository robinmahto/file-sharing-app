import express from 'express';
import { APP_PORT } from './config';
import { connectdb } from './db/connectdb';
import router from './routes';
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/api', router);

// listen PORT
app.listen(APP_PORT, ()=>{
    connectdb();
    console.info(`APP Running on ${APP_PORT}`)
})




