/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */

const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `https://raw.githubusercontent.com/coalcanvas/coalcanvas.github.io/gh-pages/db.json`; //http://localhost:3000/config
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
               placeholder="insert username" value="" required/>
    </div>
    <div class="form-group">
        <label for="email" class='small-text'>*e-mail</label>
        <input type="text" class="form-control shorter xsmall-text text-muted" id="email" name="email"
               placeholder="insert email" value="" required>
    </div>
     <div class="form-group">
        <label for="password" class='small-text'>Password</label>
        <input type="password" class="form-control shorter xsmall-text text-muted" id="current-password" name="currentPassword" 
          placeholder="*for exclusive member profiles">
    </div>
        <div class="form-group">
        <label for="password" class='small-text'>Confirm password</label>
        <input type="password" class="form-control shorter xsmall-text text-muted" id="password" name="password"
          placeholder="confirm your password">
    </div>

        <textarea type='text' class='w-75 xsmall-text text-muted' placeholder='*your message here...' name="message" id="message" form="contact-form" required></textarea> 
            <small class="form-text text-muted xsmall-text">
           *required fields. <br/>
           our e-mail service provider: <br/>
                   <img class='p-1' src='https://image.flaticon.com/icons/png/512/281/281769.png' width='auto' height='25px'/>
        </small>


        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" 
               id="newsletter" name="newsletter" checked >
        <label class="form-check-label xsmall-text" for="newsletter">
signup for newsletters/updates?</label> </div>

    <input id='btn'  type="submit" class="btn btn-sm isomorph-o nature d-flex offset-md-6 offset-5"></input>
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

    const config = await getItems();
    console.log(config);
    // select form els

    const myForm = document.querySelector("#contact-form");
    const output = document.querySelector(".prompter");
    // output.style.display = "none";
    const btn = document.querySelector("#btn");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const address = document.querySelector("address");
    const message = document.querySelector("#message");
    const newsletter = document.querySelector("#newsletter");
    const password = document.querySelector("#current-password");
    const confirm_password = document.querySelector("#password");
    const prefix = "https://script.google.com/macros/s/";
    const suffix = "/exec";
    const url = prefix + config.config[0].APPSCRIPT_DEPLOYMENT_ID + suffix;
    const headers = config.config[0].headers;
    console.log(url);
    // console.log(newsletter.value);

    // handlesubmit, mutation
    myForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ele = myForm.elements;
      // console.log(ele);
      // console.log("sending data...");
      //set initial state of objects
      const holder = {};
      const err = [];
      const suc = [];

      //set error notification functionality
      function notice() {
        err.forEach((error) => {
          //add error message into output div
          output.style.display = "block";
          output.innerHTML += error + "<br/>";
          output.style.borderRadius = "12px";
          output.style.transform = "translateY(0px)";
          output.style.transition =
            "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1";
          output.style.backgroundColor = "salmon";
        });
      }
      function noticeOut() {
        err.forEach(() => {
          output.style.display = "none";
          output.innerHTML = "";
          output.style.transform = "translateY(-20px)";
          output.style.transition =
            "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1";
          output.style.backgroundColor = "transparent";
        });
      }

      //set submit success notification
      function success() {
        suc.forEach((success) => {
          //add error message into output div
          output.style.display = "block";
          output.innerHTML += success + "<br/>";
          output.style.borderRadius = "12px";
          output.style.transform = "translateY(0px)";
          output.style.transition =
            "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1";
          output.style.backgroundColor = "chartreuse";
        });
      }
      function successOut() {
        suc.forEach(() => {
          output.style.display = "none";
          output.innerHTML = "";
          output.style.transform = "translateY(-20px)";
          output.style.transition =
            "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1";
          output.style.backgroundColor = "transparent";
        });
      }

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
        if (el.name == "") {
          val = false;
        }
        if (el.name == "password") {
          if (el.value != password.value) {
            val = false;
            err.push("passwords must match.");
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
        notice();
        setTimeout(function () {
          noticeOut();
        }, 1500);
      } else {
        // form submit
        console.log(holder);
        suc.push(
          "Form successfully submitted. We will get back to you soon via email."
        );
        fetch(
          url,
          // headers,
          // { mode: "no-cors" },
          {
            method: "POST",
            body: JSON.stringify(holder),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            success();
            setTimeout(function () {
              successOut();
              clearForm();
            }, 1500);
          });
      }
    });

    //execute notification

    //clear form
    function clearForm() {
      const ele = myForm.elements;
      output.style.display = "none";
      output.innerHTML = "";
      for (let i = 0; i < ele.length; i++) {
        if (ele[i].getAttribute("type") != "submit") {
          ele[i].value = "";
        }
      }
    }
    //toggle newsletter value
    function toggleNl(e) {
      const newsletter = e.target;

      if (newsletter.checked === true) {
        newsletter.checked === false;
        newsletter.value = "on";
      }
      if (newsletter.value === "") {
        newsletter.value = "on";
      } else if (newsletter.checked === false) {
        newsletter.checked === true;
        newsletter.value = "off";
      }
      // console.log("cick", e.target.value);
    }

    newsletter.addEventListener("click", toggleNl);
    function validateEmail(email) {
      //regular expression
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    // initiate create/put request
  },
};
export default Contact;
