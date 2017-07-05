
console.log('---------------')
console.log('Starting Application...');

//::::Imports::::
const _ = require('lodash');
const yargs = require('yargs');
//const im1 = require('./New.js');
const blah = require('/Users/bhatiapa/Desktop/Prg/NodeJS/Prac/HelloWorld/notes.js');






 // const argv = yargs.argv;
 // console.log('Command: '+ argv);
 // var command = process.argv[2];
 // if (command  === 'add')
 // {
 //   addNote(argv.title);
 //
 // }
 //
 // // var addNote = (title) =>
 // // {
 // //   console.log(title);
 // // }
 //
 //


// var aa  = process.argv[2];
// var a = process.argv[3];
// a= _.parseInt(a);
// if (aa==='add')
// {
//   console.log(a+a);
// }


var aa = yargs
         .command('add','Add a Note',
          {
            title:
            {
              describe: 'Title for your Note',
              demand :true,
              alias: 't'
            },

            body:
            {
              describe: 'Body of Note',
              demand: true,
              alias:'b'
            }
          })
          .command('list','List all the Notes')
          .command('read','Read a note',
          {
            title:
            {
              describe: 'Title for your Note',
              demand :true,
              alias: 't'
            },
          })
          .command('del','Deleting a Note',
          {title:
          {
            describe: 'Title for your Note',
            demand :true,
            alias: 't'
          },
        })
          .help()
          .argv;
var command = process.argv[2];
// console.log(aa);
// console.log(command);
if (command ==='add')
{
  //notes.addNote(aa.title,aa.body);
  //console.log(aa.title,aa.body);
  console.log('Main Add');
  var check1 = blah.add(aa.title,aa.body);
  if (check1 === undefined)
  {
    console.log("Item not Added");
  }
  else
  {
    console.log("Item Sucessfully Added with Title: ",aa.title);
  }
}
else if(command ==='list')

{
    var listAllNotes = blah.getAll();
    console.log('Printing ',listAllNotes.length, 'notes');
    console.log(listAllNotes);
}

else if (command ==='read')
{
  var noteMatch = blah.getNote(aa.title);
  if (noteMatch.length !=0)
  {
  console.log("Matched Note: ",noteMatch);
  }
  else {
    console.log("Note not Found");
  }
}
else if (command ==='del')
{
  blah.delNote(aa.title);
}



console.log('---------------')
console.log('Ending Application.')
