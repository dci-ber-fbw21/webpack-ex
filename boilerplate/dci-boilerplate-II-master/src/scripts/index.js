// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

import hljs from "highlight.js";
import "highlight.js/styles/github.css";
// \/ All of your javascript should go here \/

document.addEventListener("DOMContentLoaded", event => {
  document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block);
  });
});
