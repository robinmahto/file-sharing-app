import { FileModels } from '../models';
import { APP_BASE_URL } from '../config';

const downloadFileController = async (req, res, next) => {
     try {
        const file = await FileModels.findOne({uuid : req.params.uuid});
        if(!file){
            return res.json({message: 'Link has been expired'});
        }
        res.json({
            uuid: file.uuid,
            filename: file.filename,
            filesize: file.size,
            download : `${APP_BASE_URL}/files/download/${file.uuid}`
        })
     } catch (error) {
        return res.json({error: error.message});
     }
}

export default downloadFileController;