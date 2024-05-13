import AWS from "aws-sdk";
import ENV from "../../config/keys.js";

const s3 = new AWS.S3({
  accessKeyId: ENV.AWS.ACCESS_KEY,
  secretAccessKey: ENV.AWS.SECRET_KEY,
  region: ENV.AWS.REGION,
  apiVersion: "2006-03-01",
});

export default s3;
