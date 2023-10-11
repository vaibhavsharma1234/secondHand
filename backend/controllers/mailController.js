const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const EMAIL= '21310@iiitu.ac.in'
const PASSWORD= process.env.ACCOUNT_SECRET_KEY

const sendMail = (receiverEmailAddress, content, userName, subject) => {

    const userEmail = receiverEmailAddress;

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "SecondHand",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : userName,
            intro: content,
            // table : {
            //     data : [
            //         {
            //             item : "Nodemailer Stack Book",
            //             description: "A Backend application",
            //             price : "$10.99",
            //         }
            //     ]
            // },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : EMAIL,
        to : userEmail,
        subject: subject,
        html: mail
    }
    transporter.sendMail(message).then(() => {
        console.log("Mail sent");
    }).catch(error => {
        console.log(error);
    })

    // transporter.sendMail(message).then(() => {
    //     return res.status(201).json({
    //         msg: "you should receive an email"
    //     })
    // }).catch(error => {
    //     return res.status(500).json({ error })
    // })
}
const mailSend = async(req,res)=>{
    try{
        const userEmail = req.query.email;
        const userName = req.query.name;
        const mailContent=req.query.content;
        console.log(mailContent,"hello")
        sendMail(userEmail,mailContent,userName,"successfully registered")
    }
    catch(error){
        console.error(error)
    }
}

module.exports = {
    sendMail,
    mailSend
}