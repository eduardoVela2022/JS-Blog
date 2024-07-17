// View elements
const postCreateCommentButton = document.querySelector(
  "#post-create-comment-btn"
);

// Redirects the user to the create post view
function goToCreateCommentView() {
  // Go to the create post view
  document.location.assign("/create-comment");
}

// Event listeners
postCreateCommentButton.addEventListener("click", goToCreateCommentView);
