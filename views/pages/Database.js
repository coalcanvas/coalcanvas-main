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

const Database = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
 

      <section id='database' class='col-md-10 col-12 offset-md-1'>

      <div class="container-fluid  pb-5 mb-5">
              <h4 class="title-tag text-center blur-bg mt-2">Database </h4>
              <hr class='ultralight-border text-center w-25 higher' />
                <div class="row pb-5">
                <p class='sub col-auto col-md-auto col-10 col-md-8 offset-1 offset-md-2 isomorph-o p-2 text-center font-weight-bold'><i class="fab fa-think-peaks xlg-text"></i><br/>
                Every sourced item in this shop is made by 'craftsmen', including the website, which is to be progressively and manually customized <br/><em class='grey-text'>special thanks to <a href="https://github.com/managervcf">Mateusz Pyzowski</a>, <a href="https://twitter.com/codinhood">@codinhood</a> and <a href="https://css-tricks.com/author/mikaelainalem/">Mikael Ainalem</a> for being inspirations + their generous open-source code contribution.</em></p></div>
               <div class="row justify-content-center d-flex low-gutter pt-2">
                <div  data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-i rounded-border">
                                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center black-text'> <i class="fas fa-vials xlg-text pt-2"></i><br/><span class="font-weight-bold">As simple as ABC</span> <br/>Focused selection of products through rigorous research to inspire a simpler living. </p>
  </div>
                 <div  data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-i rounded-border">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center black-text'><i class="fas fa-vector-square xlg-text p-1"></i> <br/><span class="font-weight-bold">Design x Functionality</span> <br/>Curated for those who subscribe to minimal design while maintaining the best functionality in their homes. </p>
 </div>
 <div  data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000" class="d-flex  col-md-3 col-6 offset-1 pb-2 isomorph-i rounded-border">
                <p class='col-md-8 col-md-auto offset-md-2 col-12 w-100 p-2 text-center black-text'> <i class="fas fa-people-arrows xlg-text pt-2"></i><br/><span class="font-weight-bold">One on One</span><br/> Personal experience for each customer. Any concern with the products you've purchased, please don't hesitate to <a href="/#/contact"> mail</a> us . </p></div>
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
export default Database;
