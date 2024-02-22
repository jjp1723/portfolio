// All web component imports
import "./wc-footer.js";
import "./wc-about.js";
import "./wc-documentation.js";
import "./wc-navbar.js";
import "./wc-resume.js";
import "./wc-projects-games.js";
import "./wc-projects-software.js";
import "./wc-contact.js";

// ----- Navbar Web Component Creation -----
const pageTitle = document.querySelector("title").innerHTML.split(" ");
const page = pageTitle[3];

const navbar = document.createElement("wc-navbar");
navbar.dataset.page = page ?? "About";

const body = document.querySelector("body");
const newBody = document.createElement("body");
newBody.appendChild(navbar);
body.innerHTML = newBody.innerHTML + body.innerHTML;