function stillDeveloped() {
  alert("Still in Development");
}

function checkLogin() {
  if (document.forms['login']['username_or_email'].value.length < 4) {
    alert("Username kurang dari 4 karakter");
  } else if (document.forms['login']['password'].value.length < 6) {
    alert("Password kurang dari 6 karakter");
  } else {
    document.forms['login'].submit();
  }
}