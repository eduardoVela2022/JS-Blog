// View elements
const loginUsernameInputField = document.querySelector("#login-username");
const loginPasswordInputField = document.querySelector("#login-password");
const loginLoginButton = document.querySelector("#login-btn");
const loginCancelButton = document.querySelector("#cancel-btn");

// Handles the log in submit event
async function handleLogin(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // Log in form values
  const username = loginUsernameInputField.value.trim();
  const password = loginPasswordInputField.value.trim();

  // If the given username and password are not empty, continue
  if (username && password) {
    // Tries to log in the user with the given username and password
    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the user was logged in successfully, go to the dashboard view
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

// Event listeners
loginLoginButton.addEventListener("click", handleLogin);
loginCancelButton.addEventListener("click", handleCancel);
