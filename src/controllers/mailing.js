import sgMail from '@sendgrid/mail';

export const enviarMail =  async (mail) => {
    sgMail.setApiKey('API_KEY_HERE');
    const msg = {
        to: mail,
        from: 'email',
        subject: 'Welcome to Disney Alchemy API',
        text: `Your account has been successfully created: ${mail}`
    }
    try{
        await sgMail.send(msg);
        console.log('Email sent successfully');
    }catch(err){
        console.error(err);
    }
}