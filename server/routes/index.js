import express from 'express';
import { fileController, downloadFileController, mailController } from '../controllers';
const router = express.Router();

router.get('/', (req, res, next)=>{
     res.status(200).json({message:"hello from router"});
});

router.post('/files', fileController);
router.get('/files/:uuid', downloadFileController.show);
router.get('/files/download/:uuid', downloadFileController.download);

router.post('/sendmail', mailController.send);

export default router;