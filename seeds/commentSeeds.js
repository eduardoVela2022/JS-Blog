// Imports
const Comment = require("../models/Comment");

// Comment seed data
let commentSeedData = [
  {
    content: `
Very good description about why Javascript is a popular programming language. Could you later do a blog post about the history of JavaScript? It would be interesting to know about the origins of the programming language.

- Posted by Alan García on ${new Date().toDateString()}
    `,
    userId: 1,
    postId: 4,
  },
  {
    content: `
What is the difference between one-way and two way data binding?

- Posted by Alan García on ${new Date().toDateString()}
    `,
    userId: 1,
    postId: 3,
  },
  {
    content: `One-way and two-way data binding are concepts used in web development frameworks like Angular, React, and Vue.js.

One-way data binding:
In one-way data binding, data flows only from the model to the UI. Changes in the model automatically update the UI, but changes in the UI do not affect the model directly. It's simpler and less prone to unexpected side effects.

Two-way data binding:
Two-way data binding allows data to flow in both directions: from the model to the UI and vice versa. Changes in the model update the UI, and changes in the UI update the model automatically. This can simplify handling user input and state management in certain scenarios.

Key differences:
- One-way data binding: Data flows from model to UI only.
- Two-way data binding: Data flows both from model to UI and UI to model.

Choosing between one-way and two-way data binding depends on the application's complexity and requirements.

- Posted by Jesse Rodriguez on ${new Date().toDateString()}
    `,
    userId: 2,
    postId: 3,
  },
  {
    content: `
Thanks for the explanation. I was curios about what TypeScript was about, since it has a similar name to JavaScript and some libraries and frameworks that use JavaScript also use TypeScript. Now I have a better understanding of it and I will probably attempt to learn it in the future.

- Posted by Richard Torrez on ${new Date().toDateString()}
    `,
    userId: 3,
    postId: 1,
  },
];

// Creates the comment seeds
async function createCommentSeeds() {
  await Comment.bulkCreate(commentSeedData);
}

// Exports
module.exports = createCommentSeeds;
