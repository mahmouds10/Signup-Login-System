document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("targetName").innerHTML = JSON.parse(
    localStorage.getItem("last_login")
  ).name;
});
