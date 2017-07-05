console.log('---------------');
console.log('Entering Notes.js');

//::::Module Exports::::

const fs = require('fs');

var fetchNotes = ()=>
{
  try {
    var entityString = fs.readFileSync('ndata.json');
    return entity = JSON.parse(entityString);

  } catch (e) {
    return [];
  }

};

var saveNotes = (entity)=>
{
  fs.writeFileSync('ndata.json',JSON.stringify(entity));

};

var add =(title,body) =>
{
  // console.log('Inside Add: ');
  // console.log(title,body);
  var entity = fetchNotes();
  var toBeAdded =
  {
    title,
    body
  }




var duplicateEntity = entity.filter((toBeAdded) => toBeAdded.title ===title);
console.log(duplicateEntity);
if (duplicateEntity.length ===0)
{
  entity.push(toBeAdded);
  saveNotes(entity);
  return toBeAdded;
}

};

var getAll=() =>
{
  console.log('Getting All Notes');
  return fetchNotes();
};
var getNote=(title) =>
{

  var entity = fetchNotes();
  var getNoteLookup = entity.filter((toBeAdded)=>toBeAdded.title ===title);
  return getNoteLookup;

  console.log('Getting Note: ');
  console.log(title);
};

var delNote = (title)=>
{
  //fetchNote:
  var entity = fetchNotes();
  var delDupLookUp = entity.filter((toBeAdded)=> toBeAdded.title!==title);
  saveNotes(delDupLookUp);

  console.log("Deleting the Notes");
}

module.exports =
{
  add,
  getAll,
  getNote,
  delNote
};



// var removeNote=(title=>
//)


console.log('---------------')
console.log('Exiting Notes.js');
