function validate(){
  event.preventDefault();
  var user = document.getElementById("name").value;
  var pwd = document.getElementById("pass").value;
  let wrong = document.getElementById("invalid");
  if((user==9790430272)&&(pwd=="ragul")){
    alert("succesfully logged in");
    window.location="secondpage.html";
    
    
  }
  else{
    wrong.style.visibility="visible";
   

  }
return false;
}
