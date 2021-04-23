function validate() {
  event.preventDefault();
  var user = document.getElementById("num").value;
  var pwd = document.getElementById("pass").value;
  let wrong = document.getElementById("invalid");
  if ((user == 9790430272) && (pwd == "ragul")) {
    alert("succesfully logged in");
    window.location = "secondpage.html";


  }
  else {
    wrong.style.visibility = "visible";


  }
  return false;
}
//onsubmit take the contents of the form to another page
//onclick button does not take the contents to another page
//reset button reset the contents we entered