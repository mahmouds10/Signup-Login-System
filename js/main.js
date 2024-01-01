// //============== Handling signing up ==============//
// declaring variables:-
var nameInput = document.getElementById("name");
var mailInput = document.getElementById("email");
var passwordInput = document.getElementById("pass");
var acceptPoliciesInput = document.getElementById("polices");
var showPasswordBtn = document.getElementById("eye");
var hidePasswordBtn = document.getElementById("eye-slash");
var signUpbtn = document.getElementById("signup");
var usersList = [];
var storedUsers = localStorage.getItem("users");

// Retrieving data from local storage
if (storedUsers !== null && storedUsers !== undefined && storedUsers !== "") {
  usersList = JSON.parse(storedUsers);
}

// Activate popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);


// Add new users to the list "Signing up"
signUpbtn.addEventListener("click", function () {
  var user = {
    name: nameInput.value,
    email: mailInput.value,
    password: passwordInput.value,
  };
  if (
    validateEmail(mailInput.value) &&
    validatePassword(passwordInput.value) &&
    validateName(nameInput.value) &&
    acceptPoliciesInput.checked &&
    chechAvailableMail(mailInput.value)
  ) {
    user.name = nameInput.value.trim();
    user.email = mailInput.value.toLowerCase();
    user.password = passwordInput.value;
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    clearForm();
    const myModal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    myModal.show();
  } else {
    signUpbtn.classList.remove("valid-btn");
  }
});

// Clear the form
function clearForm() {
  nameInput.value = "";
  mailInput.value = "";
  passwordInput.value = "";
  acceptPoliciesInput.checked = false;

  nameInput.classList.remove("valid");
  nameInput.classList.remove("invalid");
  document.getElementById("v-name").classList.remove("show");
  document.getElementById("inv-name").classList.remove("show");

  mailInput.classList.remove("valid");
  mailInput.classList.remove("invalid");
  document.getElementById("v-mail").classList.remove("show");
  document.getElementById("inv-mail").classList.remove("show");

  passwordInput.classList.remove("valid");
  passwordInput.classList.remove("invalid");
  document.getElementById("v-img").classList.remove("show");
  document.getElementById("inv-img").classList.remove("show");
  showPasswordBtn.style.display = "none";
  hidePasswordBtn.style.display = "none";
  passwordInput.type = "password";
  signUpbtn.classList.remove("valid-btn");
}

// Togle to show and hide password:-
passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value == "") {
    showPasswordBtn.style.display = "none";
    hidePasswordBtn.style.display = "none";
    passwordInput.type = "password";
  } else {
    showPasswordBtn.style.display = "block";
  }
});
showPasswordBtn.addEventListener("click", function () {
  showPasswordBtn.style.display = "none";
  hidePasswordBtn.style.display = "block";
  passwordInput.type = "text";
});
hidePasswordBtn.addEventListener("click", function () {
  showPasswordBtn.style.display = "block";
  hidePasswordBtn.style.display = "none";
  passwordInput.type = "password";
});

// Validate name:-
function validateName(name) {
  const nameRegex = /^[a-zA-Z\s']+$/;
  return nameRegex.test(name);
}
nameInput.addEventListener("keyup", function () {
  if (nameInput.value == "") {
    nameInput.classList.remove("valid");
    nameInput.classList.remove("invalid");
    document.getElementById("v-name").classList.remove("show");
    document.getElementById("inv-name").classList.remove("show");
  } else {
    if (validateName(nameInput.value)) {
      nameInput.classList.add("valid");
      nameInput.classList.remove("invalid");
      document.getElementById("v-name").classList.add("show");
      document.getElementById("inv-name").classList.remove("show");
    } else {
      nameInput.classList.remove("valid");
      nameInput.classList.add("invalid");
      document.getElementById("v-name").classList.remove("show");
      document.getElementById("inv-name").classList.add("show");
    }
  }
});
nameInput.addEventListener("blur", function () {
  if (nameInput.value == "") {
    nameInput.classList.remove("valid");
    nameInput.classList.remove("invalid");
    document.getElementById("v-name").classList.remove("show");
    document.getElementById("inv-name").classList.remove("show");
  } else {
    if (validateName(nameInput.value)) {
      nameInput.classList.add("valid");
      nameInput.classList.remove("invalid");
      document.getElementById("v-name").classList.add("show");
      document.getElementById("inv-name").classList.remove("show");
    } else {
      nameInput.classList.remove("valid");
      nameInput.classList.add("invalid");
      document.getElementById("v-name").classList.remove("show");
      document.getElementById("inv-name").classList.add("show");
    }
  }
});

// Validate email:-
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
mailInput.addEventListener("keyup", function () {
  if (mailInput.value == "") {
    mailInput.classList.remove("valid");
    mailInput.classList.remove("invalid");
    document.getElementById("v-mail").classList.remove("show");
    document.getElementById("inv-mail").classList.remove("show");
    document.getElementById("email-exist-hint").style.display = "none";
    document.getElementById("inv-mail").classList.remove("exist-hint");
  } else {
    if (validateEmail(mailInput.value)) {
      mailInput.classList.add("valid");
      mailInput.classList.remove("invalid");
      document.getElementById("v-mail").classList.add("show");
      document.getElementById("inv-mail").classList.remove("show");
      availableMail();
    } else {
      mailInput.classList.remove("valid");
      mailInput.classList.add("invalid");
      document.getElementById("v-mail").classList.remove("show");
      document.getElementById("inv-mail").classList.add("show");
    }
  }
});
mailInput.addEventListener("blur", function () {
  if (mailInput.value == "") {
    mailInput.classList.remove("valid");
    mailInput.classList.remove("invalid");
    document.getElementById("v-mail").classList.remove("show");
    document.getElementById("inv-mail").classList.remove("show");
  } else {
    if (validateEmail(mailInput.value)) {
      mailInput.classList.add("valid");
      mailInput.classList.remove("invalid");
      document.getElementById("v-mail").classList.add("show");
      document.getElementById("inv-mail").classList.remove("show");
      availableMail();
    } else {
      mailInput.classList.remove("valid");
      mailInput.classList.add("invalid");
      document.getElementById("v-mail").classList.remove("show");
      document.getElementById("inv-mail").classList.add("show");
    }
  }
});

// Check if the email available
function chechAvailableMail(email) {
  email = email.toLowerCase();
  for (var i = 0; i < usersList.length; i++) {
    if (email === usersList[i].email.toLowerCase()) {
      return false;
    }
  }
  return true;
}
function availableMail() {
  let email = mailInput.value;
  let emailIsValid = chechAvailableMail(email);

  if (!emailIsValid) {
    mailInput.classList.remove("valid");
    mailInput.classList.add("invalid");
    document.getElementById("v-mail").classList.remove("show");
    document.getElementById("inv-mail").classList.add("show");
    document.getElementById("email-exist-hint").style.display = "block";
    document.getElementById("inv-mail").classList.add("exist-hint");
  } else {
    mailInput.classList.remove("invalid");
    mailInput.classList.add("valid");
    document.getElementById("inv-mail").classList.remove("show");
    document.getElementById("v-mail").classList.add("show");
    document.getElementById("email-exist-hint").style.display = "none";
    document.getElementById("inv-mail").classList.remove("exist-hint");
  }
}

// // Validate password:-
function validatePassword(pass) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[A-Za-z\d!@#$%^&*()_+}{"':;?/>.<,]{8,}$/;
  return passwordRegex.test(pass);
}
passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value == "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.remove("invalid");
    document.getElementById("v-img").classList.remove("show");
    document.getElementById("inv-img").classList.remove("show");
  } else {
    if (validatePassword(passwordInput.value)) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      document.getElementById("v-img").classList.add("show");
      document.getElementById("inv-img").classList.remove("show");
    } else {
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("invalid");
      document.getElementById("v-img").classList.remove("show");
      document.getElementById("inv-img").classList.add("show");
    }
  }
});
passwordInput.addEventListener("blur", function () {
  if (passwordInput.value == "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.remove("invalid");
    document.getElementById("v-img").classList.remove("show");
    document.getElementById("inv-img").classList.remove("show");
  } else {
    if (validatePassword(passwordInput.value)) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      document.getElementById("v-img").classList.add("show");
      document.getElementById("inv-img").classList.remove("show");
    } else {
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("invalid");
      document.getElementById("v-img").classList.remove("show");
      document.getElementById("inv-img").classList.add("show");
    }
  }
});

// Check to make button available
function checkBtn() {
  if (
    acceptPoliciesInput.checked &&
    validateEmail(mailInput.value) &&
    chechAvailableMail(mailInput.value) &&
    validateName(nameInput.value) &&
    validatePassword(passwordInput.value)
  ) {
    signUpbtn.classList.add("valid-btn");
  } else {
    signUpbtn.classList.remove("valid-btn");
  }
}
nameInput.addEventListener("keyup", function () {
  checkBtn();
});
mailInput.addEventListener("keyup", function () {
  checkBtn();
});
passwordInput.addEventListener("keyup", function () {
  checkBtn();
});
acceptPoliciesInput.addEventListener("change", function () {
  checkBtn();
});
// ============================================================== //




