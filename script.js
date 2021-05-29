
function validation()
{
  var phoneno = /^\d{10}$/;
  var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  var x=forms["myForm"]["phnumber"].value;
  if(!x.match(phoneno))
  {
     alert("You have entered an invalid phone number!");
     return false;
  }
  var x=forms["myForm"]["EmailID"].value;
  if(!x.match(mailformat))
      {
       alert("You have entered an invalid email address!");
           return false;
      }   
  return true;
}

