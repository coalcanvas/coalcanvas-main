const Switch = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `
<div class="button-wrapper">
<svg id='switch' xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" width="77" height="110" viewBox="0 0 77 110">
  <defs>
    <filter id="Rectangle_2" x="0" y="0" width="77" height="100" filterUnits="userSpaceOnUse">
      <feOffset id='flip' dy='-8' input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Component_4_1" data-name="Component 4 – 1" transform="translate(2 7)">
    <g id="Rectangle_1" data-name="Rectangle 1" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="74" height="103" rx="27" stroke="none"/>
      <rect x="0.5" y="0.5" width="73" height="102" rx="26.5" fill="none"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, -2, -7)" filter="url(#Rectangle_2)">
      <g id="Rectangle_2-2" data-name="Rectangle 2" transform="translate(9 17)" fill="#fff" stroke="#707070" stroke-width="2">
        <rect width="59" height="82" rx="27" stroke="none"/>
        <rect x="1" y="1" width="57" height="80" rx="26" fill="none"/>
      </g>
    </g>
  </g>
</svg>
<label class='flipper text-muted xlg-text'>ON</label>
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
        elemT.textContent = `OFF`;
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      } else {
        elemT.textContent = `ON`;
        elem.setAttribute("dy", "-8");
        window.scroll({ top: 2500, left: 0, behavior: "smooth" });
        // window.scrollTo(0, document.body.scrollHeight); // For Safari
        // window.scrollTo(0, document.documentElement.scrollHeight); // For Chrome, Firefox, IE and Opera
      }
    });

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
  },
};

export default Switch;
