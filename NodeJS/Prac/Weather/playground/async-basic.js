console.log("Starting Async");

setTimeout(()=>
{
  console.log("Inside");
}, 2000);

setTimeout(()=>
{
  console.log("Inside 2");
},0);



console.log("Exiting Async");
