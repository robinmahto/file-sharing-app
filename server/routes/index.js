import express from 'express';
import { fileController, downloadFileController } from '../controllers';
const router = express.Router();

router.get('/', (req, res, next)=>{
     res.status(200).json({message:"hello from router"});
})

router.post('/files', fileController);
router.get('/files/:uuid', downloadFileController)

export default router;