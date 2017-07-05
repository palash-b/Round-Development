var getUser = (id,callb)=>
{
  var user = {
    id:id,
    name:'Palash'
  };
  callb(user);
};

getUser(31, (userObj)=>
{
  console.log(userObj);
})
