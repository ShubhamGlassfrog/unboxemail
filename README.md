# Unbox Email
This is the email marketing application 

## Technologies Used

`HTML`, `CSS`, `SCSS`, `PHP`, `NODE`, `MySQL`

## Development server

This is the project needs to be hosted on the cloud but run on the local system. But this project is already hosted on the Zapmedics Production Server under the domain of http://marketing.unboxbasics.com/;
This application is the cross connectivity application and to run it on local server you have to run the Node Application by executing the main.js file of the root directory.

## Project Development

 1. This project is cross platform project. To run the project you have insert new campaign in the `campaigns table` of the database installed on the both local and hosted server.
 2. Use the new campaign id registered in the both local and hosted database and insert in the `campaignId` of the `main.js` file.
 3. Run the campaign by hitting the command `npm run main.js` in the local system on open the link `http://localhost:3000/`.

  
## Code files
 1. **main.js** : This is the JS file and use to run the campaign where desired campaign is help sending the email to the contacts list of the database hosted on the server.
 2. **nodemailer.js**: This file used to send the emails using google keys and email data.
 3. **get_contacts.php**: This is the php file which is hosted on the server and works as API for getting subscribed contacts of the website.
