// View elements
const navbarDashboardButton = document.querySelector("#navbar-dashboard-btn");
const navbarLogoutButton = document.querySelector("#navbar-logout-btn");

// Redirects the user to the dashboard view
function goToDashboardView() {
  // Go to the dashboard view
  document.location.assign("/dashboard");
}

// Handles the log out event
async function handleLogout() {
  // Tries to log out the user
  const res = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the user was logged out successfully, go to the homepage view
  if (res.ok) {
    document.location.assign("/");
  } else {
    // Else send error message
    alert(res.statusText);
  }
}

// Event listeners
navbarDashboardButton.addEventListener("click", goToDashboardView);
navbarLogoutButton.addEventListener("click", handleLogout);
