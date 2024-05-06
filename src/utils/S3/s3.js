import AWS from "aws-sdk";
import ENV from "../../config/keys.js";

// Create an instance of the S3 service with your AWS credentials
const s3 = new AWS.S3({
  accessKeyId: ENV.AWS.ACCESS_KEY,
  secretAccessKey: ENV.AWS.SECRET_KEY,
  region: ENV.AWS.REGION,
  apiVersion: "2006-03-01",
  // signatureVersion: "v4"
});

export default s3;
