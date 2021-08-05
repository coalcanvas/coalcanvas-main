const Navbar = {
  /**
   * Render the component content.
   */

  render: async () => {
    // Define a list of elements.

    const links = [
      `&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;`,
      "About",
      "Contact",
      "Profiles",
      "Cases",
      "Resources",
    ];
    const icons = [
      "far fa-compass",
      "far fa-lightbulb",
      "far fa-paper-plane",
      "far fa-user",
      "fas fa-book",
      "fas fa-tasks",
    ];
    const maps = links.concat(icons);

    // Build html with navigation links.
    const navLinks = maps
      .map(
        (link, i) => /*html*/ `

<li id='nav-button' class="nav-item  d-inline-block ml-3 mb-2 btn btn-sm small-text move-right sticky">
<a class="nav-link small-text" >
${links[0]}<i class='${icons[0]} ml-5'></i></a></li>
<li id='nav-button' class="nav-item nature-3 d-inline-block ml-3 mb-2 isomorph-o btn btn-sm small-text ">
<a class="nav-link small-text " href="/#/${links[1].toLowerCase()}" >
${links[1]}  <i class='${icons[1]} ml-4'></i></a></li>
<li id='nav-button' class="nav-item nature-3 d-inline-block ml-4 mb-2 isomorph-o btn btn-sm small-text "><a  class="nav-link small-text " href="/#/${links[2].toLowerCase()}" >
${links[2]} &nbsp;&nbsp;&nbsp;&nbsp;<i class='${icons[2]} ml-2'></i></a></li>
<li id='nav-button' class="nav-item nature-3 d-inline-block ml-3 mb-2 isomorph-o btn btn-sm small-text "><a  class="nav-link small-text " href="/#/${links[3].toLowerCase()}" >
${links[3]} <i class='${icons[3]} ml-4'></i></a></li>     
        <li id='nav-button fourth' class="nav-item nature-3 d-inline-block mb-2 isomorph-o btn btn-sm small-text move-right"><a class="nav-link xxsmall-text " href="/#/${links[4].toLowerCase()}" >
${links[4]}  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   <i class='${
          icons[4]
        } ml-3'></i></a></li>  
<li id='nav-button' class="nav-item nature-3 d-inline-block ml-3 mb-2 isomorph-o btn btn-sm small-text ">
<a class="nav-link xsmall-text " href="/#/${links[5].toLowerCase()}" >
${links[5]} <i class='${icons[5]} ml-5'></i></a></li>
 
          `
      )
      .slice(0, 1)
      .join("\n");
    return /*html*/ `
      <nav class="navbar">   
<div class='row d-flex flex-wrap justify-content-left'>
        <a class="navbar-brand ml-2" href="/#">
          <img class="navbar-brand " src="../../styles/gallery/coalcanvasO2.gif" width="70" height="70" alt="coalcanvas"> 
           <span class='tagline nature'> 石炭キャンバス・</span>
        </a>

</div>
<div class="col-auto ">

        <ul class="navbar-nav mr-auto row d-flex justify-content-start flex-row flex-wrap pb-4 btn-btn-sm ">
 
          ${navLinks}
        </ul>

        </div>
      </nav>

        
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {
    const navBar = document.querySelector(".navbar-nav");
    const closeButton = document.querySelector(".fa-compass");
    navBar.addEventListener("mouseover", () => {
      if (
        window.innerWidth < 575 &&
        !closeButton.classList.contains("active")
      ) {
        navBar.classList.add("navHover");
        closeButton.classList.add("active");
      } else if (
        window.innerWidth < 575 &&
        navBar.classList.contains("navHover") &&
        closeButton.classList.contains("active")
      ) {
        closeButton.addEventListener("click", () => {
          navBar.classList.remove("navHover");
          closeButton.classList.remove("active");
        });
      } else {
        navBar.style.pointerEvents = "auto";
      }
    });
  },
};

export default Navbar;
