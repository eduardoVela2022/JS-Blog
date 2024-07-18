// View elements
const createCommentContentInputField = document.querySelector(
  "#create-comment-content"
);
const createCommentCreateButton = document.querySelector(
  "#create-comment-create-btn"
);
const createCommentCancelButton = document.querySelector(
  "#create-comment-cancel-btn"
);

// Handles the create comment event
async function handleCreateComment(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // Create comment form values
  const content = createCommentContentInputField.value.trim();

  // If the given content is not empty, continue
  if (content) {
    // Tries to create a comment with the given content
    const res = await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({ content, postId: this.dataset.postId }),
      headers: { "Content-Type": "application/json" },
    });

    // If the comment was created successfully, go to the post view
    if (res.ok) {
      document.location.replace(`/post/${this.dataset.postId}`);
    } else {
      // Else send error message
      alert(res.statusText);
    }
  } else {
    // Else send error message
    alert("Please enter the title and content of the post.");
  }
}

// Handles the cancel event
function handleCancel() {
  // Go to the post view
  document.location.assign(`/post/${createCommentCreateButton.dataset.postId}`);
}

// Event listeners
createCommentCreateButton.addEventListener("click", handleCreateComment);
createCommentCancelButton.addEventListener("click", handleCancel);
