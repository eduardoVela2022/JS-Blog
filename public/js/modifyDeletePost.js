// View elements
const modifyDeletePostTitleInputField = document.querySelector(
  "#modify-delete-post-title"
);
const modifyDeletePostContentInputField = document.querySelector(
  "#modify-delete-post-content"
);
const modifyDeletePostModifyButton = document.querySelector(
  "#modify-delete-post-modify-btn"
);
const modifyDeletePostDeleteButton = document.querySelector(
  "#modify-delete-post-delete-btn"
);
const modifyDeletePostGoBackButton = document.querySelector(
  "#modify-delete-post-back-btn"
);

// Handles the modify post event
async function handleModifyPost(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // Modify post form values
  const title = modifyDeletePostTitleInputField.value.trim();
  const content = modifyDeletePostContentInputField.value.trim();

  // If the given title and content are not empty, continue
  if (title && content) {
    // Tries to modify the post with the given username and password
    const res = await fetch(
      `/api/post/${modifyDeletePostModifyButton.dataset.postId}`,
      {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      }
    );

    // If the post was modified successfully, reload the current view
    if (res.ok) {
      document.location.reload();
    } else {
      // Else send error message
      alert(res.statusText);
    }
  } else {
    // Else send error message
    alert("Please enter the title and content of the post.");
  }
}

// Handles the delete post event
async function handleDeletePost(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // If the user wants to delete the selected post, continue
  if (confirm("Are you sure you want to delete this post?") === false) {
    return;
  }

  // Tries to delete the post with the given id
  const res = await fetch(
    `/api/post/${modifyDeletePostModifyButton.dataset.postId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );

  // If the post was deleted successfully, go to the dashboard view
  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    // Else send error message
    alert(res.statusText);
  }
}

// Handles the go back event
function handleGoBack() {
  // Go to the dashboard view
  document.location.assign("/dashboard");
}

// Event listeners
modifyDeletePostModifyButton.addEventListener("click", handleModifyPost);
modifyDeletePostDeleteButton.addEventListener("click", handleDeletePost);
modifyDeletePostGoBackButton.addEventListener("click", handleGoBack);
