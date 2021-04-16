const Home = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <section class='opening'>



         <div class="menu-wrapper col md-12 offset-md-2 col-12 offset-1 text-left">
        <div class="greeting">Welcome back!</div>
        <div class="tagline">Here's your topics for today</div>
        <div class="topics pb-2">
            <div class="topic">
                <div class="topic-bg">
                    <div class="topic-title">
                        <span class="topic-color topic-color1"></span>Javascript
                    </div>
                    <div class="topic-count">5 articles</div>
                    <div class="articles">
                        <div class="article article1">The spread operator</div>
                        <div class="article article1">Demystifying scopes</div>
                        <div class="article article1">JS or TS?</div>
                        <div class="article article1">ES2030, what's new</div>
                        <div class="article article1">NaN === NaN // false</div>
                    </div>
                </div>
            </div>
            <div class="topic">
                <div class="topic-bg"></div>
                <div class="topic-title">
                    <span class="topic-color topic-color2"></span>CSS
                </div>
                <div class="topic-count">4 articles</div>
                <div class="articles">
                    <div class="article article2">The wonders of CSS</div>
                    <div class="article article2">How to clamp</div>
                    <div class="article article2">Centring objects</div>
                    <div class="article article2">CSS arts</div>
                </div>
            </div>
        </div>
        <div class="topics">
            <div class="topic">
                <div class="topic-bg"></div>
                <div class="topic-title">
                    <span class="topic-color topic-color3"></span>Misc
                </div>
                <div class="topic-count">3 articles</div>
                <div class="articles">
                    <div class="article article3">Imposter syndrome</div>
                    <div class="article article3">Poster syndrome</div>
                    <div class="article article3">Post office syndrome</div>
                </div>
            </div>
            <div class="topic">
                <div class="topic-bg"></div>
                <div class="topic-title">
                    <span class="topic-color topic-color4"></span>ReactJS
                </div>
                <div class="topic-count">6 articles</div>
                <div class="articles">
                    <div class="article article4">React router in 5 min</div>
                    <div class="article article4">Memoization in React</div>
                    <div class="article article4">CSS-in-JS</div>
                    <div class="article article4">5 brilliant hooks</div>
                    <div class="article article4">JSX in depth</div>
                    <div class="article article4">React Context vs Redux</div>
                </div>
            </div>
        </div>
        <div class="below-the-fold">
            <hr class="divider" />
            <div class="profile">Your profile</div>
            <div class="option">• your subscription</div>
            <div class="option">• settings</div>
            <div class="option">• stats</div>
            <div class="footer">
                <div class="magazine">Tech stories™️</div>
                <div class="copyright">© 1970-2021</div>
            </div>
        </div>
    </div>


              <div class="showreel row d-flex">
              <div class="collie">
              <img src="../../styles/images/swimming-upstream-logo.PNG" alt="" style="width:100%"/> 
              </div>
                            <div class="collie">
              <img src="../../styles/images/swimming-upstream-logo.PNG" alt="" style="width:100%"/> 
              </div>
                            <div class="collie">
              <img src="../../styles/images/swimming-upstream-logo.PNG" alt="" style="width:100%"/> 
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
    const btf = document.querySelector(".below-the-fold");
    const menuWrapper = document.querySelector(".menu-wrapper");
    let active = 0;
    let interactive = 0;
    const topics = Array.from(document.querySelectorAll(".topic"));
    const topicsBg = Array.from(document.querySelectorAll(".topic-bg"));
    const articles = Array.from(document.querySelectorAll(".articles"));
    const articleElements = articles.map((as) =>
      Array.from(as.querySelectorAll(".article"))
    );
    const interactiveEnable = (index) => {
      interactive = index;
    };
    topics.forEach((topic, index) => {
      topic.addEventListener("mousedown", () => interactiveEnable(index));
      topic.addEventListener("mouseover", () => interactiveEnable(index));
      topic.addEventListener("touchstart", () => interactiveEnable(index));
    });
    const activate = () => {
      if (interactive >= 0) {
        active = interactive;

        btf.className = "below-the-fold";
        btf.classList.add(`extra-margin${active}`);
      }
    };
    menuWrapper.addEventListener("scroll", function (e) {
      let y = e.target.scrollTop;
      console.dir(y);

      // Activation
      if (y < 40) {
        activate();
      }
      if (y > 200) y = 200;

      articles.forEach((article, index) => {
        if (index === active) {
          // articles[index].style.opacity = `${y / 200}`;
          articleElements[index].forEach((a, index) => {
            let offset = y - index * 25;
            if (offset < 0) offset = 0;
            a.style.opacity = `${offset / (200 - index * 25)}`;
          });
        } else {
          articleElements[index].forEach((a, index) => {
            a.style.opacity = 0;
          });
        }
      });

      if (active === 0) {
        topics.forEach((topic, index) => {
          if (index === active) {
            topic.style.transform = `scale(${1 + y / 200}) translateX(${
              y / 5.6
            }px) translateY(${y / 3.18}px)`;
            topic.style.zIndex = 1;
          } else {
            topic.style.transform = `scale(${1 - y / 200})`;
            topic.style.zIndex = 0;
          }
        });
        topicsBg.forEach((topicBg, index) => {
          if (index === active) {
            topicBg.style.transform = `scaleY(${1.25 + (0.125 * y) / 200})`;
          }
        });
      }
      if (active === 1) {
        if (y > 200) y = 200;
        topics.forEach((topic, index) => {
          if (index === active) {
            topic.style.transform = `scale(${1 + y / 200}) translateX(${
              -y / 5.9
            }px) translateY(${y / 3.18}px)`;
            topic.style.zIndex = 1;
          } else {
            topic.style.transform = `scale(${1 - y / 200})`;
            topic.style.zIndex = 0;
          }
        });
        topicsBg.forEach((topicBg, index) => {
          if (index === active) {
            topicBg.style.transform = `scaleY(${1.25 + (0.0125 * y) / 200})`;
          }
        });
      }
      if (active === 2) {
        topics.forEach((topic, index) => {
          if (index === active) {
            topic.style.transform = `scale(${1 + y / 200}) translateX(${
              y / 5.6
            }px) translateY(${y / 18}px)`;
            topic.style.zIndex = 1;
          } else {
            topic.style.transform = `scale(${1 - y / 200})`;
            topic.style.zIndex = 0;
          }
        });
        topicsBg.forEach((topicBg, index) => {
          if (index === active) {
            topicBg.style.transform = `scaleY(${1.25 - (0.1 * y) / 200})`;
          }
        });
      }
      if (active === 3) {
        topics.forEach((topic, index) => {
          if (index === active) {
            topic.style.transform = `scale(${1 + y / 200}) translateX(${
              -y / 5.9
            }px) translateY(${y / 18}px)`;
            topic.style.zIndex = 1;
          } else {
            topic.style.transform = `scale(${1 - y / 200})`;
            topic.style.zIndex = 0;
          }
        });
        topicsBg.forEach((topicBg, index) => {
          if (index === active) {
            topicBg.style.transform = `scaleY(${1.25 + (0.2375 * y) / 200})`;
          }
        });
      }
    });
  },
};
export default Home;
