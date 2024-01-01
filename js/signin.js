// //============== Handling signing up ==============//
// declaring variables:-
var signinMailInput = document.getElementById("email-signin");
var signinPasswordInput = document.getElementById("pass-signin");
var signinShowPassword = document.getElementById("eye-signin");
var siginHidePassword = document.getElementById("eye-slash-signin");
var signinBtn = document.getElementById("signin");
var rowSpans = document.getElementById("spanRow");
var usersList = [];
var signedUser = {
  name: "",
  email: "",
  password: "",
};

var storedUsers = localStorage.getItem("users");

// Retrieving data from local storage
if (storedUsers !== null && storedUsers !== undefined && storedUsers !== "") {
  usersList = JSON.parse(storedUsers);
}

function chechAvailableMail(email) {
  email = email.toLowerCase();
  for (var i = 0; i < usersList.length; i++) {
    if (email === usersList[i].email.toLowerCase()) {
      return false;
    }
  }
  return true;
}

signinPasswordInput.addEventListener("blur", function () {
  if (signinPasswordInput.value == "") {
    signinShowPassword.style.display = "none";
    siginHidePassword.style.display = "none";
    signinPasswordInput.type = "password";
  } else {
    signinShowPassword.style.display = "block";
  }
});
signinPasswordInput.addEventListener("keyup", function () {
  if (signinPasswordInput.value == "") {
    signinShowPassword.style.display = "none";
    siginHidePassword.style.display = "none";
    signinPasswordInput.type = "password";
  } else {
    signinShowPassword.style.display = "block";
  }
});
signinShowPassword.addEventListener("click", function () {
  signinShowPassword.style.display = "none";
  siginHidePassword.style.display = "block";
  signinPasswordInput.type = "text";
});
siginHidePassword.addEventListener("click", function () {
  signinShowPassword.style.display = "block";
  siginHidePassword.style.display = "none";
  signinPasswordInput.type = "password";
});

// Check if the email exist
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
signinMailInput.addEventListener("keyup", function () {
  if (signinMailInput.value == "") {
    signinMailInput.classList.remove("valid");
    signinMailInput.classList.remove("invalid");
    document.getElementById("v-mail-signin").classList.remove("show");
    document.getElementById("inv-mail-signin").classList.remove("show");
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
  } else {
    if(validateEmail(signinMailInput.value)){
      if (chechAvailableMail(signinMailInput.value)) {
        signinMailInput.classList.remove("valid");
        signinMailInput.classList.add("invalid");
        document.getElementById("v-mail-signin").classList.remove("show");
        document.getElementById("inv-mail-signin").classList.add("show");
        document.getElementById("inv-mail-signin").classList.add("exist-hint");
        document.getElementById("email-exist-hint-signin").style.display =
          "block";
      } else {
        signinMailInput.classList.add("valid");
        signinMailInput.classList.remove("invalid");
        document.getElementById("v-mail-signin").classList.add("show");
        document.getElementById("inv-mail-signin").classList.remove("show");
        document.getElementById("inv-mail-signin").classList.remove("exist-hint");
        document.getElementById("email-exist-hint-signin").style.display = "none";
        let email = signinMailInput.value;
        let user = usersList.find((user) => user.email === email);
        if (user) {
          signedUser = { ...user };
        }
      }
    }
  else{
    signinMailInput.classList.remove("valid");
      signinMailInput.classList.add("invalid");
      document.getElementById("v-mail-signin").classList.remove("show");
      document.getElementById("inv-mail-signin").classList.add("show");
      document.getElementById("inv-mail-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
  }

  }
});
signinMailInput.addEventListener("blur", function () {
  if (signinMailInput.value == "") {
    signinMailInput.classList.remove("valid");
    signinMailInput.classList.remove("invalid");
    document.getElementById("v-mail-signin").classList.remove("show");
    document.getElementById("inv-mail-signin").classList.remove("show");
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
  } else {
    if(validateEmail(signinMailInput.value)){
      if (chechAvailableMail(signinMailInput.value)) {
        signinMailInput.classList.remove("valid");
        signinMailInput.classList.add("invalid");
        document.getElementById("v-mail-signin").classList.remove("show");
        document.getElementById("inv-mail-signin").classList.add("show");
        document.getElementById("inv-mail-signin").classList.add("exist-hint");
        document.getElementById("email-exist-hint-signin").style.display =
          "block";
      } else {
        signinMailInput.classList.add("valid");
        signinMailInput.classList.remove("invalid");
        document.getElementById("v-mail-signin").classList.add("show");
        document.getElementById("inv-mail-signin").classList.remove("show");
        document.getElementById("inv-mail-signin").classList.remove("exist-hint");
        document.getElementById("email-exist-hint-signin").style.display = "none";
        let email = signinMailInput.value;
        let user = usersList.find((user) => user.email === email);
        if (user) {
          signedUser = { ...user };
        }
      }
    }
  else{
    signinMailInput.classList.remove("valid");
      signinMailInput.classList.add("invalid");
      document.getElementById("v-mail-signin").classList.remove("show");
      document.getElementById("inv-mail-signin").classList.add("show");
      document.getElementById("inv-mail-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-mail-signin").classList.remove("exist-hint");
  }

  }
});



// Password handling:-
signinPasswordInput.addEventListener("keyup", function () {
  if (signinPasswordInput.value == "" || signinMailInput.value == "") {
    signinPasswordInput.classList.remove("valid");
    signinPasswordInput.classList.remove("invalid");
    document.getElementById("v-img-signin").classList.remove("show");
    document.getElementById("inv-img-signin").classList.remove("show");
    document.getElementById("inv-img-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-img-signin").classList.remove("exist-hint");
    document.getElementById("wrong").classList.add("d-none");
    document.getElementById("spanRow").classList.add("justify-content-end");
    document
      .getElementById("spanRow")
      .classList.remove("justify-content-between");
  } else {
    if (signinPasswordInput.value === signedUser.password) {
      signinPasswordInput.classList.add("valid");
      signinPasswordInput.classList.remove("invalid");
      document.getElementById("v-img-signin").classList.add("show");
      document.getElementById("inv-img-signin").classList.remove("show");
      document.getElementById("inv-img-signin").classList.remove("exist-hint");
      document.getElementById("email-exist-hint-signin").style.display = "none";
      document.getElementById("wrong").classList.add("d-none");
      document.getElementById("spanRow").classList.add("justify-content-end");
      document
        .getElementById("spanRow")
        .classList.remove("justify-content-between");
    } else {
      signinPasswordInput.classList.add("invalid");
      signinPasswordInput.classList.remove("valid");
      document.getElementById("v-img-signin").classList.remove("show");
      document.getElementById("inv-img-signin").classList.add("show");
      document.getElementById("inv-img-signin").classList.remove("exist-hint");
      document.getElementById("wrong").classList.remove("d-none");
      document
        .getElementById("spanRow")
        .classList.remove("justify-content-end");
      document
        .getElementById("spanRow")
        .classList.add("justify-content-between");
    }
  }
});
signinPasswordInput.addEventListener("blur", function () {
  if (signinPasswordInput.value == "" || signinMailInput.value == "") {
    signinPasswordInput.classList.remove("valid");
    signinPasswordInput.classList.remove("invalid");
    document.getElementById("v-img-signin").classList.remove("show");
    document.getElementById("inv-img-signin").classList.remove("show");
    document.getElementById("inv-img-signin").classList.remove("exist-hint");
    document.getElementById("email-exist-hint-signin").style.display = "none";
    document.getElementById("inv-img-signin").classList.remove("exist-hint");
    document.getElementById("wrong").classList.add("d-none");
    document.getElementById("spanRow").classList.add("justify-content-end");
    document
      .getElementById("spanRow")
      .classList.remove("justify-content-between");
  } else {
    if (signinPasswordInput.value === signedUser.password) {
      signinPasswordInput.classList.add("valid");
      signinPasswordInput.classList.remove("invalid");
      document.getElementById("v-img-signin").classList.add("show");
      document.getElementById("inv-img-signin").classList.remove("show");
      document.getElementById("inv-img-signin").classList.remove("exist-hint");
      document.getElementById("email-exist-hint-signin").style.display = "none";
      document.getElementById("wrong").classList.add("d-none");
      document.getElementById("spanRow").classList.add("justify-content-end");
      document
        .getElementById("spanRow")
        .classList.remove("justify-content-between");
    } else {
      signinPasswordInput.classList.add("invalid");
      signinPasswordInput.classList.remove("valid");
      document.getElementById("v-img-signin").classList.remove("show");
      document.getElementById("inv-img-signin").classList.add("show");
      document.getElementById("inv-img-signin").classList.remove("exist-hint");
      document.getElementById("wrong").classList.remove("d-none");
      document
        .getElementById("spanRow")
        .classList.remove("justify-content-end");
      document
        .getElementById("spanRow")
        .classList.add("justify-content-between");
    }
  }
});

function checkBtn() {
  if (
    !chechAvailableMail(signinMailInput.value) &&
    signinPasswordInput.value === signedUser.password
  ) {
    signinBtn.classList.add("valid-btn");
  } else {
    signinBtn.classList.remove("valid-btn");
  }
}
signinMailInput.addEventListener("keyup", function () {
  checkBtn();
});
signinPasswordInput.addEventListener("keyup", function () {
  checkBtn();
});

signinBtn.addEventListener("click", function () {
  if (
    !chechAvailableMail(signinMailInput.value) &&
    signinPasswordInput.value === signedUser.password
  ) {
    window.location.href = "home.html";
    localStorage.setItem("last_login", JSON.stringify(signedUser));
  }
});
