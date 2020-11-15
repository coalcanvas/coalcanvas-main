//Open Drawer Button Transition
class ButtonToggle {
    constructor(element) {
      this.element = element;
  
      this.element.addEventListener("click", () => this.select());
    }
    select() {
      // '\10761' Octal Literal
      // https://unicode-table.com/en/2A09/
      const close = String.fromCharCode(10761);
      console.log(close);
      const open = String.fromCharCode(9776);
      let currentState = this.element.innerHTML;
  
      console.log(currentState.charCodeAt(0));
  
      String.fromCharCode(currentState);
  
      if (currentState == open) {
        this.element.innerHTML = close;
      } else {
        this.element.innerHTML = open;
      }
    }
  }
  
  const sideNavBtn = document.querySelector(".open-sidenav-btn");
  new ButtonToggle(sideNavBtn);
  
  // Open Drawer Expand Function
  class DrawerExpand {
    constructor(element) {
      this.element = element;
      this.innerContainer = this.element.querySelector(".nav-wrapper");
      this.activateBtn = document.querySelector(".open-sidenav-btn");
      this.showing = false;
      this.activateBtn.addEventListener("click", () => this.open());
    }
    open() {
      this.showing = !this.showing;
      var e = this.element;
      //the browser won't report current width values properly if the element isn't displayed!
      e.classList.add("show");
      if (this.showing) {
        this.innerContainer.style.width = "auto";
        TweenMax.from(this.innerContainer, 1, { width: 0 });
      } else {
        TweenMax.to(this.innerContainer, 1, { width:0, onComplete:function() {
          e.classList.remove("show");
        }});
      }
    }
  }
  
  const sideMenu = document.querySelector(".side-nav-market");
  new DrawerExpand(sideMenu);