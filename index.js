// Import pages, components and helper functions.
import Home from "./views/pages/Home.js";
import About from "./views/pages/About.js";
import Database from "./views/pages/Database.js";
import Profiles from "./views/pages/Profiles.js";
import Profile from "./views/pages/Profile.js";
import Items from "./views/pages/Items.js";
import ItemShow from "./views/pages/ItemShow.js";
import Contact from "./views/pages/Contact.js";
import Error404 from "./views/pages/Error404.js";

import Navbar from "./views/components/Navbar.js";
import Drawer from "./views/components/Drawer.js";
import Background from "./views/components/Background.js";
import Footer from "./views/components/Footer.js";
import Switch from "./views/components/Switch.js";

import { parseRequestUrl } from "./services/utils.js";

// List of supported routes. Any url other than these will render 404 page.
const routes = {
  "/": Home,
  "/about": About,
  "/database": Database,
  "/profiles": Profiles,
  "/profiles/:id": Profile,
  "/items": Items,
  "/items/:id": ItemShow,
  "/contact": Contact,
};

/**
 * The router code. Takes a URL, checks against the list of
 * supported routes and then renders the corresponding content page.
 */
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById("header_root");
  const drawer = null || document.getElementById("drawer");
  const switcher = null || document.getElementById("switch_root");
  // const background = null || document.getElementById("background");
  const content = null || document.getElementById("page_root");
  const footer = null || document.getElementById("footer_root");

  // Render the header and footer of the page.
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  drawer.innerHTML = await Drawer.render();
  await Drawer.after_render();
  switcher.innerHTML = await Switch.render();
  await Switch.after_render();
  // background.innerHTML = await Background.render();
  // await Background.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Destructure the parsed URl from the addressbar.
  const { resource, id, verb } = parseRequestUrl();
  // Parse the URL and if it has an id part, change it with the string ":id".
  const parsedUrl =
    (resource ? "/" + resource : "/") +
    (id ? "/:id" : "") +
    (verb ? "/" + verb : "");

  // Render the page from map of supported routes or render 404 page.
  const page = routes[parsedUrl] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

/********* profiles section */

/********* profiles section */
/**
 * Add event listeners
 */

// Listen on hash change.
window.addEventListener("hashchange", router);

// Listen on page load.
window.addEventListener("load", router);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
