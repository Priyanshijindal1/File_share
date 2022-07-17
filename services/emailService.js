// yarn add nodemailer
const nodemailer=require('nodemailer');


async function sendMail({from,to,subject,text,html}){
    let transporter=nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:false,//if secure true give port, 465
        // ignoreTLS: true ,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS

        }
    });
    // console.log(`Message Sent before:  from:${from} to:${to} subject:${subject} text:${text} `);
    let info= await transporter.sendMail({
        from:from,//`inShare<${from}>`
        to:to,
        subject:subject,
        text:text,
        html:html
    }
    );
    // console.log(info);
    
}
module.exports=sendMail;





