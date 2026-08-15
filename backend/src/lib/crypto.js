const crypto = require("crypto");

// AES-256-GCM for app-layer encryption of sensitive fields (e.g. Entity.ein)
// per CLAUDE.md's "EIN and other sensitive financial identifiers stored
// encrypted at rest" rule. Key is a 32-byte value, hex-encoded in env.
const ALGORITHM = "aes-256-gcm";

function getKey() {
  const hex = process.env.ENCRYPTION_KEY;
  if (!hex) {
    throw new Error("ENCRYPTION_KEY is not set");
  }
  const key = Buffer.from(hex, "hex");
  if (key.length !== 32) {
    throw new Error("ENCRYPTION_KEY must be a 32-byte value, hex-encoded (64 hex characters)");
  }
  return key;
}

// Returns "iv:authTag:ciphertext", each hex-encoded.
function encrypt(plaintext) {
  if (plaintext === null || plaintext === undefined) return plaintext;

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGORITHM, getKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(String(plaintext), "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return `${iv.toString("hex")}:${authTag.toString("hex")}:${ciphertext.toString("hex")}`;
}

function decrypt(stored) {
  if (stored === null || stored === undefined) return stored;

  const [ivHex, authTagHex, ciphertextHex] = stored.split(":");
  const decipher = crypto.createDecipheriv(ALGORITHM, getKey(), Buffer.from(ivHex, "hex"));
  decipher.setAuthTag(Buffer.from(authTagHex, "hex"));

  const plaintext = Buffer.concat([decipher.update(Buffer.from(ciphertextHex, "hex")), decipher.final()]);
  return plaintext.toString("utf8");
}

module.exports = { encrypt, decrypt };
