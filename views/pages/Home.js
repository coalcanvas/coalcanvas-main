let index = [];
let i;
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let a = `${(1 - Math.random() * (1 - 0.65)).toFixed(2)}`;

const Home = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `

     <section id='home' class='glow col-md-12 col-12 offset-md-1 '>
                       <h4 class="title-tag text-center mt-2">welcome </h4>
              <hr class='ultralight-border text-center w-25 higher' />
        <h3 class="sub text-center mb-3 card animate-flicker">expand <span class=' font-weight-bold'> ▼</span>
      
        </h3>

 </section>
  <section class='placard text-center'>     
      <div class="container-fluid ">   
<video id="bg" autoplay muted loop playsinline>
      <source
        src="../../styles/gallery/pexels-mikhail-nilov-8059676.mp4"
        type="video/mp4"
      />
      Background by Mikhail Nilov from Pexels
    </video>


  </div>     
<h3 class='small-text mobile-placard' data-aos="flip-up" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-offset="-500" data-aos-anchor-placement="top-bottom" > Welcome to coalcanvas! You will find all the services we offer on the conveyor at the footer of this page.
  <br/> <br/>
  Meanwhile, if you'd like a FREE digital consultation, please don't hesitate to reach out to me by following your ideal communications channel by tapping on the respective buttons below:</h3>
  
  </section>
<div class='connect-block col-auto col-10 col-mx-auto col-md-10 icon-wrap' data-aos="flip-up" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-offset="-500" data-aos-anchor-placement="top-bottom" >
<div class='row justify-content-md-between  justify-content-between d-flex flex-wrap align-items-center'>
<div class="connect-icon text-center" id="connect-icon">
<a href='https://calendly.com/ansb1987'>
  <img src='../../styles/gallery/calendly.svg' class='calendly'> <br/><label class='xsmall-text'>schedule consultation</label></img></a></div>

  <div class="connect-icon connect-icon-2 text-center" id="connect-icon">
<a href='https://instagram.com/aaam3eee'>
  <img src='../../styles/gallery/icons8-instagram.gif' class='instagram'> <br/><label class='small-text'>dm☝🏼 </label></img></a></div>

  <div class="connect-icon connect-icon-3 text-center" id="connect-icon">
<a href='https://www.linkedin.com/in/amy-ngsb'>
  <img src='../../styles/gallery/linkedin-3-xxl.png' class='linkedin'> <br/><label class='small-text'>dm☝🏼</label></img></a></div>

  <div class="connect-icon connect-icon-4 text-center" id="connect-icon">
<a href='/#/contact'>
  <img src='../../styles/gallery/email.png' class='email'> <br/><label class='small-text'>dm☝🏼✉</label></img></a></div>
  
  </div>
  </div>

      
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    //perspective card
    const setProp = (el, prop, value) => el.style.setProperty(prop, value);

    const el = document.getElementById("connect-icon");
    const placard = document.querySelector;

    const onMouseUpdate = (e) => {
      let width = el.offsetWidth;
      let XRel = e.pageX - el.offsetLeft;
      let YRel = e.pageY - el.offsetTop;
      //adjust angles
      let YAngle = (0.1 - XRel / width) * 1;
      let XAngle = -(0.1 - YRel / width) * 1;

      setProp(el, "cursor", "pointer");
      setProp(el, "--dy", `${YAngle}deg`);
      setProp(el, "--dx", `${XAngle}deg`);
    };

    el.addEventListener("mousemove", onMouseUpdate, false);
    el.addEventListener("mouseenter", onMouseUpdate, false);
    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--dy", "0");
      el.style.setProperty("--dx", "0");
    });
  },
};

export default Home;
