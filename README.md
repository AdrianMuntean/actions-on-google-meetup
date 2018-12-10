# This is the container repository for *Actions on Google* workshops. 

0. Resources:
   1. [https://github.com/actions-on-google/](https://github.com/actions-on-google/)
   2. [https://developers.google.com/actions/](https://developers.google.com/actions/)
   3. [https://dialogflow.com/](https://dialogflow.com/)
   4. [Medium article](https://medium.com/swlh/chapter-6-how-to-build-a-google-home-app-with-dialogflow-overview-4549d92d8d6a)

1. **Ok Google... start Firebase**
   1. [Slides](https://github.com/AdrianMuntean/actions-on-google-meetup/blob/master/slides/Building%20actions%20for%20Google%20Assistant.pdf)
   2. [Source code](https://github.com/AdrianMuntean/actions-on-google-meetup/blob/master/src/color2LuckyNumber.js)

2. Action next
   * Install Firebase CLI: <code>npm -g install firebase-tools</code>
   * Check that that it was installed correctly: <code>firebase --version</code>
   * Login to firebase: <code>firebase login</code>
   * Disable the inline editor of the Fulfillment
   * Set up locally the project ID: <code>firebase use <PROJECT_ID></code>
   * Install dependencies (if any) <code>npm install</code> and deploy <code>firebase deploy</code>
   * Retrieve the deployment URL from the Firebase console and set it in Dialogflow
   * Test the action

