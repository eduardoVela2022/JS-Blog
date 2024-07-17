// View elements
const homepagePostListItems = document.querySelectorAll("li");

// Redirects the user to the post view of the selected post
function goToPostView() {
  // Go to the post view
  document.location.assign(`/post/${this.id}`);
}

// Event listeners
homepagePostListItems.forEach((item) => {
  item.addEventListener("click", goToPostView);
});
