// gsap.from(".logo", { duration: 2, opacity: 0, scale: 0.3, backgroundColor: "#fff", borderRadius: "10%", border: "2px solid none", ease: "back"}); 

// // gsap.to(".logo", { duration: 2, y: -600, backgroundColor: "#fff", borderRadius: "10%", border: "2px solid none", easeIn: "back"});


// gsap.set(".logo", {scale:0.7});

// gsap.timeline().from(".logo", {opacity:0})
//     .from("#title", {opacity:0, scale:0, ease:"back"})

const overflow = document.querySelector("#overflow");
const viewport = document.querySelector(".viewport");
const wrapper  = document.querySelector(".wrapper");
const boxes    = document.querySelector(".boxes");
const proxy    = document.createElement("div");

const numBoxes  = 10;  
const boxWidth  = 350;
const boxHeight = 250;  
const imgWidth  = boxWidth  - 6;
const imgHeight = boxHeight - 14;
const viewWidth = innerWidth;
const wrapWidth = numBoxes * boxWidth;
const wrapVal = gsap.utils.wrap(0, wrapWidth);

gsap.set([wrapper, viewport], { height: boxHeight, xPercent: -50 });
gsap.set(boxes, { left: -boxWidth });

for (let i = 1; i <= numBoxes; i++) {
  const src = "https://unsplash.it/" + imgWidth + "/" + imgHeight + "?random=" + i;
  const num = document.createElement("div");
  num.className = "num";
  num.innerText = i;
  
  const img = document.createElement("img");
  img.src = src;
  img.width = imgWidth;
  img.height = imgHeight;
  
  const box = document.createElement("div");
  box.className = "box";
  
  box.appendChild(img);
  box.appendChild(num);
  
  boxes.appendChild(box);

  gsap.set(box, { x: i * boxWidth, width: boxWidth, height: boxHeight });
}

const animation = gsap.to(".box", {
  duration: 1,
  x: `+=${wrapWidth}`, 
  ease: "none",
  paused: true,
  modifiers: {
    x: function(x, target) {
      x = parseInt(x) % wrapWidth;
      target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
      return `${x}px`;
    }
  }
});

Draggable.create(proxy, {
  type: "x",
  trigger: ".wrapper",
  inertia: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: { 
    x: (x) => {
      return Math.round(x / boxWidth) * boxWidth;
    } 
  }
});

overflow.addEventListener("change", applyOverflow);
window.addEventListener("resize", resize);

function updateProgress() {
  animation.progress(wrapVal(this.x) / wrapWidth);
}

function resize() {
  viewWidth = viewport.offsetWidth;
  animation.render(animation.time(), false, true);
}

function applyOverflow() {
  if(overflow.checked) {
    gsap.set(".wrapper", {overflow: "visible"});
  } else {
    gsap.set(".wrapper", {overflow: "hidden"});
  }
}