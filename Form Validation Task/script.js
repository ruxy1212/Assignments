var password1 = document.getElementById("password1"), password2 = document.getElementById("password2");
function checkPassword(){
  if(password1.value != password2.value) {
    password1.setCustomValidity("Passwords Don't Match");
  } else {
    password1.setCustomValidity('');
  }
}
password1.onchange = checkPassword;
password2.onkeyup = checkPassword;