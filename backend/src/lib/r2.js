const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const UPLOAD_URL_EXPIRY_SECONDS = 15 * 60;
const DOWNLOAD_URL_EXPIRY_SECONDS = 5 * 60;

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// Client PUTs the file bytes directly to this URL — the file body never
// passes through our backend.
function getUploadUrl(key, contentType) {
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });
  return getSignedUrl(client, command, { expiresIn: UPLOAD_URL_EXPIRY_SECONDS });
}

// Bucket is private (sensitive documents) — reads always go through a
// short-lived signed URL, never a stored public link.
function getDownloadUrl(key) {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });
  return getSignedUrl(client, command, { expiresIn: DOWNLOAD_URL_EXPIRY_SECONDS });
}

function deleteObject(key) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });
  return client.send(command);
}

// Direct backend-side upload for server-generated content (e.g. a lease PDF
// assembled from clause data), as opposed to getUploadUrl's presigned-PUT
// flow for bytes coming from the client.
function putObject(key, buffer, contentType) {
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });
  return client.send(command);
}

module.exports = { getUploadUrl, getDownloadUrl, deleteObject, putObject };
