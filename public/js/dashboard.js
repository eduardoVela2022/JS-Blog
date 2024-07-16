// View elements
const dashboardCreatePostButton = document.querySelector(
  "#dashboard-create-post-btn"
);
const dashboardPostListItems = document.querySelectorAll("li");

// Redirects the user to the create post view
function goToCreatePostView() {
  // Go to the create post view
  document.location.assign("create-post");
}

// Redirects the user to the modify and delete post view of the selected post
function goToModifyAndDeletePostView() {
  document.location.assign(`/modify-delete-post/${this.id}`);
}

// Event listeners
dashboardCreatePostButton.addEventListener("click", goToCreatePostView);
dashboardPostListItems.forEach((item) => {
  item.addEventListener("click", goToModifyAndDeletePostView);
});
