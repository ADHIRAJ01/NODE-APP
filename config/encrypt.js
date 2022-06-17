//ENCYPT PASSWORD TO BE SAVED ON SERVER TO PROTECT FROM HACKING 
//change passsword using hashing or using good algorithm 


//NOT WORKING 


/*

const crypto = require('crypto');



const cipher = crypto.createDecipher('aes192', 'a password');
let encrypted = cipher.update('ahehwfbui', 'utf8', 'hex');
console.log('encrypted: ' + encrypted);
encrypted += cipher.final('hex');
console.log('encrypted final: ' + encrypted);


const decipher = crypto.createDecipher('aes192', 'a password');
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
console.log('decrypted: ' + decrypted);

*/