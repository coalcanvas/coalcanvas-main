const Modal = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `


    <button class='btn btn-sm isomorph-o d-block modal-button xsmall-text'><i class="fas fa-folder-open"></i> <br/>Conversion path</button></div>


<button class='btn btn-sm isomorph-o d-block modal-button-2 xsmall-text'>   <a href='/#/about'> <i class="fas fa-folder-open"></i> <br/> ideaboard</a></button>

        <div  class="modal blur-bg">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src='https://raw.githubusercontent.com/coalcanvas/amnet-ph/master/styles/gallery/CP_PZH_POGRAMMATIC.PNG?token=AFFJRDLQUWBFBQDZ5WXIN33AUD26U' width='100%' height='100%'/>
        </div>
    </div>
 

    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    const button = document.querySelector(".modal-button");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");

    function openModel() {
      modal.classList.add("show-modal");
    }
    button.addEventListener("click", openModel);

    function closeModal() {
      modal.classList.remove("show-modal");
    }
    close.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show-modal");
    });

    window.addEventListener("keydown", (e) => {
      const checkClass = document.querySelector(".show-modal");
      if (e.keyCode === 13 && checkClass) {
        modal.classList.remove("show-modal");
        e.preventDefault();
      }
    });
  },
};

export default Modal;
