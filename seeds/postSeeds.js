// Imports
const Post = require("../models/Post");

// Post seed data
let postSeedData = [
  {
    title: "JavaScript vs TypeScript",
    content: `JavaScript and TypeScript are both programming languages used in web development, but they differ in several key aspects:

1. Type System:
   - JavaScript: Dynamically typed, types determined at runtime.
   - TypeScript: Statically typed, allows defining types for variables, parameters, etc.

2. Compilation:
   - JavaScript: Interpreted language, executed line by line.
   - TypeScript: Superset of JavaScript, compiles down to JavaScript for browser execution.

3. Code Structure:
   - JavaScript: Flexible and loosely structured.
   - TypeScript: More structured due to static typing, encourages interfaces, classes, and modules.

4. Tooling and IDE Support:
   - JavaScript: Widely supported by browsers and editors.
   - TypeScript: Supported by editors like Visual Studio Code, provides enhanced tooling for type-aware development.

5. Learning Curve:
   - JavaScript: Easier to learn, dynamic typing is forgiving.
   - TypeScript: Steeper learning curve, requires understanding of static typing concepts.

6. Popularity and Ecosystem:
   - JavaScript: Highly popular with a vast ecosystem of libraries and frameworks.
   - TypeScript: Growing in popularity, favored for large-scale applications and improved code maintainability.

In summary, TypeScript builds upon JavaScript by adding optional static typing, which helps in catching errors early during development and improves code quality and maintainability in larger projects. However, TypeScript requires an additional compilation step and has a more structured approach compared to JavaScript.
   `,
    userId: 1,
  },
  {
    title: "The main features of JavaScript ES6",
    content: `
ECMAScript 6 (ES6), also known as ECMAScript 2015, brought significant enhancements to JavaScript. Here are the main features introduced in ES6:

1. let and const Declarations:
   - let allows block-scoped variable declarations.
   - const declares constants that cannot be re-assigned.

2. Arrow Functions:
   - Concise syntax for writing anonymous functions.
   - Lexical 'this' binding.

3. Template Literals:
   - Embed expressions inside string literals using \`\${}\`.
   - Support multi-line strings without concatenation.

4. Enhanced Object Literals:
   - Shorthand for defining properties and methods.
   - Computed property names [propertyName]: value.

5. Destructuring Assignment:
   - Extract values from arrays or objects into variables.

6. Default Parameters:
   - Define default values for function parameters.

7. Rest and Spread Operators:
   - Spread (...) expands iterables into arguments or elements.
   - Rest (...) collects remaining elements into an array or object.

8. Classes:
   - Class syntax for defining objects and inheritance.

9. Modules:
   - Organize code into reusable units using import and export.

10. Promises:
    - Handle asynchronous operations more cleanly.

11. Symbol Type:
    - Represents unique identifiers.

12. Iterators and Iterables:
    - Protocol for iterating over data structures.

13. Generators:
    - Functions that can be paused and resumed.

14. New Built-in Methods:
    - Additional methods for Array, String, Object, etc.

15. Binary and Octal Number Format:
    - Represent binary (0b) and octal (0o) numbers.

These features introduced in ES6 (ECMAScript 2015) have significantly enhanced JavaScript's capabilities, making it more expressive, powerful, and easier to use for developers.
`,
    userId: 1,
  },
  {
    title: "The most popular JavaScript front end frameworks and libraries",
    content: `

Several JavaScript front-end frameworks have gained popularity due to their features and capabilities. Here are some of the most popular ones along with their key features:

1. React:
   - Features:
     - Component-based architecture for reusable UI elements.
     - Virtual DOM for efficient updates.
     - JSX for writing HTML within JavaScript.
     - One-way data binding.
     - Support for server-side rendering (SSR).
     - Rich ecosystem with Redux for state management, React Router for routing.

2. Angular:
   - Features:
     - Comprehensive framework for large-scale applications.
     - TypeScript for static typing and tooling support.
     - Two-way data binding.
     - Component-based architecture with dependency injection.
     - Built-in HTTP client.
     - CLI for project management.
     - Supports server-side rendering and mobile development with Ionic.

3. Vue.js:
   - Features:
     - Progressive framework for user interfaces.
     - Component-based architecture.
     - Virtual DOM with efficient updates.
     - Two-way data binding (optional with .sync modifier).
     - Directives for adding functionality to HTML elements.
     - Vue Router for client-side routing.
     - Vuex for state management.
     - CLI for project scaffolding and build configuration.

4. Svelte:
   - Features:
     - Compiles components into efficient imperative code.
     - No virtual DOM; updates DOM directly.
     - Simple component syntax with built-in CSS encapsulation.
     - Reactive declarations for state management.
     - Automatically removes unused code during build.
     - Easy integration with other frameworks and libraries.

5. Ember.js:
   - Features:
     - Convention over configuration approach.
     - Full-featured framework for ambitious web applications.
     - Two-way data binding.
     - Ember CLI for project management.
     - Ember Data for managing models and data.
     - Routing system with nested routes and named outlets.
     - Built-in testing framework.

Each of these frameworks has its strengths and is suitable for different types of projects and development preferences. Choosing the right one often depends on factors such as project complexity, team familiarity, performance requirements, and ecosystem support.
`,
    userId: 2,
  },
  {
    title:
      "Reasons why JavaScript is a popular programming language for web development",
    content: `
JavaScript is highly popular for web development due to several key reasons:

1. Client-Side Interactivity:
   - JavaScript runs in the browser, enabling dynamic and interactive web pages.
   - It allows for functionalities like form validation, interactive maps, animations, and real-time updates without page reloads.

2. Versatility:
   - JavaScript is used both on the client-side (front end) and server-side (back end), facilitating full-stack development.
   - This versatility promotes code reuse and enhances developer productivity.

3. Large Ecosystem:
   - JavaScript boasts a vast ecosystem of libraries, frameworks, and tools (e.g., React, Vue.js, Node.js) that streamline development tasks.
   - These resources provide robust solutions for various development needs.

4. Community Support:
   - JavaScript has a large and active developer community globally.
   - The community contributes to the language's growth, shares knowledge, and develops open-source projects, fostering support and innovation.

5. Ease of Learning:
   - JavaScript is relatively easy to learn, especially for beginners familiar with C-style languages.
   - Abundant documentation, tutorials, and online courses support learning and skill development.

6. Integration with HTML/CSS:
   - JavaScript seamlessly integrates with HTML and CSS, forming the basis of web development.
   - It allows manipulation of DOM elements, event handling, and dynamic styling, enhancing user interaction.

7. Support for Asynchronous Programming:
   - JavaScript's asynchronous nature with features like callbacks, promises, and async/await supports non-blocking operations.
   - It enables tasks such as data fetching and animations without freezing the user interface.

8. Continuous Evolution:
   - JavaScript evolves regularly with updates to the ECMAScript standard (e.g., ES6, ES7, ES8).
   - These updates introduce new features, improve performance, and address language shortcomings, ensuring JavaScript remains modern and competitive in web development.

These factors collectively contribute to JavaScript's popularity and widespread adoption in web development, making it an essential skill for developers building interactive and responsive web applications.
   `,
    userId: 3,
  },
];

// Creates the post seeds
async function createPostSeeds() {
  await Post.bulkCreate(postSeedData);
}

// Exports
module.exports = createPostSeeds;
