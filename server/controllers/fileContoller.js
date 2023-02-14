import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { FileModels } from '../models';
import { APP_BASE_URL } from '../config';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
})

const upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }
}).single('file');

const fileController = (req, res, next) => {
    //   store file
    upload(req, res, async (error) => {
        // validate
        if (!req.file) {
            return res.json({ error: 'All fields are required' });
        }

        if (error) {
            return res.status(500).json({ error: error.message })
        }
        // store file into database
        const file = new FileModels({
            filename: req.file.filename,
            uuid: uuidv4(),
            path: req.file.path,
            size: req.file.size
        })
      // save in the database
        const response = await file.save();
      // response
        return res.json({ files: `${APP_BASE_URL}/files/${response.uuid}` })

    })

}

export default fileController;