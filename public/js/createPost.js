// View elements
const createPostTitleInputField = document.querySelector("#create-post-title");
const createPostContentInputField = document.querySelector(
  "#create-post-content"
);
const createPostCreateButton = document.querySelector(
  "#create-post-create-btn"
);
const createPostCancelButton = document.querySelector(
  "#create-post-cancel-btn"
);

// Handles the create post event
async function handleCreatePost(event) {
  // Prevents the webpage from reloading
  event.preventDefault();

  // Create post form values
  const title = createPostTitleInputField.value.trim();
  const content = createPostContentInputField.value.trim();

  // If the given title and content are not empty, continue
  if (title && content) {
    // Tries to create a post with the given title and content
    const res = await fetch("/api/post/", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    // If the post was created successfully, go to the dashboard view
    if (res.ok) {
      document.location.replace("/dashboard");
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
  // Go to the dashboard view
  document.location.assign("/dashboard");
}

// Event listeners
createPostCreateButton.addEventListener("click", handleCreatePost);
createPostCancelButton.addEventListener("click", handleCancel);
