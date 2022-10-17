import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import "style.css";
import "swiper.css";

//THREE

var scene, ray;
var geometry, material, mesh, camera, quarter;
var sphere;

const windowHalf = new THREE.Vector2(
  window.innerWidth / 2,
  window.innerHeight / 2
);
const gui = new dat.GUI();
dat.GUI.toggleHide();
const world = {
  sphere: {
    radius: 15.662,
    widthSegments: 32,
    heightSegments: 16,
    phiStart: 0,
    phiLength: 6.283185,
    thetaStart: 0.565486677646163,
    thetaLength: 6.283185307179586,
  },
};
gui.add(world.sphere, "radius", 1, 500).onChange(generateSphere);
gui.add(world.sphere, "widthSegments", 1, 500).onChange(generateSphere);
gui.add(world.sphere, "heightSegments", 1, 100).onChange(generateSphere);
gui.add(world.sphere, "phiStart", 0, 1).onChange(generateSphere);
gui.add(world.sphere, "phiLength", 0, 6.283185).onChange(generateSphere);
gui.add(world.sphere, "thetaStart", 0, 6.283185).onChange(generateSphere);
gui.add(world.sphere, "thetaLength", 0, 6.283185).onChange(generateSphere);

function generateSphere() {
  sphereMesh.geometry.dispose();
  sphereMesh.geometry = new THREE.SphereGeometry(
    world.sphere.radius,
    world.sphere.widthSegments,
    world.sphere.heightSegments,
    world.sphere.phiStart,
    world.sphere.phiLength,
    world.sphere.thetaStart,
    world.sphere.thetaLength
  );

  // sphereMesh.quaternion.x = (1.4 * Math.PI) / 2;
  // vertice position randomization
  const { array } = sphereMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 7;
    }

    randomValues.push(Math.random() * Math.PI * 2);
  }

  sphereMesh.geometry.attributes.position.randomValues = randomValues;
  sphereMesh.geometry.attributes.position.originalPosition =
    sphereMesh.geometry.attributes.position.array;

  const colors = [];
  for (let i = 0; i < sphereMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0.19, 0.4);
  }

  sphereMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}

ray = new THREE.Raycaster();
scene = new THREE.Scene();
scene.background = new THREE.Color("hsla(258, 16%, 7%, 0.7)");
camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1500);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 10.5;

//console.log(camera.position);
controls.enableDamping = true;
controls.enablePan = false;
controls.minPolarAngle = 0.8;
controls.maxPolarAngle = 2.4;
controls.dampingFactor = 0.07;
controls.rotateSpeed = 0.25;
camera.updateProjectionMatrix();
controls.update();

const sphereGeometry = new THREE.SphereGeometry(
  world.sphere.radius,
  world.sphere.widthSegments,
  world.sphere.heightSegments,
  world.sphere.phiStart,
  world.sphere.phiLength,
  world.sphere.thetaStart,
  world.sphere.thetaLength
);

const sphereMaterial = new THREE.MeshPhongMaterial({
  opacity: 0.6,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true,
  wireframe: false,
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);
//sphereMesh.rotation.y = 1.57;
generateSphere();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, -1, 1);
scene.add(light);

const backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0x7f00ff,
  //specular: 0xffffff,
  shininess: 500,
  // vertexColors: true,
  // transparent: false,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}

//console.log(starVertices);

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
);

//console.log(starGeometry);
//console.log(starMaterial);

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const target = new THREE.Vector3({
  x: 0.896,
  y: 0.794,
  z: -10,
});
const mouse = new THREE.Vector3({
  x: 0,
  y: 0,
  z: 50,
});

let frame = 0;
//console.log(camera.position);

//Listeners
const hamburger_menu = document.querySelector(".menu");
const container = document.querySelector(".swiper-pagination");
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("menu-active");
});
const btn = document.querySelector("#explore-button");
btn.addEventListener("click", exploreBtn, false);
window.addEventListener("load", loadHandler, 1200);
document.addEventListener("mousemove", onMouseMove, false);
document.addEventListener("onmousedown", onMouseDown, false);
document.addEventListener("wheel", onMouseWheel, false);
window.addEventListener("resize", onResize, false);

//functions
function exploreBtn(e) {
  e.preventDefault();

  var target = e.target;
  const app = document.querySelector("#app");

  if (target) {
    /* camera.rotation.x += 1.57;

    camera.position.z = 25;
    camera.updateMatrixWorld(); */

    gsap.to(camera.position, {
      z: 15,
      ease: "power4.out",
      duration: 1.5,
    });

    gsap.to(camera.rotation, {
      x: 1.2,
      y: 0.4,
      z: 0.15,
      ease: "power3.inOut",
      duration: 1.5,
      delay: 0.8,
    });

    gsap.to(camera.position, {
      y: 1000,
      ease: "power4.in",
      duration: 3,
      delay: 1,
      onComplete: () => {
        window.location = "https://coalcanvas.github.io";
      },
    });

    console.log(e.target && app.style.opacity == 1);

    app.style.opacity = 0;
    app.style.transform =
      "rotateX(80deg) translate(0px, 0px,-`15px) scaleZ(0.5)";
    app.style.transition = "all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    //camera.rotation.x = 1.57;
    // camera.position.z = 25;
    console.log(camera.position);
  } else if (!target) {
    console.log("nope");
  }
}

function onMouseMove(e) {
  mouse.x = e.clientX - windowHalf.x;
  mouse.y = e.clientY - windowHalf.x;
  // mouse.x = e.clientX;
  // mouse.y = e.clientY;
}

function onMouseDown(e) {
  mouse.x = (e.clientX / innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / innerHeight) * 2 + 1;
}

function onMouseWheel(e) {
  console.log(window.innerHeight);
  // var target = e.target;
  // const canvas = document.querySelector("canvas");

  console.log(camera.position);
  camera.position.z += e.deltaY * 0.1; // move camera along z-axis
}

function loadHandler(e) {
  var target = e.target;

  const canvas = document.querySelector("canvas");

  if (target) {
    console.log("loadd");
    let wheelEvent = new WheelEvent("wheel", {
      deltaY: 800,
      deltaMode: 0,
    });

    canvas.dispatchEvent(wheelEvent);
  }
}

function onResize(e) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set(width / 2, height / 2);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function animate() {
  target.x = (1 - mouse.x) * 0.001;
  target.y = (1 - mouse.y) * 0.001;

  //  camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
  camera.rotation.y += 0.005 * (target.x - camera.rotation.y);

  requestAnimationFrame(animate);

  ray.setFromCamera(target, camera);
  frame += 0.01;

  const { array, originalPosition, randomValues } =
    sphereMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;

    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001;
  }

  sphereMesh.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);

  const intersects = ray.intersectObject(sphereMesh);
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    const initialColor = {
      r: 0.6,
      g: 0,
      b: 1,
    };

    const hoverColor = {
      r: 0.3,
      g: 0,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    });
  }
  stars.rotation.x += 0.0005;
}

animate();

//contact form
const YOUR_PUBLIC_KEY = "OELFukrApYjYBWuwP";
const contact_service = "service_f11zj7x";
const contact_form = "template_zoh9myc";
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(YOUR_PUBLIC_KEY);
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm(contact_service, contact_form, this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
