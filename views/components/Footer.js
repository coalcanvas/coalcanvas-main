const Footer = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `
    <footer>
    <p class="text-center "><em>Crafted with:</em></p>  
          <img width='25vw' height='auto' class='pt-1' src='https://iconape.com/wp-content/png_logo_vector/javascript-logo.png' />
      <p class="text-center xlg-text higher pt-1"><em id="time"></em></p>  </footer>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    // Select a node that will contain the clock and date.
    const time = document.querySelector("#time");

    /**
     * Set inner html of selected node to current time and update it every second.
     */
    const updateTime = () => {
      // Get current time and format a clock and date.
      const newDate = new Date();
      const clock = newDate.toTimeString().slice(0, 8);
      const date = newDate.toLocaleDateString().slice(0, 8);
      // Insert formatted clock and date into Footer inner html.
      time.innerHTML = `${clock} ${date}`;
    };

    // Set node content and update it every second.
    updateTime();
    setInterval(updateTime, 1000);
  },
};

export default Footer;
