console.log('Starting Application:');


const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _=require('lodash');
var user = os.userInfo();



//console.log(process.argv);

var command = process.argv[2];
console.log(command);

console.log('End of Application');
