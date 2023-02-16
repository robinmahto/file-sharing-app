import { FileModels } from '../models';
import { sendEmail, emailTemplate } from '../services';
import { APP_BASE_URL } from '../config';

const mailController = {
    async send(req, res){
        const { uuid, emailTo, emailFrom }  = req.body;
        // validate
        if(!uuid || !emailTo || !emailFrom){
            res.status(422).json({error: 'All fields are required'});
        }
        // get data from database
        const file = await FileModels.findOne({uuid: uuid})
        if(file.sender){
            res.status(422).json({error: 'email already sent'});
        }

        file.sender = emailFrom;
        file.receiver = emailTo;
        const response = file.save();
        // send email
        const result = await sendEmail({
            from : emailFrom,
            to : emailTo,
            subject : 'file sharing applications',
            text: `${emailFrom} shared a file with you`,
            html : emailTemplate({
                emailFrom,
                downloadLink: `${APP_BASE_URL}/files/${file.uuid}`,
                size: `${parseInt(file.size / 1000)}KB`,
                expires:'24 hours'
            })
        })
        res.json({response, result});
    }
}

export default mailController;