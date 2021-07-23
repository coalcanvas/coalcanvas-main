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
     <section id='home' class='glow col-md-10 col-12 offset-md-1 '>
                       <h4 class="title-tag text-center mt-2">welcome </h4>
              <hr class='ultralight-border text-center w-25 higher' />
        <h3 class="sub text-center mb-3 card">Tap on <span class='font-weight-bold'>coalcanvas</span> to begin.
        </h3>

    <div class="container-fluid move-lower">
<video id="bg" autoplay muted loop playsinline>
      <source
        src="../../styles/gallery/pressmasterpexel.mp4"
        type="video/mp4"
      />
      Background by Pressmaster from Pexels
    </video>
 

  </div>      </section>
  <section class='placard text-center'>     
  
  <h3 class='small-text' data-aos="flip-up" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-offset="-500" data-aos-anchor-placement="top-bottom" > Welcome to coalcanvas! You will find all the services we offer on the conveyor at the footer of this page.
  <br/> <br/>
  Meanwhile, if you'd like a FREE digital consultation, please don't hesitate to reach out to me by following your ideal communications channel by tapping on the respective buttons below:</h3>
  
  </section>
  <div class="demo-content" id='gridbox' data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
    <div class="grid">
      <div class="small circle el" style="transform: translateX(-65px) translateY(-20px) rotateZ(-90deg);"></div>
      <div class="small circle el" style="transform: translateX(-55px) translateY(-20px) rotateZ(-76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(-45px) translateY(-20px) rotateZ(-62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(-35px) translateY(-20px) rotateZ(-48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(-25px) translateY(-20px) rotateZ(-34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(-15px) translateY(-20px) rotateZ(-20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(-5px) translateY(-20px) rotateZ(-6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(5px) translateY(-20px) rotateZ(6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(15px) translateY(-20px) rotateZ(20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(25px) translateY(-20px) rotateZ(34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(35px) translateY(-20px) rotateZ(48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(45px) translateY(-20px) rotateZ(62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(55px) translateY(-20px) rotateZ(76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(65px) translateY(-20px) rotateZ(90deg);"></div>
      <div class="small circle el" style="transform: translateX(-65px) translateY(-10px) rotateZ(-90deg);"></div>
      <div class="small circle el" style="transform: translateX(-55px) translateY(-10px) rotateZ(-76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(-45px) translateY(-10px) rotateZ(-62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(-35px) translateY(-10px) rotateZ(-48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(-25px) translateY(-10px) rotateZ(-34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(-15px) translateY(-10px) rotateZ(-20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(-5px) translateY(-10px) rotateZ(-6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(5px) translateY(-10px) rotateZ(6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(15px) translateY(-10px) rotateZ(20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(25px) translateY(-10px) rotateZ(34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(35px) translateY(-10px) rotateZ(48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(45px) translateY(-10px) rotateZ(62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(55px) translateY(-10px) rotateZ(76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(65px) translateY(-10px) rotateZ(90deg);"></div>
      <div class="small circle el" style="transform: translateX(-65px) translateY(0px) rotateZ(-90deg);"></div>
      <div class="small circle el" style="transform: translateX(-55px) translateY(0px) rotateZ(-76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(-45px) translateY(0px) rotateZ(-62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(-35px) translateY(0px) rotateZ(-48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(-25px) translateY(0px) rotateZ(-34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(-15px) translateY(0px) rotateZ(-20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(-5px) translateY(0px) rotateZ(-6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(5px) translateY(0px) rotateZ(6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(15px) translateY(0px) rotateZ(20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(25px) translateY(0px) rotateZ(34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(35px) translateY(0px) rotateZ(48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(45px) translateY(0px) rotateZ(62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(55px) translateY(0px) rotateZ(76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(65px) translateY(0px) rotateZ(90deg);"></div>
      <div class="small circle el" style="transform: translateX(-65px) translateY(10px) rotateZ(-90deg);"></div>
      <div class="small circle el" style="transform: translateX(-55px) translateY(10px) rotateZ(-76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(-45px) translateY(10px) rotateZ(-62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(-35px) translateY(10px) rotateZ(-48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(-25px) translateY(10px) rotateZ(-34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(-15px) translateY(10px) rotateZ(-20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(-5px) translateY(10px) rotateZ(-6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(5px) translateY(10px) rotateZ(6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(15px) translateY(10px) rotateZ(20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(25px) translateY(10px) rotateZ(34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(35px) translateY(10px) rotateZ(48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(45px) translateY(10px) rotateZ(62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(55px) translateY(10px) rotateZ(76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(65px) translateY(10px) rotateZ(90deg);"></div>
      <div class="small circle el" style="transform: translateX(-65px) translateY(20px) rotateZ(-90deg);"></div>
      <div class="small circle el" style="transform: translateX(-55px) translateY(20px) rotateZ(-76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(-45px) translateY(20px) rotateZ(-62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(-35px) translateY(20px) rotateZ(-48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(-25px) translateY(20px) rotateZ(-34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(-15px) translateY(20px) rotateZ(-20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(-5px) translateY(20px) rotateZ(-6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(5px) translateY(20px) rotateZ(6.92308deg);"></div>
      <div class="small circle el" style="transform: translateX(15px) translateY(20px) rotateZ(20.7692deg);"></div>
      <div class="small circle el" style="transform: translateX(25px) translateY(20px) rotateZ(34.6154deg);"></div>
      <div class="small circle el" style="transform: translateX(35px) translateY(20px) rotateZ(48.4615deg);"></div>
      <div class="small circle el" style="transform: translateX(45px) translateY(20px) rotateZ(62.3077deg);"></div>
      <div class="small circle el" style="transform: translateX(55px) translateY(20px) rotateZ(76.1538deg);"></div>
      <div class="small circle el" style="transform: translateX(65px) translateY(20px) rotateZ(90deg);"></div>
    </div>
    <div class="grid shadow">
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
      <div class="small circle"></div>
    </div>
  </div>
<div class='connect-block col-auto col-10 col-mx-auto col-md-10 icon-wrap'>
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

    const onMouseUpdate = (e) => {
      let width = el.offsetWidth;
      let XRel = e.pageX - el.offsetLeft;
      let YRel = e.pageY - el.offsetTop;
      //adjust angles
      let YAngle = (9.5 - XRel / width) * 80;
      let XAngle = -(0.5 - YRel / width) * 5;

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

    const gbox = document.getElementById("gridbox");
    const circle = Array.from(document.querySelectorAll(".circle"));
    anime({
      targets: [gbox, circle],
      direction: "alternate",
      loop: true,
      borderRadius: ["50%", "0%"],
      translateX: anime.stagger(100, {
        grid: [14, 0],
        from: "center",
        axis: "x",
      }),
      translateY: anime.stagger(10, {
        grid: [14, 0],
        from: "center",
        axis: "y",
      }),
      rotateZ: anime.stagger([0, 0], {
        grid: [14, 0],
        from: "center",
        axis: "x",
      }),
      delay: anime.stagger(400, { grid: [14, 0], from: "center" }),
      easing: "cubicBezier(0.175, 0.885, 0.32, 1.475)",
    });
  },
};

export default Home;
