const deepai = require("deepai");
deepai.setApiKey(process.env.DEEPAI_KEY);
const User = require('../models/user');
const Monster = require('../models/monster');
const jwt = require('jsonwebtoken');
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// import uuid to help generate random names
const { v4: uuidv4 } = require("uuid");
// since we are sharing code, when you pull you don't want to have to edit the
// the bucket name, thats why we're using an environment variable
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const SECRET = process.env.SECRET;

module.exports = {
    getDeep
}


// Passes Literal Text
const result = await deepai.callStandardApi("sentiment-analysis", {
    text: "I am very happy to play with the newest APIs!",
});

// BROWSER RESULT RENDERING
// This code will render the result of the API call into an existing HTML element, 
// such as a div, with the id "yourResultContainerId".
// The result will fit itself inside your container, so be sure to set a size on it.