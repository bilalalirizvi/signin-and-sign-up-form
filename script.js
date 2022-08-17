// TOGGLE FORM
let box = document.getElementById("box");
function toggleClass(x) {
  box.classList.add(x ? "activeLogin" : "activeSignup");
  box.classList.remove(x ? "activeSignup" : "activeLogin");
}

// SIGN UP
let userName = document.getElementById("userName");
let signupEmail = document.getElementById("signupEmail");
let signupPass = document.getElementById("signupPass");
function signup() {
  let userObj = {
    userName: userName.value,
    email: signupEmail.value,
    password: signupPass.value,
  };
  console.log(userObj);
  userName.value = "";
  signupEmail.value = "";
  signupPass.value = "";
}

// LOGIN
let loginEmail = document.getElementById("loginEmail");
let loginPass = document.getElementById("loginPass");
function login() {
  let userObj = {
    email: loginEmail.value,
    password: loginPass.value,
  };
  console.log(userObj);
  loginEmail.value = "";
  loginPass.value = "";
}
