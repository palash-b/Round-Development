console.log('---------------')
console.log('Entering json.js');

const fs = require('fs');



// var obj =
// {
//   name : 'Palash', age : '24'
// }
//
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
//
// // console.log(typeof obj);
// // console.log(typeof stringObj);
// //console.log(stringObj);
//
// fs.writeFileSync('notes.js',stringObj);
//
// var returnString = fs.readFileSync('notes.js');
// returnString = JSON.parse(returnString);
// console.log(typeof returnString);

// var rev = '{"name":"Palash","age":"24"}';
// var rev_json = JSON.parse(rev);
// console.log(typeof rev);
// console.log(typeof rev_json);
// console.log(rev_json);

var originalNote =
{
  'title':'Some Title',
  'body':'Some Body'
}

// console.log('---',typeof originalNote);

var originalNoteString = JSON.stringify(originalNote);
// console.log(originalNoteString);
// console.log(typeof originalNoteString);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
// console.log('----',note);
// console.log(typeof note);
// console.log(note.body);



console.log('Exiting json.js');
console.log('---------------')
