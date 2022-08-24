const {Mail} = require('./nodemailer');
const axios = require('axios').default;

const nonSendEmail = [
 
  ]

const express = require("express");
const app = express();
var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'marketing_unbox'
});

var getConnection = function(callback) {
  pool.getConnection(function(err, connection) {
      callback(err, connection);
  });
};


app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);



const maxLeads = 1;
const campaignId = 7;
app.get("/", async function (req, res) {
  

  async function timeout() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      },2000)
    });
  }

  getConnection(function(err, conn) {

    axios.get('http://marketing.unboxbasics.com/campaigns/get_contacts.php?password=UnboxZaid@123')
    .then(function (response) {
      // handle success
      // console.log(response.data);
      const contacts = response.data;
      conn.query("select * from campaign where `id`="+campaignId, function(err, campaigns) {
        let campaign = campaigns[0];
        const subject = campaign['theme'];
        //add code for not sending emails to already sent emails
        conn.query("select * from campaign_leads where campaign_id='"+campaignId+"'", async function(err, leads) {
          for(let i=0 ; i<maxLeads && i<contacts.length ; i++) {
            const contact = contacts[i];
            const contactId = contact['id'];
            let html = campaign.html;
            // const email = contact['email_1'];
            const email = 'test-9wt0k8f29@srv1.mail-tester.com'
            const email2 = contact['email_2'];

            
            if(leads.find(lead => lead.contact_id == contactId)) {
              console.log('mail already sent')
              // continue;
            }

            if(nonSendEmail.includes(email)) {
              console.log('Email already gone');
              continue;
            }
            if(email) {
              if(html.includes('userCount.php')) {
                html = html.replace('userCount.php', `userCount.php?campaign_id=${campaignId}&contact_id=${contactId}`);
                html = html.replace('unsubscribe.php', `unsubscribe.php?id=${contactId}&password=${contact.password}`)
              }
              const mail = await Mail(email,subject,html);
              console.log('beforetimeout');
              console.log(mail);
              if(mail.success) {
                conn.query("INSERT INTO `campaign_leads`(`campaign_id`, `contact_id`) VALUES ('"+campaignId+"','"+contactId+"')", function(req, res) {
                  console.log('Email Sent, contactId : '+contactId)
                });
              }
              if(email2) {
                await Mail(email2,subject,html);
                
              }
              await timeout();

              console.log('timeout')

  
            }
            // await timeout();
            
          }
        })        
      });
    })

    return;

    function sendMail() {

    }
  })

  res.render("../email1.html");
});

app.listen(3000, "localhost", function () {
  console.log("Express is live on http://localhost:3000");
});

