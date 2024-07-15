// View elements
const signUpUsernameInputField = document.querySelector("#sign-up-username");
const signUpPasswordInputField = document.querySelector("#sign-up-password");
const signUpSignUpButton = document.querySelector("#sing-up-sign-up-btn");
const signUpCancelButton = document.querySelector("#sign-up-cancel-btn");

// Handles the sign up submit event
async function handleSignup(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // Sign up form values
  const username = signUpUsernameInputField.value.trim();
  const password = signUpPasswordInputField.value.trim();

  // If the given username and password are not empty, continue
  if (username && password) {
    // Tries to sign up the user with the given username and password
    const res = await fetch("/api/user/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the user was signed up successfully, go to the dashboard view
    if (res.ok) {
      document.location.replace("/dashboard");
    } else {
      // Else send error message
      alert(res.statusText);
    }
  } else {
    // Else send error message
    alert("Please enter a username and password.");
  }
}

// Handles the cancel event
function handleCancel() {
  // Go to the homepage view
  document.location.assign("/");
}

// Event Listeners
signUpSignUpButton.addEventListener("click", handleSignup);
signUpCancelButton.addEventListener("click", handleCancel);
