/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `http://localhost:3000/config`;
    // Create options for the fetch function.
    const options = { cache: "no-cache" };
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
const Contact = {
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
         <div class="prompter"></div>

<form id='contact-form' >
    <div class="form-group">
        <label for="username" class='small-text'>Username</label>
        <input type="text" class="form-control shorter xsmall-text text-muted" id="username" name="username" autofocus 
               placeholder="how may we address you?" value="" required/>
    </div>
    <div class="form-group">
        <label for="email" class='small-text'>*e-mail</label>
        <input type="text" class="form-control shorter xsmall-text text-muted" id="email" name="email"
               placeholder="email address" value="" required>
    </div>
        <div class="form-group">
        <label for="address" class='small-text'>Home address</label>
        <input type="address" class="form-control shorter xsmall-text text-muted" id="address" name="address"
               placeholder="home address" value="" >
    </div>
     <div class="form-group">
        <label for="password" class='small-text'>Password</label>
        <input type="current-password" class="form-control shorter xsmall-text text-muted" id="current-password" name="current-password" 
          placeholder="insert your password to auto-create account">
    </div>
        <div class="form-group">
        <label for="password" class='small-text'>Confirm password</label>
        <input type="text" class="form-control shorter xsmall-text text-muted" id="password" name="password"
          placeholder="confirm your password">
    </div>

    <div class="form-group range-wrap small-text">
        <label for="age" class='small-text'>Age <span class='xsmall-text text-black font-italic'>so that we may better address you.</span></label>
        <input type="range" class="form-control-range range" id="age" name="age" min="13" max="100">
        <output class="age-bubble" />
    </div>
        <textarea type='text' class='xsmall-text text-muted' placeholder='*your message here...' name="message" id="message" form="contact-form" required></textarea> 
            <small class="form-text text-muted xsmall-text">
           *required fields. <br/>
           our e-mail service provider: <br/>
                   <img class='p-1' src='https://sendgrid.com/brand/sg-twilio/SG_Twilio_Lockup_RGBx1.png' width='auto' height='25px'/>
        </small>


        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" 
               id="newsletter" name="newsletter" checked value='checked'>
        <label class="form-check-label xsmall-text" for="newsletter">
signup for newsletters/updates?</label> </div>

    <input id='btn'  type="submit" class="btn btn-sm isomorph-o pearl d-flex offset-md-6 offset-5"></input>
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
      const bubble = wrap.querySelector(".age-bubble");

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
    const config = await getItems();
    console.log(config);
    // select form els

    const myForm = document.querySelector("#contact-form");
    const output = document.querySelector(".prompter");
    // output.style.display = "none";
    const btn = document.querySelector("#btn");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const message = document.querySelector("#message");
    const newsletter = document.querySelector("#newsletter");
    const password = document.querySelector("#current-password");
    const confirm_password = document.querySelector("#password");
    const url = config[0].APPSCRIPT_WEB_URL;
    console.log(url);
    // GET request

    // handlesubmit, mutation
    myForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ele = myForm.elements;
      // console.log(ele);
      // console.log("sending data...");
      const holder = {};
      const err = [];
      // interate through el in form
      for (let i = 0; i < ele.length; i++) {
        // console.log(ele[i]);
        const el = ele[i];
        //validator
        let val = true;
        if (el.getAttribute("type") == "submit") {
          val = false;
          // console.log(el.name);
          // console.log(el.value);
        }
        //form validator
        if (el.name == "username") {
          if (el.value.length < 6) {
            val = false;
            err.push("username must be at least 6 characters");
          }
        }
        if (el.name == "newsletter") {
          if (!el.checked) {
            val = false;
          } else {
            val = true;
          }
        }
        //check conditions
        if (el.name == "email") {
          let check = validateEmail(el.value);

          if (!check) {
            val = false;
            err.push("email is not valid");
          }
        }
        if (val) {
          holder[el.name] = el.value;
        }
      }
      if (err.length > 0) {
        output.innerHTML = "";
        err.forEach((error) => {
          //add error message into output div
          output.innerHTML += error + "<br/>";
          output.style.borderRadius = "12px";
          output.style.transform = "translateY(0px)";
          output.style.transition =
            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          output.style.backgroundColor = "salmon";
        });
      } else {
        // form submit
        console.log(holder);
        fetch(url, {
          method: "POST",
          body: JSON.stringify(holder),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    });

    newsletter.addEventListener("click", function toggleNl(e) {
      e.preventDefault();
      const newsletter = e.target;
      if (newsletter.hasAttribute("checked") === true) {
        newsletter.setAttribute("checked", false);
        newsletter.value = "unchecked";
      } else {
        newsletter.setAttribute("checked", true);
        newsletter.value = "checked";
      }
    });
    function validateEmail(email) {
      //regular expression
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    // initiate create/put request
  },
};
export default Contact;
