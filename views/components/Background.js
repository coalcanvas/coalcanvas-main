const Background = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `
  <div class="container-fluid">
        <div class="snowflake glow snowflake--1"><span></span></div>
        <div class="snowflake glow snowflake--2"><span></span></div>
        <div class="snowflake glow snowflake--3"><span></span></div>
        <div class="snowflake glow snowflake--4"><span></span></div>
        <div class="snowflake glow snowflake--5"><span></span></div>
        <div class="snowflake glow snowflake--6"><span></span></div>
        <div class="snowflake glow snowflake--7"><span></span></div>
        <div class="snowflake glow snowflake--8"><span></span></div>
        <div class="snowflake glow snowflake--9"><span></span></div>
        <div class="snowflake glow snowflake--10"><span></span></div>
        <div class="snowflake glow snowflake--11"><span></span></div>
        <div class="snowflake glow snowflake--12"><span></span></div>
  </div>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {},
};

export default Background;
