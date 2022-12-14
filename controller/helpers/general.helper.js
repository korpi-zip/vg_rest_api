/** packages */
const CryptoJS = require("crypto-js")
const config = require("config")

/** Encrypt Password */
exports.EncryptPassword = (password) =>{
    let secretKey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};