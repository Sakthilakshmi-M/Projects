var nodemailer = require('nodemailer');

const sendEmail = async ({msg,email})=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'receiverftn@gmail.com',
      pass: process.env.PASSWORD
    }
  });
  
  var mailOptions = {
    from: 'receiverftn@gmail.com',
    to: 'sakthilakshmims@gmail.com',
    subject: 'Sending Email using Node.js',
    text: msg
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {sendEmail};