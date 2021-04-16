//scrollTop onhashchange
window.addEventListener("load", async function stt(data) {
  await data;
  console.log("datatatata", data);

  if (resource == "about") {
    document
      .querySelector("#about")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  if (resource == "contact") {
    document
      .querySelector("#contact")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  if (resource == "database") {
    document
      .querySelector("#database")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  if (resource == "items") {
    document
      .querySelector("#items")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  } else {
    console.log(err);
  }
});

const About = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
 

      <section id='about' onhashchange='su' class='glow col-md-10 col-12 offset-md-1'>

      <div class="container-fluid  pb-5 mb-5">
              <h4 class="title-tag text-center blur-bg mt-2">About us</h4>
              <hr class='ultralight-border text-center w-25 higher' />

                <div class="row pb-2" style='transform: translate(45px)'>
                <p class='sub col-auto col-md-auto col-10 col-md-12 offset-1 offset-md-1 mb-2 pb-2 pt-2 text-center xlg-text font-weight-bold'><i class="fab fa-think-peaks xlg-text"></i><br/>
                Made by 'craftsmen', for crafstmen (including the website). <br/><em class='text-muted xsmall-text'>special thanks to <a href="https://github.com/managervcf">Mateusz Pyzowski</a>, <a href="https://twitter.com/codinhood">@codinhood</a> and <a href="https://css-tricks.com/author/mikaelainalem/">Mikael Ainalem</a> for being inspirations + their generous open-source code contribution.</em></p></div>


                <div class="row justify-content-center d-flex low-gutter">
                <div  data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o rounded-border">
                                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center '> <i class="fas fa-vials xlg-text pt-2"></i><br/><span class="font-weight-bold text-muted">As simple as ABC</span> <br/> <br/>Focused selection of products through rigorous research to inspire a simpler living. </p>
  </div>
                 <div  data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o rounded-border">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center '><i class="fas fa-vector-square xlg-text p-1"></i> <br/><span class="font-weight-bold">Design x Functionality</span> <br/> <br/>Curated for those who subscribe to minimal design while maintaining the best functionality in their homes. </p>
 </div>
 

 <div  data-aos="zoom-in" data-aos-offset="50" "data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o rounded-border">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center '> <i class="fas fa-people-arrows xlg-text pt-2"></i><br/><span class="font-weight-bold">One on One</span><br/> <br/> Personal experience for each customer. Any concern with the products you've purchased, please don't hesitate to <a href="/#/contact"> mail</a> us . </p></div>
</div>

 
</div>
</section>

 

    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {},
};
export default About;
