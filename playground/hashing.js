const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$y8C2aK7m7m94iwg6TFrgp.AhN9.qGVRXlExu/liJz3XZA6gKsNAki';

bcrypt.compare('password', hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 11
// };

// var token = jwt.sign(data, '123Hash');
// console.log(token);

// var decoded = jwt.verify(token, '123Hash');
// console.log('decoded', decoded);


// var message = "Hey Susanta";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     // data : data,
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if( resultHash === token.hash ) {
//     console.log('data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }