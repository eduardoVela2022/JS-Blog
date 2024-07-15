// View elements
const navbarHomeButton = document.querySelector("#navbar-home-btn");

// Redirects the user to the homepage view
function goToHomepageView() {
  // Go to the homepage view
  document.location.assign("/");
}

// Event listeners
navbarHomeButton.addEventListener("click", goToHomepageView);
