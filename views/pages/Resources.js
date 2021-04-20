/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `../../database.json`;
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

const Resources = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get items data.
    const resources = await getItems();
    console.log(resources.product[0]);
    // Map over items and build card components.
    const resourceList = resources
      .map(
        ({ title, description, images, price, slug, quantity }) => /*html*/ `
        <div class="container-fluid col-lg-3 col-md-4 col-sm-6 col-auto col-md-auto">
          <div class="card simpleCart_shelfItem mb-3" style="width: 13rem;">
            <a href="/#/resources/${slug}">
              <img src=${images[0].url} class="card-img-top" alt=${slug}>
            </a>
            <div class="card-body">
              <h5 class="card-title item_name font-weight-bold">${title}</h5>
              <h5 class="card-title">$ ${price.toFixed(2)}</h5>
              <a class="item_add"  data-drawer-trigger aria-controls="drawer-name" aria-expanded="false" href="javascript:;"> Add to Cart </a>
            </div>
          </div>
        </div>
      `
      )
      .join("\n");
    return /*html*/ `
<section id='items' class="pb-5 mb-5">
      <div class="container-fluid">
        <h4 class="title-tag text-center">Catalog</h4>
        <hr class='ultralight-border text-center w-25 higher' />
 <div class="showreel">
        <div class="row m-5 ">
          ${resourceList}
        </div>
        </div>

      </div>  </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    //Set slide time interval:
    // const slidetime = 3500;
    // //https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer
    // class Timer {
    //   constructor(fn, t) {
    //     var timerObj = setInterval(fn, t);
    //     this.stop = function () {
    //       if (timerObj) {
    //         clearInterval(timerObj);
    //         timerObj = null;
    //       }
    //       return this;
    //     };
    //     // start timer using current settings (if it's not already running)
    //     this.start = function () {
    //       if (!timerObj) {
    //         this.stop();
    //         timerObj = setInterval(fn, t);
    //       }
    //       return this;
    //     };
    //     // start with new interval, stop current interval
    //     this.reset = function (newT) {
    //       t = newT;
    //       return this.stop().start();
    //     };
    //   }
    // }
    // const timer = new Timer(function () {
    //   nextSlide();
    // }, slidetime);
    // //Button Next Slide
    // function nextSlide() {
    //   var active = document.querySelectorAll("li.active")[0],
    //     activeslide = document.querySelectorAll(".slides div.active")[0],
    //     number = active.dataset.link.split("-", 2)[1],
    //     length = document.querySelectorAll(".slide-controller li").length;
    //   active.class = active.class.replace("active", "");
    //   activeslide.class = activeslide.class.replace("active", "");
    //   if (number < length) {
    //     active.nextElementSibling.class += " active";
    //     activeslide.nextElementSibling.class += " active";
    //   } else {
    //     document.querySelectorAll(".slide-controller li")[0].class += " active";
    //     document.getElementById("slide-1").class += " active";
    //   }
    //   timer.reset(slidetime);
    // }
    // const button_next = document.querySelectorAll(".arrow-button-right")[0];
    // button_next.addEventListener("click", nextSlide);
    // //Button Previous Slide
    // function previousSlide() {
    //   var active = document.querySelectorAll("li.active")[0],
    //     activeslide = document.querySelectorAll(".slides div.active")[0],
    //     number = active.dataset.link.split("-", 2)[1],
    //     length = document.querySelectorAll(".slide-controller li").length;
    //   active.class = active.class.replace("active", "");
    //   activeslide.class = activeslide.class.replace("active", "");
    //   if (number > length) {
    //     active.previousElementSibling.class += " active";
    //     activeslide.previousElementSibling.class += " active";
    //   } else {
    //     document.querySelectorAll(".slide-controller li")[0].class += " active";
    //     document.getElementById("slide-1").class += " active";
    //   }
    //   timer.reset(slidetime);
    // }
    // const button_previous = document.querySelectorAll(".arrow-button-left")[0];
    // button_previous.addEventListener("click", previousSlide);
    // // Slide Circle Indicators
    // clicks = document.querySelectorAll(".slide-controller li");
    // for (each of clicks) {
    //   each.addEventListener("click", (e) => {
    //     var el = e.target,
    //       active = document.querySelectorAll(".active");
    //     for (each of active) {
    //       each.class = each.class.replace("active", "");
    //     }
    //     el.class += " active";
    //     document.getElementById(el.dataset.link).class += " active";
    //     timer.reset(slidetime);
    //   });
    // }
  },
};

export default Resources;
