const Switch = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `

<div id='switch'  class='button-wrapper '>

<div class='flipper text-muted small-text'><img class='top-icon isomorph-o ' src='../../styles/gallery/scroll-top.svg' /></div>
 
      <feOffset id='flip' dy='-8' input="SourceAlpha"/>
 
 </div>            
 
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    var btn = document.querySelector("#switch");

    btn.addEventListener("click", function () {
      var elem = document.querySelector("#flip");
      var elemT = document.querySelector(".flipper");
      if (elem.getAttribute("dy") === "-8") {
        elem.getAttribute("dy", "-8");
        elem.setAttribute("dy", "11");
        elemT.style.transform = "rotate(180deg)";

        window.scroll({ top: 9999, left: 0, behavior: "smooth" });
        // window.scrollTo(0, document.body.scrollHeight); // For Safari
        // window.scrollTo(0, document.documentElement.scrollHeight); // For Chrome, Firefox, IE and Opera
      } else if (elem.getAttribute("dy") === "11") {
        elem.getAttribute("dy", "11");

        elem.setAttribute("dy", "-8");
        elemT.style.transform = "rotate(360deg)";

        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        //  document.body.scrollTop = 0; // For Safari
        //  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    });
  },
};

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// }

export default Switch;
