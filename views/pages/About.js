const About = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
 

      <section id='about' class='glow col-md-10 col-12 offset-md-1 col-auto col-md-auto higher'>

      <div class="container-fluid  pb-5 mb-5">
              <h4 class="title-tag text-center  mt-2">about </h4>
              <hr class='ultralight-border text-center w-25 higher' />

                <div class="row pb-2 text-center">
                <p class=' sub col-auto col-md-auto col-10 col-md-12 offset-1 offset-md-1 mb-2 pb-2 pt-2 text-center xlg-text font-weight-bold'><i class="fab fa-think-peaks xlg-text"></i><br/>
                We focus on functionality and minimal design to improve web interactions. <br/><em class='text-muted xsmall-text'>special thanks to <a href="https://github.com/managervcf">Mateusz Pyzowski</a>, <a href="https://twitter.com/codinhood">@codinhood</a> and <a href="https://css-tricks.com/author/mikaelainalem/">Mikael Ainalem</a> for being inspirations + their generous open-source code contribution.</em></p></div>


                <div class="row justify-content-center d-flex low-gutter">
                <div id='about_1' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o rounded-border nature-3 blur-bg">
                                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center'> <i class="fas fa-concierge-bell xlg-text pt-2"></i></i><br/><span class="font-weight-bold big-ho">Attention Grabbing</span> <br/> <br/>Rigorous research & testing of simple & attractive UI interactions that inspire action. </p>
  </div>
                 <div id='about_2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex sub col-md-3 col-6 offset-1 pb-2 isomorph-o  rounded-border nature-3 blur-bg">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center small-text'><i class="fas fa-vector-square xlg-text p-1"></i> <br/><span class="font-weight-bold big-ho">Design x Functionality</span> <br/> <br/>Focus on minimal UI design to maintain the best platform functionality. </p>
 </div>
 

 <div id='about_3' data-aos="zoom-in" data-aos-offset="50" "data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o  rounded-border nature-3 blur-bg">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center '> <i class="fas fa-people-arrows xlg-text pt-2"></i><br/><span class="font-weight-bold big-ho">One on One</span><br/> <br/> Personalised experience for you and your customer. Any concern? <a href="/#/contact"> Mail</a> us . </p></div>
</div>


 
</div>
</section>

 

    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {
    /*     const aboutTwo = document.getElementById("about_2")
    
    aboutTwo.addEventListener("click", (e) => {
e.preventDefault()
aboutTwo.style.zIndex = "999";
    })  */
  },
};
export default About;
