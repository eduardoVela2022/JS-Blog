// View elements
const navbarLoginButton = document.querySelector("#navbar-login-btn");
const navbarSignUpButton = document.querySelector("#navbar-sign-up-btn");

// Redirects the user to the log in view
function goToLogginView() {
  // Go to the log in view
  document.location.assign("/login");
}

// Redirects the user to the sign up view
function goToSignUpView() {
  // Go to the sign up view
  document.location.assign("/sign-up");
}

// Event listeners
navbarLoginButton.addEventListener("click", goToLogginView);
navbarSignUpButton.addEventListener("click", goToSignUpView);
