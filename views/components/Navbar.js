const Navbar = {
  /**
   * Render the component content.
   */
  render: async () => {
    // Define a list of elements.

    const links = ["About", "Contact", "Profiles", "Cases", "Resources"];
    const icons = [
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
<li id='nav-button' class="nav-item techno d-inline-block ml-3 mb-2 isomorph-o btn btn-sm xsmall-text ">
<a class="nav-link xsmall-text " href="/#/${links[0].toLowerCase()}">
${links[0]}<i class='${icons[0]} ml-5'></i></a></li>
<li id='nav-button' class="nav-item techno d-inline-block ml-3 mb-2 isomorph-o btn btn-sm xsmall-text ">
<a class="nav-link xsmall-text " href="/#/${links[1].toLowerCase()}">
${links[1]}  <i class='${icons[1]} ml-4'></i></a></li>
<li id='nav-button' class="nav-item techno d-inline-block ml-4 mb-2 isomorph-o btn btn-sm xsmall-text "><a  class="nav-link xsmall-text " href="/#/${links[2].toLowerCase()}">
${links[2]} &nbsp;&nbsp;&nbsp;&nbsp;<i class='${icons[2]} ml-2'></i></a></li>
<li id='nav-button' class="nav-item techno d-inline-block ml-3 mb-2 isomorph-o btn btn-sm xsmall-text "><a  class="nav-link xsmall-text " href="/#/${links[3].toLowerCase()}">
${links[3]} <i class='${icons[3]} ml-4'></i></a></li>     
        <li id='nav-button' class="nav-item techno d-inline-block mb-2 isomorph-o btn btn-sm xsmall-text "><a class="nav-link xxsmall-text " href="/#/${links[4].toLowerCase()}">
${links[4]} <i class='${icons[4]} ml-3'></i></a></li>  
 
          `
      )
      .slice(0, 1)
      .join("\n");
    return /*html*/ `
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand ml-2" href="/#">
          <img class="navbar-brand " src="../../styles/gallery/zyro-cat.svg" width="70" height="70" alt="zyro-cat">
        </a>
      <div class="navbar-brand to-the-left"><label class="techno isomorph-o mr-auto p-2" data-aos="zoom-in-down" data-aos-easing="ease-in-sine" data-aos-duration="600"> coalcanvas.github.io</label></div>  
<div class="col-1 col-auto ">
        <ul class="navbar-nav mr-auto row d-flex justify-content-start flex-row flex-wrap pb-4 btn-btn-sm ">
          ${navLinks}
        </ul></div>
      </nav>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {},
};

export default Navbar;
