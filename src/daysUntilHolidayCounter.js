'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

app.intent('Counter', (conv, {date}) => {
    //const plusOne = 2;
    // Respond with the user's lucky number and end the conversation.
    const today = new Date();
    console.log('Into the counter function');
    const holiday = new Date(date);
    const timeDiff = Math.abs(holiday.getTime() - today.getTime());
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    conv.close('There are ' + daysLeft + ' days left until that');
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
