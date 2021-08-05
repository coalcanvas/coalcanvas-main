const Profiles = {
  /**
   * Render the page content.
   */

  render: async () => {
    return /*html*/ `

<section scoped onload="scrollTop()" id='profiles' class='col-md-10 col-10 offset-md-1 text-center offset-md-1 offset-1 col-auto col-md-auto'>

  <h4 class="title-tag text-center blur-bg pt-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">Profiles</h4>
        <hr class='ultralight-border text-center w-25 higher' />

<canvas id='dcanvas'></canvas>  

 
</section>

    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {
    //setTimeout(() => window.location.reload(), 5500);
  },
};
export default Profiles;
