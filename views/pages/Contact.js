/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */

const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `https://raw.githubusercontent.com/coalcanvas/database-schema/main/database/schemata.json`;
    // Create options for the fetch function.
    const options = { cache: "force-cache" };
    // Get a response from the API.
    const response = await fetch(apiUrl, options);
    // Parse response into JSON.
    const data = await response.json();
    // Print fetched data to the console.
    console.log("(App) Data fetched from API:", data);
    // Return fetched data.
    return data;
  } catch (error) {
    // Print catched error to the console.
    console.log("(App) Error occured while getting data.", error);
  }
};

// //scrollTop onhashchange
// const contactTop = async (e) => {
//   e.preventDefault();
//   document.addEventListener("DOMContentLoaded", () => {
//     try {
//       document.querySelector("#contact").scrollTo({ behavior: "smooth" });
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };

const Register = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
     <div id='contact' class="container-fluid pb-5">
      <section class=' col-md-10 col-12 offset-md-1 mt-2'>
        <h4 class="title-tag text-center blur-bg pt-2" data-aos-offset="50" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">Contact 📧</h4>
        <hr class='ultralight-border text-center w-25 higher' />

        <p class="sub text-center blur-bg mb-3">Fill in your details below, and we will get back to you <span class='font-weight-bold'>via email within 1-24 hours / one business day</span>.</p>
 
          <div class="box " data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <div class="col-auto col-md-auto col-12 col-md-10 offset-md-1 isomorph-o p-4">
<form id='contact-form' method="post" action="...">
    <div class="form-group">
        <label for="username" class='small-text'>Username</label>
        <input type="text" class="form-control shorter xsmall-text text-muted" id="username" autofocus 
               placeholder="how may we address you?" value="" />
    </div>
    <div class="form-group">
        <label for="email" class='small-text'>*e-mail</label>
        <input type="email" class="form-control shorter xsmall-text text-muted" id="email" 
               placeholder="e-mail address" value="">
    </div>
     <div class="form-group">
        <label for="password" class='small-text'>Password</label>
        <input type="password" class="form-control shorter xsmall-text text-muted" id="password" 
          placeholder="password">
    </div>
        <div class="form-group">
        <label for="password2" class='small-text'>Confirm password</label>
        <input type="password2" class="form-control shorter xsmall-text text-muted" id="password2" 
          placeholder="confirm your password">
    </div>

    <div class="form-group range-wrap small-text">
        <label for="age" class='small-text'>Age <span class='xsmall-text text-black font-italic'>so that we may better address you.</span></label>
        <input type="range" class="form-control-range range" id="age" min="13" max="100">
        <output class="bubble" />
    </div>
        <textarea class='xsmall-text text-muted' placeholder='comments go here...' name="comment" form="contact-form"></textarea> 
            <small class="form-text text-muted xsmall-text">
           *our e-mail service provider: <br/>
                   <img class='p-1' src='https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_RGBx1.png' width='auto' height='25px'/>
        </small>


        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" 
               id="newsletter" checked>
        <label class="form-check-label xsmall-text" for="newsletter">
signup for updates from us?</label> </div>

    <button type="button" class="btn btn-sm isomorph-o pearl d-flex offset-md-6 offset-5">Submit</button>
</form>
        </div>
    </div>
      </section></div>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    // form controller
    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach((wrap) => {
      const range = wrap.querySelector(".range");
      const bubble = wrap.querySelector(".bubble");

      range.addEventListener("input", () => {
        setBubble(range, bubble);
      });
      setBubble(range, bubble);
    });

    function setBubble(range, bubble) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      bubble.innerHTML = val;

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    // validate user against db

    // handlesubmit, mutation

    // initiate create/put request
  },
};
export default Register;

//         <video id='contact' controls playsinline>
//   <source src="../../styles/gallery/pexels-tima-miroshnichenko-5717601.mp4" type="video/mp4">

//   Your browser does not support the video tag.
// </video>
