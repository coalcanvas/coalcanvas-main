const Drawer = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `
 <section class="drawer" id="drawer-name" data-drawer-target>
    <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
    <div class="drawer__wrapper">
      <div class="drawer__header">
        <div class="drawer__title">
          Header Title
        </div>
        <button class="drawer__close" data-drawer-close aria-label="Close Drawer"></button>
      </div>
      <div class="drawer__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in aliquid nulla, sed veritatis, officiis ea aut
          natus quas voluptates perferendis ratione modi ab qui omnis cum labore alias eos.
        </p>
        <div style="padding: 100px 0;"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0;"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0;"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
        <div style="padding: 100px 0;"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut exercitationem laborum vero tenetur
          officiis facilis eveniet sunt quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor et
          necessitatibus.
        </p>
      </div>
    </div>
  </section> 
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {},
};

export default Drawer;
