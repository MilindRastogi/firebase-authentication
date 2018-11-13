
function submit()
{
  var m=document.getElementById("name").value;
  var n=document.getElementById("no").value;
  var o=document.getElementById("email").value;
  var p=document.getElementById("password").value;
  var firebaseref=firebase.database().ref();
 
   
  firebaseref.push().set(m);
  firebaseref.push().set(n);
  firebaseref.push().set(o);
  firebaseref.push().set(p);
  
  document.getElementById("demo").innerHTML="You have created your new account. Now press the login page link to login to your account"
  
}
function myfunction(){
   var m=document.getElementById("name").value;
   var n=document.getElementById("no").value;
   var o=document.getElementById("email").value;
   var p=document.getElementById("password").value;
   var oi=document.getElementById("email1").value;
   var pi=document.getElementById("password1").value;
   if(o==oi){
       if(p==pi){
            window.open("logeed in.html");
            }
        }
   else
   {
       window.alert("You have entered invalid email id or password");
   }
}