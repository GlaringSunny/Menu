
function recheck() {
  let input = prompt("password required", "");
  if (input == "127127") {
alert("User Verified");
  } else {
    document.getElementById("V1").innerHTML =
    alert("haiya no password");
    window.location.replace("https://www.google.com");
  }
}
