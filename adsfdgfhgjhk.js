      function recheck() {
  let input = prompt("password required", "");
  if (input == "9420127") {
  alert("User Verified");
  setTimeout(timer, 9000000);
  } else {
    alert("Verification Failed!");
    window.location.replace("https://www.google.com");
  }
}
      function timer() {
  alert('key expired!');
  window.open("https://glaringsunny.github.io/Menu/expired.html");
  window.close();
}
