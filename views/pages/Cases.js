//scrollTop onhashchange

const url = "../database.json";
let data = "";

const localData = localStorage.getItem("temp2");

if (!localData) {
  myDb();
  console.log("saved to local storage");
} else {
  // console.log(localData);
  data = JSON.parse(localData);
  // console.log(data);
}

function myDb() {
  fetch(url)
    .then((res) => res.text())
    .then((json) => {
      data = JSON.parse(json);
      // console.log(json);
      let str = JSON.stringify(data);
      // console.log(str);
      localStorage.setItem("temp2", str);
    });
}

const CaseStudies = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
 

      <section id='cases' class='col-md-10 col-12 offset-md-1'>

      <div class="container-fluid  pb-5 mb-5">
              <h4 class="title-tag text-center mt-2">Cases 📚 </h4>
              <hr class='ultralight-border text-center w-25 higher' />
                <div class="row pb-5">
                <p class='sub col-auto col-md-auto col-10 col-md-8 offset-1 offset-md-2 isomorph-o p-2 text-center font-weight-bold'><i class="fab fa-think-peaks xlg-text"></i><br/>
                Use cases curated to inspire and trigger inspiration. <br /> <em class='text-muted xsmall-text'>this will be an archive of all the use cases arising from research, experimentation and other real-life projects to enable others on their own journey.</em></p></div>
               <div class="row justify-content-center d-flex low-gutter pt-2">
                <div id='cases_1' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex col-md-3 col-6 offset-1 pb-2 isomorph-o blur-bg rounded-border jdorsey">
                          <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center blur-bg-s'> <br/><span class="font-weight-bold">💻 + 🧪 ? </span> <br/>+ optimum invesment, + online devices. </p>
  </div>
                 <div id='cases_2' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o ">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center blur-bg-s'> <br/><span class="font-weight-bold">Design x Functionality</span> <br/>Create easthetically-pleasing designs with interactivity in mind. </p>
 </div>
 <div id='cases_3' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-o ">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center blur-bg-s'> <i class="fas fa-people-arrows xlg-text pt-2"></i><br/><span class="font-weight-bold">One on One</span><br/> Share your project with us? <a href="/#/contact"> Mail</a> . </p></div>
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
export default CaseStudies;
