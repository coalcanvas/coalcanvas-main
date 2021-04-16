const Error404 = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section class='col-md-10 col-10 offset-1 offset-md-1'>
        <h1 class="title-tag text-center blur-bg"> <span class="black-text"> Error 404 </span><span class="isomorph-o blue-text">|</span> Page not found.</h1>

        <p class='sub col-auto col-md-auto col-8 col-md-8 offset-2 offset-md-2 isomorph-o text-center p-2'>
               If you were searching for something similar here but couldn't find it, <a href="/#/contact">mail us</a> and we will try our best to provide. </p>
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {},
};
export default Error404;
