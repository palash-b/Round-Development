function greet()
{
  console.log('hi');
}

//greet();

function abc(fn)
{
  fn()
}

abc(greet);


var greetMe = function ()
{
    console.log('Hello');
}

abc(greetMe);


abc(function()
{
console.log("Heya");
});

var b = require('./002.js');
//one();
b();
