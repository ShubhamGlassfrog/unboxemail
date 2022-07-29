const nodemailer=require('nodemailer');
const {google}=require("googleapis");
require('dotenv').config()

const refreshToken = "1//04VI4oW--JTqUCgYIARAAGAQSNwF-L9IraAvDtUjqxzSXpNExbRzGSf77PUb8IwybBIG1x3s0wVNlVoSrgEBo5UBoTTCQYjI7fK8";
const clientId = "1061037459711-5v07kmprnb4rtll2t7qfu50jreh06e5a.apps.googleusercontent.com";
const clientSecret = "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";
const redirectURI = "https://developers.google.com/oauthplayground";

const oAuthClient=new google.auth.OAuth2(clientId,clientSecret,redirectURI);
oAuthClient.setCredentials({refresh_token: refreshToken});


const  Mail= async (email,subject,message)=>{
    return await new Promise(async (resolve) => {
      const accessToken=await oAuthClient.getAccessToken();
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type:'OAuth2',
          user: 'offers@unboxbasics.com',
          clientId,
          clientSecret,
          refreshToken,
          accessToken:accessToken            
 
        }
      });
 
 
      var mailOptions = {
        from: "UNBOX basics offers <"+'offers@unboxbasics.com'+">",
        to: email,
        subject: subject,
        html: message,
 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
    
            resolve({success:false});
        } else {
          resolve({success:true});
 
        }
      });
    })
     
    } //mail function

    module.exports={Mail};