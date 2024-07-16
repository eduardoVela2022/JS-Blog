// View elements
const dashboardCreatePostButton = document.querySelector(
  "#dashboard-create-post-btn"
);

// Redirects the user to the create post view
function goToCreatePostView() {
  // Go to the create post view
  document.location.assign("create-post");
}

// Event listeners
dashboardCreatePostButton.addEventListener("click", goToCreatePostView);
