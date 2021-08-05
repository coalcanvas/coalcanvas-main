const Modal = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `


  <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container  blur-bg" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <div class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            search site:

            <div class="mv5 d-flex dib "> <button class="f6 white nature-2 isomorph-o blur-bg" role="button"><img class='search-icon' src='../../styles/gallery/noun_Search_71767.svg' /> search </button> </div>
          </h2>
 
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </div>
        <div class="modal__content" id="modal-1-content">

        </div>
        <footer class="modal__footer">
          <button class="modal__btn modal__btn-primary">Continue</button>
          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        </footer>
      </div>
    </div>
  </div> 
  
  <div class='container-fluid d-flex flex-end' >
    <div class="nav-icon"  id="nav-icon" data-custom-open='modal-1'>
 
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
 </div>
 </div>

    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    const navButton = document.getElementById("nav-icon");
    const closeMd = document.querySelector(".modal__close");
    MicroModal.init({
      onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
      onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
      openTrigger: "data-custom-open", // [3]
      closeTrigger: "data-micromodal-close", // [4]
      openClass: "is-open", // [5]
      disableScroll: true, // [6]
      disableFocus: true, // [7]
      awaitOpenAnimation: false, // [8]
      awaitCloseAnimation: false, // [9]
      debugMode: true, // [10]
    });

    navButton.addEventListener("click", () => {
      if (navButton.classList.contains("closed")) {
        navButton.classList.remove("closed");
        navButton.classList.add("ham");
        navButton.style.zIndex = 2;
      } else if (
        !navButton.classList.contains("closed") ||
        navButton.classList.contains("ham")
      ) {
        navButton.classList.remove("ham");
        navButton.classList.add("closed");
        navButton.style.zIndex = 999;
      }
    });
  },
};

export default Modal;
